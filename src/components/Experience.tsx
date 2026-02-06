import { CheckCircle2, TrendingUp, Database, Bot, LayoutDashboard, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Bot,
    title: 'AI & Copilot Solutions',
    description: 'Microsoft Copilot agent development, Azure Bot Framework implementations, and Copilot Studio configurations with measurable performance improvements.',
  },
  {
    icon: LayoutDashboard,
    title: 'Power Platform Excellence',
    description: 'Extensive Power Apps (30+ Canvas, 15+ Model-driven), Power Automate (50+ workflows), and 18+ custom connectors across enterprise clients.',
  },
  {
    icon: Database,
    title: 'Dataverse Architecture',
    description: '100+ custom tables, comprehensive security modeling, and large-scale integrations with enterprise systems.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Governance',
    description: 'Power BI executive dashboards, governance implementation, and data-driven decision-making frameworks.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Enterprise-grade security and compliance implementations across government and private-sector organizations.',
  },
];

const achievements = [
  '30+ Canvas Apps developed and deployed',
  '15+ Model-driven Apps for enterprise workflows',
  '50+ Power Automate workflows automating business processes',
  '18+ Custom connectors bridging enterprise systems',
  '100+ Dataverse custom tables designed',
  'SharePoint Online migrations & SPFx customizations',
  'Dynamics 365 integrations and customizations',
  'Azure cloud infrastructure solutions',
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 relative tech-grid">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Professional Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Experience & <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative pl-8 border-l border-border">
            {/* Timeline item */}
            <div className="relative pb-12">
              {/* Dot */}
              <div className="absolute -left-[25px] top-0">
                <div className="timeline-dot" />
              </div>

              {/* Content */}
              <div className="gradient-border p-8 rounded-xl card-hover">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    2014 – Present
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    10+ Years
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Power Platform & AI Solutions Architect
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Leading enterprise solution architecture across Microsoft ecosystem including 
                  Power Platform, SharePoint, Dynamics 365, and Azure. Driving AI enablement initiatives 
                  with focus on Microsoft Copilot agent development and conversational AI solutions.
                </p>

                {/* Highlight Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  {highlights.slice(0, 4).map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-4 bg-secondary/30 rounded-lg border border-border/50"
                    >
                      <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">
            Delivery <span className="text-accent">Metrics</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '30+', label: 'Canvas Apps' },
              { value: '15+', label: 'Model-driven Apps' },
              { value: '50+', label: 'Workflows' },
              { value: '18+', label: 'Custom Connectors' },
            ].map((metric) => (
              <div
                key={metric.label}
                className="text-center p-6 glow-border rounded-xl card-hover"
              >
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements List */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Key <span className="text-accent">Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg border border-border/50"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
