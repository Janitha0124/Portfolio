import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import profileImage from "./Images/image1.png"; // your image asset

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 bg-black/60 backdrop-blur-md shadow-lg fixed top-0 w-full z-50 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white">
          Janitha Ruhunuhewa<span className="text-blue-500">.</span>
        </h1>
        <div className="space-x-6">
          <a href="#about" className="text-gray-300 hover:text-blue-500">
            About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-blue-500">
            Contact
          </a>
        </div>
      </nav>

      <main className="pt-32 px-6 space-y-28">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl shadow-inner p-10"
        >
          <div className="text-left space-y-6 max-w-xl">
            <h2 className="text-6xl font-extrabold text-white leading-tight">
              JANITHA
              <br />
              RASADUN
              <br />
              RUHUNUHEWA
            </h2>
            <h3 className="text-4xl font-bold text-blue-500">
              FULL STACK DEVELOPER
            </h3>
            <p className="text-gray-300">
              Full stack developer focused on building elegant applications and
              turning complex problems into effective, real-world solutions.
            </p>
            <a
              href="#about"
              className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-black transition"
            >
              About Me
            </a>
          </div>

          <motion.img
            src={profileImage}
            alt="Janitha"
            className="w-82 h-auto rounded-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section
          id="about"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center scroll-mt-28"
        >
          <h3 className="text-4xl font-bold mb-6 text-blue-500">About Me</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a Computer Science undergraduate with strong skills in Java,
            React, Node.js, and Spring Boot. I thrive on building scalable,
            efficient web apps, collaborating with driven teams, and
            continuously mastering new technologies to stay ahead in this
            ever-evolving field.
          </p>
        </motion.section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="max-w-6xl mx-auto scroll-mt-28">
          <h3 className="text-4xl font-bold mb-10 text-blue-500 text-center">
            Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* First 4 Projects */}
            {/* Repeat this div to add new ones */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition"
            >
              <h4 className="text-2xl font-semibold mb-3 text-white">
                Pet Management System
              </h4>
              <p className="text-gray-400 mb-4">
                React, Node.js, MongoDB, WebSocket
              </p>
              <a
                href="https://github.com/Janitha0124"
                className="text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
              <a
                href="https://www.pet-lifes.com"
                className="text-blue-400 hover:underline pl-5"
              >
                View Site →
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition"
            >
              <h4 className="text-2xl font-semibold mb-3 text-white">
                Virtual Product Tryout for Local Shops
              </h4>
              <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                🔄 Ongoing
              </span>
              <p className="text-gray-400 mb-4">
                React, Node.js, MongoDB, Tailwind CSS
              </p>
              <a
                href="https://github.com/Janitha0124"
                className="text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition"
            >
              <h4 className="text-2xl font-semibold mb-3 text-white">
                Real Time Ticketing System
              </h4>
              <p className="text-gray-400 mb-4">
                Java, Spring Boot, WebSocket, React
              </p>
              <a
                href="https://github.com/Janitha0124"
                className="text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition"
            >
              <h4 className="text-2xl font-semibold mb-3 text-white">
                Student Mark Management System
              </h4>
              <p className="text-gray-400 mb-4">Python</p>
              <a
                href="https://github.com/Janitha0124"
                className="text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
            </motion.div>

            {/* Show More Section */}
            {showMore && (
              <>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition"
                >
                  <h4 className="text-2xl font-semibold mb-3 text-white">
                    QuizeGame
                  </h4>
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    🔄 Ongoing
                  </span>
                  <p className="text-gray-400 mb-4">Java</p>
                  <a href="#" className="text-blue-400 hover:underline">
                    View on GitHub →
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition"
                >
                  <h4 className="text-2xl font-semibold mb-3 text-white">
                    Ticketing-System-CLI
                  </h4>
                  <p className="text-gray-400 mb-4">Java</p>
                  <a href="#" className="text-blue-400 hover:underline">
                    View on GitHub →
                  </a>
                </motion.div>
              </>
            )}
          </div>

          {/* View More Projects Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-black transition"
            >
              {showMore ? "View Less Projects" : "View More Projects"}
            </button>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <h3 className="text-4xl font-bold mb-6 text-blue-500">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6 text-5xl">
            <div className="text-cyan-400 flex flex-col items-center">
              <FaReact /> <p className="text-base mt-1">React</p>
            </div>
            <div className="text-green-500 flex flex-col items-center">
              <FaNodeJs /> <p className="text-base mt-1">Node.js</p>
            </div>
            <div className="text-orange-500 flex flex-col items-center">
              <FaJava /> <p className="text-base mt-1">Java</p>
            </div>
            <div className="text-yellow-300 flex flex-col items-center">
              <FaPython /> <p className="text-base mt-1">Python</p>
            </div>
            <div className="text-blue-300 flex flex-col items-center">
              <FaDatabase /> <p className="text-base mt-1">MongoDB</p>
            </div>
            <div className="text-orange-600 flex flex-col items-center">
              <FaHtml5 /> <p className="text-base mt-1">HTML5</p>
            </div>
            <div className="text-blue-500 flex flex-col items-center">
              <FaCss3Alt /> <p className="text-base mt-1">CSS3</p>
            </div>
            <div className="text-red-500 flex flex-col items-center">
              <FaGitAlt /> <p className="text-base mt-1">Git</p>
            </div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center scroll-mt-28"
        >
          <h3 className="text-4xl font-bold mb-10 text-blue-500">Contact</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:shadow-xl transition flex flex-col items-center">
              <p className="text-3xl mb-3">📧</p>
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto:janitharasadun828@gmail.com"
                className="text-blue-400 hover:underline"
              >
                janitharasadun828@gmail.com
              </a>
            </div>

            <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:shadow-xl transition flex flex-col items-center">
              <p className="text-3xl mb-3">📱</p>
              <p className="text-lg text-gray-300">Phone</p>
              <p className="text-blue-400">+94 741 222 870</p>
            </div>

            <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:shadow-xl transition flex flex-col items-center">
              <p className="text-3xl mb-3">🔗</p>
              <p className="text-lg text-gray-300">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/janitha-ruz/"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/janitha-ruz
              </a>
            </div>

            <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:shadow-xl transition flex flex-col items-center">
              <p className="text-3xl mb-3">💻</p>
              <p className="text-lg text-gray-300">GitHub</p>
              <a
                href="https://github.com/Janitha0124"
                className="text-blue-400 hover:underline"
              >
                github.com/Janitha0124
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
