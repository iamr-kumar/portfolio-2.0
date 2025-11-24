'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'StreamTube',
    description: 'A web app to live stream to YouTube from your browser. Uses ffmpeg to convert the stream to RTMP.',
    image: '/streamtube.png',
    tags: ['Next.js', 'Node.js', 'Web Sockets', 'Docker'],
    liveUrl: 'https://streamtube.devritik.com',
    codeUrl: 'https://github.com/iamr-kumar/streamtube',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Web Smith',
    description: 'A web app that can create React and Nodejs based apps using AI. Also supports live preview.',
    image: '/websmith.png',
    tags: ['TypeScript', 'React', 'Nodejs', 'Web Containers'],
    liveUrl: 'https://web-smith-teal.vercel.app/',
    codeUrl: 'https://github.com/iamr-kumar/bolt.newer',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Cheer Up',
    description: 'A platform to bridge the communication gap between therapists and their patients by staying connected and allowing therapists to observe their patients activites. ',
    image: '/cheerup.png',
    tags: ['TypeScript', 'Next.js', 'Mongo DB', 'Web Sockets', 'JavaScript'],
    liveUrl: 'https://cheer-up-app.onrender.com/',
    codeUrl: 'https://github.com/iamr-kumar/cheer-up',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Float Chat',
    description: 'An end-to-end encrypted web based, real-time chat application',
    image: '/floatchat.png',
    tags: ['JavaScript', 'Node.js', 'Mongo DB', 'Web Sockets'],
    liveUrl: 'https://float-chat.onrender.com/',
    codeUrl: 'https://github.com/iamr-kumar/Float-Chat',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Med Blog',
    description: 'A platform for pateints and survivors to share their stories so that others can get inspired and take the right steps. ',
    image: '/medblog.png',
    tags: ['JavaScript', 'Node.js', 'Mongo DB'],
    liveUrl: 'https://focused-lamport-fdaaba.netlify.app/',
    codeUrl: 'https://github.com/iamr-kumar/MedBlog',
    gradient: 'from-orange-500/20 to-red-500/20',
  }
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCardIndex = (index: number) => {
    return (index - currentIndex + projects.length) % projects.length;
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden"
    >


      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[30%_2px_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left mb-16 md:mb-24 lg:mb-0"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-200 mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-400">
            Swipe to explore my recent work
          </p>
        </motion.div>

        <div className="hidden lg:block w-0.5 h-96 bg-slate-700/50" />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[500px] md:h-[600px] lg:h-[600px] flex items-center justify-center">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              {projects.map((project, index) => {
                const position = getCardIndex(index);
                const isActive = position === 0;
                const isVisible = position < 3;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={project.title}
                    custom={direction}
                    initial={{
                      scale: 0.85 - position * 0.05,
                      y: -position * 40,
                      x: position * 60,
                      opacity: 0,
                      rotateY: direction > 0 ? 20 : -20,
                    }}
                    animate={{
                      scale: 0.95 - position * 0.05,
                      y: -position * 40,
                      x: position * 60,
                      opacity: 1 - position * 0.3,
                      rotateY: 0,
                      zIndex: 10 - position,
                    }}
                    exit={{
                      scale: 0.8,
                      opacity: 0,
                      rotateY: direction > 0 ? -20 : 20,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className={`absolute w-full max-w-2xl ${
                      isActive ? 'cursor-default' : 'pointer-events-none'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: 1000,
                    }}
                  >
                    <motion.div
                      whileHover={isActive ? { y: -8, scale: 1.02 } : {}}
                      transition={{ duration: 0.3 }}
                      className={`relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl`}
                    >
                      <div className="absolute inset-0 bg-slate-800/90 rounded-3xl" />

                      <div className="relative z-10 space-y-6">
                        <div className="aspect-video rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-700/50">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-gray-100 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600/50 text-cyan-400 text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>
                          <motion.a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors border border-slate-600"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
              className="p-4 hover:cursor-pointer rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProject}
              className="p-4 hover:cursor-pointer rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
