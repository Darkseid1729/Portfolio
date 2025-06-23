import React, { useState } from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-2xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to get in touch with me.</span>
        <div className="flex flex-col items-center justify-center mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-2xl">
            <h1>Send Your Message </h1>
            <div className="flex flex-col items-start mt-5">
              <label className="block text-gray-700" htmlFor="fullname">Full Name</label>
              <input
                {...register("fullname", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Enter your full name" />
              {errors.fullname && <span>This field is required</span>}
            </div>

            <div className="flex flex-col items-start mt-5">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email" />
              {errors.email && <span>This field is required</span>}
            </div>
            {/* message */}
            <div className="flex flex-col items-start mt-5">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows={4}
                placeholder="Enter your message"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;