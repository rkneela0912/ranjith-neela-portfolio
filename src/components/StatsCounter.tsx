import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Briefcase, Award } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: 12, suffix: '+', label: 'Years Experience' },
  { icon: Users, value: 50, suffix: '+', label: 'Enterprise Clients' },
  { icon: TrendingUp, value: 100, suffix: '+', label: 'Projects Delivered' },
  { icon: Award, value: 6, suffix: '', label: 'Certifications' },
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

const StatItem = ({ stat, isVisible }: { stat: typeof stats[0], isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  return (
    <div className="text-center group">
      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
        <stat.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
      </div>
      <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
        {count}{stat.suffix}
      </p>
      <p className="text-muted-foreground">{stat.label}</p>
    </div>
  );
};

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/30 border-y border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
