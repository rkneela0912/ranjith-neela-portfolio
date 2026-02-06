import { GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '12+', label: 'Years Experience' },
  { icon: Code2, value: '30+', label: 'Canvas Apps' },
  { icon: Award, value: '50+', label: 'Workflows' },
  { icon: GraduationCap, value: '6', label: 'Certifications' },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional <span className="text-gradient">Summary</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A results-driven <span className="text-foreground font-medium">Microsoft Certified Solutions Architect</span> and{' '}
              <span className="text-foreground font-medium">AI Enablement Engineer</span> with over 12 years of specialized 
              experience in designing, developing, and deploying enterprise-scale digital transformation solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proven expertise across the complete Microsoft ecosystem including{' '}
              <span className="text-foreground">Power Platform</span>,{' '}
              <span className="text-foreground">Azure</span>,{' '}
              <span className="text-foreground">SharePoint</span>, and{' '}
              <span className="text-foreground">Dynamics 365</span>. Specializing in AI enablement initiatives 
              including Microsoft Copilot agent development with measurable performance improvements.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Demonstrated leadership in delivering complex solutions for government and private-sector 
              organizations, ensuring security, scalability, and compliance with enterprise-grade standards.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glow-border rounded-xl p-6 text-center card-hover"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <GraduationCap className="text-accent" />
              Education
            </h3>

            <div className="space-y-6">
              {/* Masters */}
              <div className="gradient-border p-6 rounded-xl card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Master of Science in Computer Science
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      Texas A&M University – Kingsville
                    </p>
                    <p className="text-sm text-accent mt-2">December 2013</p>
                  </div>
                </div>
              </div>

              {/* Bachelors */}
              <div className="gradient-border p-6 rounded-xl card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      Jawaharlal Nehru Technological University
                    </p>
                    <p className="text-sm text-accent mt-2">May 2012</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="gradient-border p-6 rounded-xl">
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Core Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Enterprise Architecture',
                  'AI Enablement',
                  'Digital Transformation',
                  'Government Solutions',
                  'Microsoft Ecosystem',
                ].map((area) => (
                  <span key={area} className="skill-badge text-xs">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
