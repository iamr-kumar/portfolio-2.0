'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';



const socialLinks = [
  { icon: Github, href: 'https://github.com/iamr-kumar', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ritikkumar29/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/itsr_kumar', label: 'Twitter' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >


      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-3 gap-12 items-center justify-center">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="font-bold mb-4">
            <span className="text-gray-300 text-2xl md:text-3xl lg:text-4xl">Hi, I am</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
              Ritik Kumar
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Software Engineer
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full border border-slate-700 hover:border-cyan-500 bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
          className="relative"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-2xl animate-pulse" />
            <div className="relative w-full h-full rounded-full border-4 border-cyan-500/30 overflow-hidden">
              <img
                src="/hero_image.png"
                alt="Ritik"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            I build scalable systems, solve complex problems, and create innovative solutions.
            Right now, working at Microsoft Azure PostgreSQL as a Software Engineer.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
