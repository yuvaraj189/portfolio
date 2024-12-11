import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-black text-white min-h-screen">
      {/* Background Section */}
      <section className="bg-gray-900 py-16">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hello, I'm [Your Name]
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl mb-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          A Creative Full Stack Developer & Tech Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <p className="text-center px-6 text-lg">
            With years of experience in development, I specialize in building user-friendly and efficient applications. My journey has taken me through various challenges and achievements, and I’m excited to share my story.
          </p>
        </motion.div>
      </section>

      {/* Career Map Section */}
      <section className="bg-gray-800 py-16">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          My Career Journey
        </motion.h2>
        <div className="container mx-auto px-6">
          <motion.div
            className="timeline-item bg-gray-700 p-6 rounded-lg shadow-md mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold mb-2">Student</h3>
            <p>
              Began my journey with a passion for technology, learning the fundamentals of programming and software development.
            </p>
          </motion.div>
          <motion.div
            className="timeline-item bg-gray-700 p-6 rounded-lg shadow-md mb-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">Intern at XYZ Corp</h3>
            <p>
              Gained hands-on experience in real-world projects, contributing to the development of scalable web applications.
            </p>
          </motion.div>
          <motion.div
            className="timeline-item bg-gray-700 p-6 rounded-lg shadow-md mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
          >
            <h3 className="text-xl font-semibold mb-2">Full-Time at ABC Ltd</h3>
            <p>
              Joined as a full-stack developer, building robust applications and mentoring junior developers.
            </p>
          </motion.div>
          <motion.div
            className="timeline-item bg-gray-700 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6 }}
          >
            <h3 className="text-xl font-semibold mb-2">Freelancer</h3>
            <p>
              Worked with multiple clients globally, delivering tailored solutions and gaining diverse industry exposure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-6 py-16">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          My Achievements
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Projects Delivered", value: 25 },
            { title: "Years of Experience", value: 5 },
            { title: "Problems Solved", value: 300 },
            { title: "Happy Clients", value: 50 },
            { title: "Awards Won", value: 10 },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-4xl font-extrabold text-teal-500">
                <CountUp end={achievement.value} duration={2} />+
              </h3>
              <p className="text-lg mt-2">{achievement.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="bg-gray-900 py-16">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          A Bit About Me
        </motion.h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold">My Journey</h3>
            <p>
              Starting as a curious learner, my passion for technology has led me through a rewarding path of challenges and successes.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold">My Hobbies</h3>
            <p>
              Exploring new technologies, traveling, and indulging in books that fuel creativity are some of my favorite pastimes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-700 py-16">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Let's Collaborate
        </motion.h2>
        <div className="text-center">
          <p className="mb-8 text-white">
            Feel free to reach out for collaborations or just to say hi!
          </p>
          <button className="bg-black text-teal-500 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-800 hover:text-white transition-transform transform hover:scale-105">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
