import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import headshot from '@/assets/headshot.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />
      
      {/* Subtle animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent text-sm font-medium tracking-widest uppercase animate-fade-in">
                Microsoft Certified Solutions Architect
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-delay-1">
                Ranjith <span className="text-gradient">Neela</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light animate-fade-in-delay-2">
                AI Enablement Engineer
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl animate-fade-in-delay-2">
              Specializing in <span className="text-foreground font-medium">Power Platform</span>, 
              {' '}<span className="text-foreground font-medium">Conversational AI</span> (Microsoft Copilot, Azure Bot Framework), 
              {' '}<span className="text-foreground font-medium">Azure</span>, and{' '}
              <span className="text-foreground font-medium">SharePoint Development</span>
            </p>

            <p className="text-muted-foreground animate-fade-in-delay-3">
              12+ years of enterprise experience delivering digital transformation solutions 
              across government and private-sector organizations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-3">
              <a href="#experience" className="btn-primary">
                View Experience
              </a>
              <a href="#skills" className="btn-outline">
                Explore Expertise
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4 animate-fade-in-delay-3">
              <a
                href="https://github.com/rkneela0912/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/ranjith-k-n-846992125/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:iamranjithkneela@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-delay-2">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-border gradient-border">
                <img
                  src={headshot}
                  alt="Ranjith Neela - Microsoft Solutions Architect"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-border rounded-lg" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-accent/30 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
