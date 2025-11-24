'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Ritik was great to work with, he's incredibly patient, quick to understand novel concepts and really reliable. We achieved a lot working together. Would definitely work with him again.",
    name: "Andre Branton",
    role: "Upwork Client",
    avatar: "AB",
  },
  {
    quote: "Ritik is a hardworking individual with a passion to find technical solutions to complex technical problems. His enthusiasm for learning is commendable and fits effortlessly in the team. He goes above and beyond to help in tough situations and was a valuable asset to the company",
    name: "Ankita Sinha",
    role: "CTO at Gravitas AI",
    avatar: "AS",
  },
  {
    quote: "Despite his young age, Ritik is clearly an experienced and skilled developer. He grasps complex concepts quickly and can communicate ideas, solutions, and designs in a concise and logical manner. His work is well organized and his code is clean and concise. He has a promising career ahead of him. I would happily work with him again and wouldn't hesitate to recommend him to others.",
    name: "Colin A. White",
    role: "Upwork Client",
    avatar: "CW",
  },
  {
    quote: "I was unsure about hiring this freelancer at first. However, I'm thrilled I gave him a chance in the end. I've worked with a few other freelancers, and Ritik's communication was second to none. His skills are adequate for what I needed, and despite facing a few challenges, he decided to learn and ultimately complete the job successfully. I wholeheartedly recommend Ritik to anyone!",
    name: "Vulko Mitev",
    role: "Upwork Client",
    avatar: "VM",
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative min-h-screen flex flex-row-reverse items-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:grid lg:grid-cols-[1fr_2px_30%] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  x: direction > 0 ? 100 : -100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: direction > 0 ? -100 : 100,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="w-full"
              >
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 sm:p-12 backdrop-blur-sm h-full flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-cyan-400/30 mb-6" />

                  <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-200">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-cyan-400 w-8'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        <div className="hidden lg:block w-0.5 h-92 bg-slate-700/50" />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-right"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-200 mb-6">
            Testimonials
          </h2>
          <p className="text-xl text-gray-400">
            What people I've worked with say
          </p>
        </motion.div>
      </div>
    </section>
  );
}
