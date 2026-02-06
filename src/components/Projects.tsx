import { ExternalLink, Github } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'Enterprise AI Copilot Platform',
    category: 'AI & Automation',
    description: 'Developed a custom Microsoft Copilot solution for a Fortune 500 company, automating document processing and reducing manual effort by 70%.',
    technologies: ['Microsoft Copilot', 'Azure OpenAI', 'Power Automate', 'SharePoint'],
    impact: '70% reduction in processing time',
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Government Portal Modernization',
    category: 'Power Platform',
    description: 'Led the digital transformation of a state government agency, migrating legacy systems to Power Platform with 50+ custom apps.',
    technologies: ['Power Apps', 'Dataverse', 'Power BI', 'Azure AD'],
    impact: '50+ apps deployed',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Intelligent Customer Service Bot',
    category: 'Conversational AI',
    description: 'Built an AI-powered customer service solution handling 10,000+ monthly inquiries with 95% resolution rate.',
    technologies: ['Azure Bot Framework', 'LUIS', 'Cognitive Services', 'Teams'],
    impact: '95% resolution rate',
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'Enterprise Data Analytics Hub',
    category: 'Business Intelligence',
    description: 'Designed and implemented a comprehensive Power BI analytics platform for executive decision-making across 12 departments.',
    technologies: ['Power BI', 'Azure Synapse', 'Dataverse', 'Power Automate'],
    impact: '12 departments unified',
    color: 'from-pink-500/20 to-rose-500/20',
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative bg-secondary/30 overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, -50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.p 
              className="text-accent text-sm font-semibold tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured Work
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Case <span className="text-gradient">Studies</span>
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            className="btn-outline self-start md:self-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              className="group glow-border rounded-2xl overflow-hidden bg-card cursor-pointer"
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient Header */}
              <motion.div 
                className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
                
                {/* Floating particles */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-white/20"
                  animate={{ 
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-white/30"
                  animate={{ 
                    y: [0, 15, 0],
                    x: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                
                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                    {project.category}
                  </span>
                </motion.div>

                {/* Impact Badge */}
                <motion.div 
                  className="absolute bottom-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold shadow-lg">
                    {project.impact}
                  </span>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="skill-badge text-xs cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
