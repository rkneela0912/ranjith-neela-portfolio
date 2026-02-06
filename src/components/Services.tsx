import { Cpu, Bot, Database, LayoutDashboard, Cloud, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'AI & Copilot Solutions',
    description: 'Custom Microsoft Copilot agents and AI-powered automation solutions that transform business processes.',
    features: ['Copilot Studio Development', 'Azure OpenAI Integration', 'Intelligent Automation'],
  },
  {
    icon: LayoutDashboard,
    title: 'Power Platform Development',
    description: 'End-to-end Power Platform solutions including Canvas Apps, Model-driven Apps, and Power Automate workflows.',
    features: ['Custom Power Apps', 'Workflow Automation', 'Power BI Dashboards'],
  },
  {
    icon: Database,
    title: 'Enterprise Architecture',
    description: 'Scalable Dataverse architecture and data modeling for complex enterprise requirements.',
    features: ['Dataverse Design', 'Data Migration', 'Integration Architecture'],
  },
  {
    icon: Cloud,
    title: 'Azure Cloud Solutions',
    description: 'Comprehensive Azure implementations including infrastructure, services, and cloud-native applications.',
    features: ['Azure Functions', 'Logic Apps', 'Cloud Infrastructure'],
  },
  {
    icon: Bot,
    title: 'Conversational AI',
    description: 'Intelligent chatbots and virtual agents using Azure Bot Framework and Power Virtual Agents.',
    features: ['Bot Development', 'NLP Integration', 'Multi-channel Deployment'],
  },
  {
    icon: Shield,
    title: 'Security & Governance',
    description: 'Enterprise security modeling, DLP policies, and compliance implementations across Microsoft 365.',
    features: ['Security Modeling', 'Compliance Setup', 'Access Management'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative bg-background">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Services & <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Delivering enterprise-grade solutions that drive digital transformation and business value
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glow-border rounded-2xl p-8 bg-card hover:bg-gradient-to-br hover:from-accent/5 hover:to-transparent transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
