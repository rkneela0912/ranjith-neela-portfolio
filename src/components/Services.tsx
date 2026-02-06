import { Cpu, Bot, Database, LayoutDashboard, Cloud, Shield, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative bg-background overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.p 
            className="text-accent text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I Offer
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Services & <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Delivering enterprise-grade solutions that drive digital transformation and business value
          </motion.p>
        </AnimatedSection>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group glow-border rounded-2xl p-8 bg-card hover:bg-gradient-to-br hover:from-accent/5 hover:to-transparent transition-all duration-500 cursor-pointer"
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon */}
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Learn More Link */}
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent"
                whileHover={{ gap: '12px' }}
              >
                Learn More 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
