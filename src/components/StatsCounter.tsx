import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Briefcase, Award } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { icon: Briefcase, value: 12, suffix: '+', label: 'Years Experience' },
  { icon: Users, value: 50, suffix: '+', label: 'Enterprise Clients' },
  { icon: TrendingUp, value: 100, suffix: '+', label: 'Projects Delivered' },
  { icon: Award, value: 6, suffix: '+', label: 'Certifications' },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
};

const StatItem = ({ stat, isVisible, index }: { stat: typeof stats[0], isVisible: boolean, index: number }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  return (
    <motion.div 
      className="text-center group"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div 
        className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <stat.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
      </motion.div>
      <motion.p 
        className="text-4xl md:text-5xl font-bold text-foreground mb-2"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
      >
        {count}{stat.suffix}
      </motion.p>
      <p className="text-muted-foreground">{stat.label}</p>
    </motion.div>
  );
};

const StatsCounter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/30 border-y border-border relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"
        animate={{ 
          x: ['-100%', '100%']
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} isVisible={isInView} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
