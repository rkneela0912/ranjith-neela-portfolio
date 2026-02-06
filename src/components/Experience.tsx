import { CheckCircle2, TrendingUp, Database, Bot, LayoutDashboard } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection, { AnimatedCard } from './AnimatedSection';

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

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 lg:py-32 relative bg-background overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
            Professional Journey
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Experience & <span className="text-gradient">Expertise</span>
          </motion.h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative pl-8 border-l-2 border-accent/30">
            {/* Animated progress line */}
            <motion.div 
              className="absolute left-0 top-0 w-0.5 bg-accent origin-top"
              style={{ height: lineHeight }}
            />
            
            {/* Timeline item */}
            <motion.div 
              className="relative pb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Dot */}
              <div className="absolute -left-[25px] top-0">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-accent relative"
                  animate={{ 
                    boxShadow: ['0 0 0px hsl(217 91% 55%)', '0 0 20px hsl(217 91% 55%)', '0 0 0px hsl(217 91% 55%)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-accent/30"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <AnimatedCard className="glow-border p-8 rounded-xl bg-card cursor-default">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <motion.span 
                    className="text-xs font-semibold text-accent uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    2014 – Present
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 bg-accent text-white rounded-full text-xs font-medium"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    10+ Years
                  </motion.span>
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
                <motion.div 
                  className="grid md:grid-cols-2 gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={staggerItem}
                      className="flex gap-4 p-4 bg-secondary/50 rounded-xl border border-border hover:border-accent/50 transition-all cursor-pointer"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="w-5 h-5 text-accent" />
                      </motion.div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-center mb-12 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Delivery <span className="text-gradient">Metrics</span>
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: '30+', label: 'Canvas Apps' },
              { value: '15+', label: 'Model-driven Apps' },
              { value: '50+', label: 'Workflows' },
              { value: '18+', label: 'Custom Connectors' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={staggerItem}
                className="text-center p-6 glow-border rounded-xl bg-card cursor-pointer"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.p 
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {metric.value}
                </motion.p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements List */}
        <div className="max-w-3xl mx-auto">
          <motion.h3 
            className="text-2xl font-bold text-center mb-8 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Key <span className="text-gradient">Achievements</span>
          </motion.h3>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                variants={staggerItem}
                className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl border border-border hover:border-accent/50 transition-colors cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05, type: "spring" }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                </motion.div>
                <p className="text-muted-foreground text-sm">{achievement}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
