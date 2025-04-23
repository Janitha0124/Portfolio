import { motion } from "framer-motion";
import profileImage from "./Images/image1.png"; // your image asset

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="flex justify-between items-center p-6 bg-black/60 backdrop-blur-md shadow-lg fixed top-0 w-full z-50 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white">Janitha Ruhunuhewa<span className="text-blue-500">.</span></h1>
        <div className="space-x-6">
          <a href="#about" className="text-gray-300 hover:text-blue-500 font-medium transition">About</a>
          <a href="#projects" className="text-gray-300 hover:text-blue-500 font-medium transition">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-blue-500 font-medium transition">Contact</a>
        </div>
      </nav>

      <main className="pt-32 px-6 space-y-28">
        <motion.section 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl shadow-inner p-10">

          <div className="text-left space-y-6 max-w-xl">
            <h2 className="text-6xl font-extrabold text-white leading-tight">
              JANITHA<br />RASADUN<br />RUHUNUHEWA
            </h2>
            <h3 className="text-4xl font-bold text-blue-500">FULL STACK DEVELOPER</h3>
            <p className="text-gray-300">Passionate full stack developer with a knack for creating well-designed applications and solving real-world problems through innovative solutions.</p>
            <a href="#about" className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-black transition">About Me</a>
          </div>

          <motion.img 
            src={profileImage} 
            alt="Janitha" 
            className="w-82 h-auto" 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.2 }}
          />
        </motion.section>

        <motion.section 
          id="about"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-blue-500">About Me</h3>
          <p className="text-lg text-gray-300 leading-relaxed">I'm a Computer Science undergraduate with strong skills in Java, React, Node.js, and Spring Boot. I thrive on building scalable, efficient web apps, collaborating with driven teams, and continuously mastering new technologies to stay ahead in this ever-evolving field.</p>
        </motion.section>

        <section id="projects" className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-10 text-blue-500 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold mb-3 text-white">AI-Powered Quick Notes App</h4>
              <p className="text-gray-400 mb-4">React, Node.js, MongoDB, OpenAI API</p>
              <a href="https://github.com/Janitha0124" className="text-blue-400 font-medium hover:underline">View on GitHub →</a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold mb-3 text-white">Pet Management System</h4>
              <p className="text-gray-400 mb-4">React, Node.js, MongoDB, WebSocket</p>
              <a href="https://github.com/Janitha0124" className="text-blue-400 font-medium hover:underline">View on GitHub →</a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold mb-3 text-white">Real Time Ticketing System</h4>
              <p className="text-gray-400 mb-4">Java, SpringBoot, WebSocket, React</p>
              <a href="https://github.com/Janitha0124" className="text-blue-400 font-medium hover:underline">View on GitHub →</a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h4 className="text-2xl font-semibold mb-3 text-white">Student Mark Management System</h4>
              <p className="text-gray-400 mb-4">python</p>
              <a href="https://github.com/Janitha0124" className="text-blue-400 font-medium hover:underline">View on GitHub →</a>
            </motion.div>
          </div>
        </section>

        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-blue-500">Contact</h3>
          <div className="space-y-3 text-lg">
            <p>📧 <a href="mailto:janitharasadun828@gmail.com" className="text-blue-400 hover:underline">janitharasadun828@gmail.com</a></p>
            <p>📱 +94741222870</p>
            <p>🔗 <a href="https://www.linkedin.com/in/janitha-ruz/" className="text-blue-400 hover:underline">LinkedIn Profile</a></p>
            <p>💻 <a href="https://github.com/Janitha0124" className="text-blue-400 hover:underline">GitHub Repositories</a></p>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;