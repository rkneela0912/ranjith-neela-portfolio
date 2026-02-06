import { ArrowDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import profileImage from '@/assets/profile.png';
import { GlowingOrb, MagneticButton } from './AnimatedSection';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30"
    >
      {/* Animated background orbs */}
      <GlowingOrb className="top-1/4 -right-20 w-96 h-96 bg-accent/20" delay={0} />
      <GlowingOrb className="top-1/3 -right-10 w-64 h-64 bg-accent/30" delay={1} />
      <GlowingOrb className="-bottom-20 -left-20 w-80 h-80 bg-accent/15" delay={2} />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating squares with enhanced animation */}
        <motion.div 
          className="absolute top-20 left-1/4 w-20 h-20 border border-accent/20 rotate-45 rounded-lg"
          animate={{ 
            y: [0, -20, 0],
            rotate: [45, 55, 45],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 left-20 w-12 h-12 bg-accent/10 rotate-12 rounded-lg"
          animate={{ 
            y: [0, -15, 0],
            rotate: [12, 20, 12]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-accent/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Accent dots with pulse */}
        <motion.div 
          className="absolute top-1/2 left-10 w-3 h-3 rounded-full bg-accent"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-accent"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-accent"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image - Now on LEFT */}
          <motion.div 
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <motion.div 
                className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-90"
                animate={{ 
                  scale: [0.9, 1, 0.9],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative ring */}
                <motion.div 
                  className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-accent/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Second ring rotating opposite */}
                <motion.div 
                  className="absolute inset-0 -m-8 rounded-full border border-accent/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Image */}
                <motion.div 
                  className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={profileImage}
                    alt="Ranjith Neela - Microsoft Solutions Architect"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Stats floating card */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 px-5 py-3 bg-card rounded-xl border border-border shadow-xl"
                  initial={{ opacity: 0, scale: 0, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <p className="text-2xl font-bold text-foreground">12+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </motion.div>
                
                {/* Tech badge */}
                <motion.div 
                  className="absolute -top-2 -left-2 px-4 py-2 bg-accent text-white rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <p className="text-xs font-semibold">Microsoft Expert</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content - Now on RIGHT */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name with animated reveal */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                <motion.span 
                  className="block text-foreground"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Ranjith
                </motion.span>
                <motion.span 
                  className="block text-gradient"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Neela
                </motion.span>
              </h1>
            </motion.div>

            {/* Titles */}
            <motion.div className="space-y-3" variants={itemVariants}>
              <motion.p 
                className="text-xl md:text-2xl font-light text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Microsoft Certified Solutions Architect
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl text-accent font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                AI Enablement Engineer
              </motion.p>
            </motion.div>

            {/* Description with typing effect simulation */}
            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              Specializing in <span className="text-foreground font-medium">Power Platform</span>, 
              {' '}<span className="text-foreground font-medium">Conversational AI</span>, and{' '}
              <span className="text-foreground font-medium">Azure</span>. 
              12+ years driving enterprise digital transformation for government and private-sector organizations.
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <MagneticButton>
                <a href="#experience" className="group btn-primary">
                  View Experience
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#contact" className="btn-outline">
                  Let's Talk
                </a>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-8 pt-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-1">
                <motion.div 
                  className="w-12 h-px bg-gradient-to-r from-border to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                />
              </div>
              <div className="flex items-center gap-4">
                {[
                  { href: "https://github.com/rkneela0912/", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/ranjith-k-n-846992125/", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:iamranjithkneela@gmail.com", icon: Mail, label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : "_blank"}
                    rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                    className="group p-3 rounded-full bg-secondary hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <motion.div 
                className="w-1 h-2 rounded-full bg-current"
                animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
