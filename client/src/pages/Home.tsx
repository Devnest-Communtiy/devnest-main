import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, 
  Zap, 
  Palette, 
  Layers, 
  Users, 
  BookOpen, 
  Trophy, 
  Rocket, 
  PlayCircle,
  Twitter,
  Github,
  MessageSquare,
  Youtube,
  Menu,
  X
} from 'lucide-react';

// Custom hook for counter animation
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return { count, setIsVisible };
};

// Animated Background Component
const AnimatedBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);

  return (
    <>
      {/* Base gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
      
      {/* Animated grid overlay */}
      <motion.div 
        style={{ y }}
        className="fixed inset-0 pointer-events-none"
      >
        {/* Primary grid */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 25s linear infinite'
          }}
        />
        
        {/* Secondary smaller grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '25px 25px',
            animation: 'gridMove 15s linear infinite reverse'
          }}
        />
        
        {/* Glowing intersections */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50px 50px, rgba(147, 51, 234, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 25s linear infinite, pulse 4s ease-in-out infinite'
          }}
        />
        
        {/* Cyber grid lines with glow */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.4) 2px, transparent 2px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.4) 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px',
            animation: 'gridMove 30s linear infinite',
            filter: 'blur(0.5px)'
          }}
        />
      </motion.div>
      
      {/* Floating grid particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <style >{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </>
  );
};

// Navigation Component
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-50 bg-white/10 backdrop-blur-lg border border-white/20 p-4 m-4 rounded-2xl"
    >
      <div className="flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white drop-shadow-lg">DevNest</span>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Community', 'Resources', 'Projects', 'About'].map((item) => (
            <motion.a 
              key={item}
              href="#" 
              className="text-white hover:text-purple-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <motion.button 
            className="bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 pt-4 border-t border-white/20 space-y-2"
        >
          {['Community', 'Resources', 'Projects', 'About'].map((item) => (
            <a key={item} href="#" className="block text-white hover:text-purple-300 py-2">
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <motion.div 
          className="mb-8"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative inline-block">
            <motion.div 
              className="absolute inset-0 bg-purple-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ opacity: 0.3 }}
            />
            <div className="relative w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Nest</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Code • Vite • Tailwind • Framer Motion
        </motion.p>
        
        <motion.p 
          className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Join the next generation of developers building the future with cutting-edge web technologies. 
          Learn, collaborate, and innovate in our vibrant Web3 community.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 px-8 py-4 rounded-xl text-lg font-semibold text-white overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <Rocket className="w-5 h-5 inline mr-2" />
            Get Started
          </motion.button>
          
          <motion.button 
            className="border border-purple-500 px-8 py-4 rounded-xl text-lg text-white hover:bg-purple-500/20 transition-all"
            whileHover={{ scale: 1.05, borderColor: '#a855f7' }}
            whileTap={{ scale: 0.95 }}
          >
            <PlayCircle className="w-5 h-5 inline mr-2" />
            Watch Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Tech Stack Card Component
interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  gradient: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, description, delay, gradient }) => {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 10,
        rotateX: 10,
        boxShadow: '0 20px 40px rgba(147, 51, 234, 0.3)'
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

// Tech Stack Section
const TechStackSection: React.FC = () => {
  const techStack = [
    {
      icon: <Code2 className="w-6 h-6 text-white" />,
      title: "Vite",
      description: "Lightning-fast build tool for modern web development",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Framer Motion",
      description: "Production-ready motion library for React",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: "Web3",
      description: "Decentralized applications and blockchain integration",
      gradient: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Tech Stack
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <TechCard 
              key={tech.title}
              {...tech}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, gradient }) => {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(147, 51, 234, 0.2)' }}
    >
      <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

// Features Section
const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Vibrant Community",
      description: "Connect with like-minded developers, share knowledge, and collaborate on exciting projects.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Learn & Grow",
      description: "Access cutting-edge tutorials, workshops, and resources to advance your skills.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      title: "Build & Ship",
      description: "Turn your ideas into reality with our project-based learning approach.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose DevNest?
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              {...feature}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Counter Component
interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  color: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, label, suffix = '', color }) => {
  const { count, setIsVisible } = useCounter(end);

  return (
    <motion.div 
      className="text-center group"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className={`text-4xl font-bold ${color} mb-2 group-hover:scale-110 transition-transform`}>
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
};

// Stats Section
const StatsSection: React.FC = () => {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCounter end={10000} label="Active Developers" suffix="+" color="text-purple-400" />
            <StatCounter end={500} label="Projects Built" suffix="+" color="text-blue-400" />
            <StatCounter end={50} label="Countries" suffix="+" color="text-green-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Github className="w-5 h-5" />, href: "#" },
    { icon: <MessageSquare className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" }
  ];

  return (
    <footer className="relative z-10 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white drop-shadow-lg">DevNest</span>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  className="text-white hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Floating Particles Component
const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    const createParticle = () => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        delay: Math.random() * 2
      };
      
      setParticles(prev => [...prev, newParticle]);
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 10000);
    };

    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-50"
          initial={{ 
            x: `${particle.x}vw`, 
            y: '100vh',
            opacity: 0
          }}
          animate={{ 
            y: '-10vh',
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 10,
            delay: particle.delay,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

// Main App Component
const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden min-h-screen">
      <AnimatedBackground />
      <FloatingParticles />
      <Navigation />
      <HeroSection />
      <TechStackSection />
      <FeaturesSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Home;