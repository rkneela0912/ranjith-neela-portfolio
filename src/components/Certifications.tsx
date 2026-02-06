import { Award, BadgeCheck } from 'lucide-react';

const certifications = [
  {
    title: 'Microsoft Power Platform Solutions Expert',
    code: 'PL-600',
    level: 'Expert',
  },
  {
    title: 'Microsoft Power Apps Developer',
    code: 'PL-400',
    level: 'Associate',
  },
  {
    title: 'Microsoft Certified Solution Developer',
    code: 'MCSD',
    level: 'Professional',
  },
  {
    title: 'Microsoft Certified Solution Associate',
    code: 'MCSA',
    level: 'Associate',
  },
  {
    title: 'Microsoft Certified Professional',
    code: 'MCP',
    level: 'Professional',
  },
  {
    title: 'Microsoft Specialist',
    code: 'MS',
    level: 'Specialist',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 lg:py-32 relative tech-grid">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Professional Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Validated expertise through industry-recognized Microsoft certifications
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="gradient-border p-6 rounded-xl card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground leading-tight mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                      {cert.code}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <BadgeCheck className="w-3 h-3" />
                      {cert.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Microsoft Partner Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-secondary/30 rounded-full border border-border">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <BadgeCheck className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Microsoft Certified Professional</p>
              <p className="text-xs text-muted-foreground">Verified expertise in Microsoft technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
