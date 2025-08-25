import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Zap } from "lucide-react";

// Base fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Container for staggered animations
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const popUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="font-sans bg-gray-950 text-white relative overflow-hidden">
      {/* 🌌 Interactive Glow Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(236, 72, 153, 0.3), transparent 70%)`,
            `radial-gradient(600px at ${mousePos.x + 50}px ${mousePos.y + 50}px, rgba(99, 102, 241, 0.3), transparent 70%)`,
          ],
        }}
        transition={{ ease: "linear", duration: 0.2 }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.h1
  variants={fadeUp}
  className="text-5xl font-extrabold mb-4"
  style={{
    fontFamily: "'Orbitron', sans-serif",
    textShadow:
      "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(236,72,153,0.6), 0 0 40px rgba(99,102,241,0.5)"
  }}
>
  TaskFlow
</motion.h1>


          <motion.p variants={fadeUp} className="max-w-xl mx-auto text-lg opacity-90">
            Organize your life, boost productivity, and collaborate seamlessly.
          </motion.p>
          <motion.button
            variants={fadeUp}
            className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-950 relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose TaskFlow?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {[
            {
              icon: <CheckCircle size={40} className="text-pink-500" />,
              title: "Stay Organized",
              text: "Create, manage, and track your tasks with ease.",
            },
            {
              icon: <Zap size={40} className="text-yellow-400" />,
              title: "Boost Productivity",
              text: "Focus on what matters with smart reminders.",
            },
            {
              icon: <Users size={40} className="text-green-400" />,
              title: "Collaborate Easily",
              text: "Work together in real-time with your team.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              variants={popUp}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="opacity-75">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-900 to-gray-800 relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Loved by Users
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {[
            {
              name: "Alex",
              review:
                "TaskFlow completely changed how I organize my work. Highly recommend!",
            },
            {
              name: "Sarah",
              review:
                "The collaboration features are a game-changer for our team projects.",
            },
            {
              name: "Lionel",
              review:
                "Beautiful design, smooth experience, and powerful features.",
            },
          ].map((rev, idx) => (
            <motion.div
              key={idx}
              variants={popUp}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
            >
              <p className="italic mb-4">"{rev.review}"</p>
              <span className="font-semibold">{rev.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-gray-950 relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Choose Your Plan
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {[
            { name: "Free", price: "$0", desc: "Basic features for personal use." },
            { name: "Pro", price: "$9/mo", desc: "Advanced tools for productivity." },
            { name: "Team", price: "$29/mo", desc: "Collaboration for teams." },
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              variants={popUp}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <p className="opacity-75 mb-6">{plan.desc}</p>
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 to-pink-600 py-8 text-center relative z-10">
        <p className="mb-4">© 2025 TaskFlow. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
      </footer>
    </div>
  );
}
