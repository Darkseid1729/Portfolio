import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  contactHeading,
  contactSubheading,
  formHeading,
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  requiredFieldMsg,
  sendButton,
  sendingButton
} from "../data/contactData";

function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Animation refs
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const fieldRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 92%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    if (fieldRefs.current.length) {
      gsap.fromTo(
        fieldRefs.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.13,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 94%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 94%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      message: data.message
    };
    try {
      await axios.post("https://getform.io/f/bmdmreya", userInfo);
      toast.success("Message sent successfully!");
    } catch (error) {
      if (error.response && error.response.status === 429) {
        toast.error("You have sent too many requests. Please try again later.");
      } else {
        toast.error("Failed to send message.");
      }
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
        ref={sectionRef}
      >
        <h1 className="text-2xl font-bold mb-4">{contactHeading}</h1>
        <span>{contactSubheading}</span>
        <div className="flex flex-col items-center justify-center mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-2xl shadow-xl"
            ref={formRef}
          >
            <h1 className="text-lg font-semibold mb-2">{formHeading}</h1>
            <div
              className="flex flex-col items-start mt-5"
              ref={el => fieldRefs.current[0] = el}
            >
              <label className="block text-gray-700" htmlFor="fullname">{nameLabel}</label>
              <input
                {...register("fullname", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="fullname"
                name="fullname"
                type="text"
                placeholder={namePlaceholder} />
              {errors.fullname && <span className="text-red-500 text-xs">{requiredFieldMsg}</span>}
            </div>

            <div
              className="flex flex-col items-start mt-5"
              ref={el => fieldRefs.current[1] = el}
            >
              <label className="block text-gray-700" htmlFor="email">{emailLabel}</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder={emailPlaceholder} />
              {errors.email && <span className="text-red-500 text-xs">{requiredFieldMsg}</span>}
            </div>
            {/* message */}
            <div
              className="flex flex-col items-start mt-5"
              ref={el => fieldRefs.current[2] = el}
            >
              <label className="block text-gray-700" htmlFor="message">{messageLabel}</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows={4}
                placeholder={messagePlaceholder}
              />
              {errors.message && <span className="text-red-500 text-xs">{requiredFieldMsg}</span>}
            </div>
            <button
              type="submit"
              className="mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-500 hover:to-blue-600 shadow-lg transition-all duration-200 font-bold tracking-wide"
              disabled={loading}
              ref={buttonRef}
            >
              {loading ? sendingButton : sendButton}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;