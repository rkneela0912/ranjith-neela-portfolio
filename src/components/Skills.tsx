import { Code, Cloud, Database, Bot, Shield, Layers, Terminal, Cpu } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'SPFx', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    icon: Terminal,
    title: 'Backend & Database',
    skills: ['C#', '.NET Core', 'SQL Server', 'Dataverse', 'Node.js', 'REST APIs'],
  },
  {
    icon: Cloud,
    title: 'Microsoft Cloud Platform',
    skills: ['Azure', 'Microsoft 365', 'SharePoint Online', 'Dynamics 365', 'Teams'],
  },
  {
    icon: Layers,
    title: 'Power Platform Ecosystem',
    skills: ['Power Apps', 'Power Automate', 'Power BI', 'Power Pages', 'Dataverse'],
  },
  {
    icon: Bot,
    title: 'AI & Copilot Development',
    skills: ['Microsoft Copilot', 'Copilot Studio', 'Azure OpenAI', 'Power Virtual Agents'],
  },
  {
    icon: Cpu,
    title: 'Conversational AI & Automation',
    skills: ['Azure Bot Framework', 'LUIS', 'Cognitive Services', 'RPA', 'Logic Apps'],
  },
  {
    icon: Database,
    title: 'Enterprise Solutions',
    skills: ['SharePoint Framework', 'Microsoft Graph', 'Power Platform Admin', 'ALM'],
  },
  {
    icon: Shield,
    title: 'DevOps & Security',
    skills: ['Azure DevOps', 'Git', 'CI/CD', 'DLP', 'Compliance', 'Security Modeling'],
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

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-secondary/30 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -20, 0]
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
            Technical Expertise
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive expertise across the Microsoft ecosystem and modern development technologies
          </motion.p>
        </AnimatedSection>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              className="glow-border rounded-xl p-6 bg-card group cursor-pointer"
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-sm font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-badge text-xs cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -3,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Competencies */}
        <div className="mt-20 max-w-4xl mx-auto">
          <motion.h3 
            className="text-2xl font-bold text-center mb-10 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Core <span className="text-gradient">Competencies</span>
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'Solution Architecture',
              'AI Enablement',
              'Digital Transformation',
              'Enterprise Integration',
              'Agile Delivery',
              'Technical Leadership',
            ].map((competency, index) => (
              <motion.div
                key={competency}
                variants={staggerItem}
                className="text-center p-4 bg-card rounded-xl border border-border hover:border-accent transition-all cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.p 
                  className="text-sm font-medium text-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  {competency}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
