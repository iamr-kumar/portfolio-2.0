'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, FolderGit2, MessageSquare, Mail, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setIsExpanded(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isHovered]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        layout
        className="backdrop-blur-lg bg-slate-800/60 border border-slate-700/50 rounded-full shadow-2xl shadow-slate-900/50 overflow-hidden"
        animate={{
          width: isExpanded ? 'auto' : '48px',
          height: isExpanded ? 'auto' : '48px',
          minHeight: '48px',
          minWidth: '48px',
          padding: isExpanded ? '12px 24px' : '12px',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex items-center gap-2 sm:gap-4 whitespace-nowrap"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative group"
                  >
                    <div
                      className={`relative hover:cursor-pointer flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-colors ${
                        isActive
                          ? 'text-cyan-400'
                          : 'text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden md:inline text-sm font-medium">
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.1 }}
              className="flex items-center justify-center w-full h-full absolute inset-0"
            >
              <Menu className="w-5 h-5 text-cyan-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
