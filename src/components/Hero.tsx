import { ArrowDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImage from '@/assets/profile.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30"
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating circles */}
        <div 
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-accent/5 animate-float"
          style={{ animationDelay: '0s', animationDuration: '8s' }}
        />
        <div 
          className="absolute top-1/3 -right-10 w-64 h-64 rounded-full bg-accent/10 animate-float"
          style={{ animationDelay: '1s', animationDuration: '6s' }}
        />
        <div 
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/5 animate-float"
          style={{ animationDelay: '2s', animationDuration: '7s' }}
        />
        
        {/* Floating squares */}
        <div 
          className="absolute top-20 left-1/4 w-20 h-20 border border-accent/20 rotate-45 animate-float rounded-lg"
          style={{ animationDelay: '2s', animationDuration: '7s' }}
        />
        <div 
          className="absolute bottom-32 left-20 w-12 h-12 bg-accent/10 rotate-12 animate-float rounded-lg"
          style={{ animationDelay: '0.5s', animationDuration: '5s' }}
        />
        
        {/* Accent dots */}
        <div className="absolute top-1/2 left-10 w-3 h-3 rounded-full bg-accent/40 animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-accent/30 animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-accent/50 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image - Now on LEFT */}
          <div 
            className={`relative flex justify-center lg:justify-start order-2 lg:order-1 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-90" />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Decorative ring */}
                <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-accent/20 animate-[spin_20s_linear_infinite]" />
                
                {/* Image */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Ranjith Neela - Microsoft Solutions Architect"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Stats floating card */}
                <div className="absolute -bottom-4 -right-4 px-5 py-3 bg-card rounded-xl border border-border shadow-xl">
                  <p className="text-2xl font-bold text-foreground">12+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                
                {/* Tech badge */}
                <div className="absolute -top-2 -left-2 px-4 py-2 bg-accent text-white rounded-full shadow-lg">
                  <p className="text-xs font-semibold">Microsoft Expert</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Now on RIGHT */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-medium tracking-wider uppercase">
                Available for Projects
              </span>
            </div>

            {/* Name with animated reveal */}
            <div className="space-y-2">
              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <span className="block text-foreground">Ranjith</span>
                <span className="block text-gradient">
                  Neela
                </span>
              </h1>
            </div>

            {/* Titles */}
            <div 
              className={`space-y-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-xl md:text-2xl font-light text-foreground">
                Microsoft Certified Solutions Architect
              </p>
              <p className="text-lg md:text-xl text-accent font-medium">
                AI Enablement Engineer
              </p>
            </div>

            {/* Description */}
            <p 
              className={`text-muted-foreground text-lg leading-relaxed max-w-xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Specializing in <span className="text-foreground font-medium">Power Platform</span>, 
              {' '}<span className="text-foreground font-medium">Conversational AI</span>, and{' '}
              <span className="text-foreground font-medium">Azure</span>. 
              12+ years driving enterprise digital transformation for government and private-sector organizations.
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <a 
                href="#experience" 
                className="group btn-primary"
              >
                View Experience
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="btn-outline"
              >
                Let's Talk
              </a>
            </div>

            {/* Social Links */}
            <div 
              className={`flex items-center gap-8 pt-6 transition-all duration-1000 delay-[900ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex items-center gap-1">
                <div className="w-12 h-px bg-gradient-to-r from-border to-transparent" />
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/rkneela0912/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-secondary hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ranjith-k-n-846992125/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-secondary hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:iamranjithkneela@gmail.com"
                  className="group p-3 rounded-full bg-secondary hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
