const projects = [
    {
        id: 1,
        logos: ["/socketIO.png", "/html.png"],
        name: "socketIO , js and HTML",
        run: "https://rooms-and-chatting.onrender.com/",
        runText: "Run",
        source: "https://github.com/Darkseid1729/honeyChats",
        sourceText: "Source Code",
        description: "Users can log in with a name, create or join chat rooms (with custom or random codes), and exchange messages in real time."
    },
    {
        id: 2,
        logos: ["/messenger.png"],
        name: "Social Media Messenger",
        source: [
            { url: "https://github.com/Darkseid1729/Social-media-client", text: "Client" },
            { url: "https://github.com/Darkseid1729/Social-media-server", text: "Server" }
        ],
        run: "https://social-media-adi.vercel.app/",
        runText: "Run",
        description: "A full-featured social media messenger app where users can sign up, connect, and chat in real time. Built with a modern tech stack for seamless messaging and social interaction."
    },
    {
        id: 3,
        logos: [
            "/socketIO.png",
            "/html.png",
            "/reactjs.png",
            "/node.png",
            "/java.png",
            "/python.png"
        ],
        name: "React.js",
        source: "https://github.com/facebook/react",
        sourceText: "not done yet",
        run: "https://stackblitz.com/edit/expressjs-example",
        runText: "404",
        description: "A JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
    },
    {
        id: 4,
        logos: ["/node.png"],
        name: "Node.js",
        source: "https://github.com/nodejs/node",
        sourceText: "not done yet",
        run: "https://stackblitz.com/edit/expressjs-example",
        runText: "404",
        description: "A JavaScript runtime built on Chrome's V8 engine, enabling server-side scripting and building scalable network applications."
    },
    {
        id: 5,
        logos: ["/java.png"],
        name: "Java",
        source: "https://github.com/openjdk/jdk",
        sourceText: "not done yet",
        run: "https://stackblitz.com/edit/expressjs-example",
        runText: "404",
        description: "A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible."
    },
    {
        id: 6,
        logos: ["/python.png"],
        name: "Python",
        source: "https://github.com/python/cpython",
        sourceText: "not done yet",
        run: "https://stackblitz.com/edit/expressjs-example",
        runText: "404",
        description: "A high-level, interpreted programming language known for its readability and broad library support."
    }
];

export default projects;
