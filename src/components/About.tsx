import { GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import AnimatedSection, { AnimatedCard } from './AnimatedSection';

const stats = [
  { icon: Briefcase, value: '12+', label: 'Years Experience' },
  { icon: Code2, value: '30+', label: 'Canvas Apps' },
  { icon: Award, value: '50+', label: 'Workflows' },
  { icon: GraduationCap, value: '6+', label: 'Certifications' },
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

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative bg-secondary/30 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.p 
            className="text-accent text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Professional <span className="text-gradient">Summary</span>
          </motion.h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              variants={staggerItem}
            >
              A results-driven <span className="text-foreground font-medium">Microsoft Certified Solutions Architect</span> and{' '}
              <span className="text-foreground font-medium">AI Enablement Engineer</span> with over 12 years of specialized 
              experience in designing, developing, and deploying enterprise-scale digital transformation solutions.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              variants={staggerItem}
            >
              Proven expertise across the complete Microsoft ecosystem including{' '}
              <span className="text-foreground font-medium">Power Platform</span>,{' '}
              <span className="text-foreground font-medium">Azure</span>,{' '}
              <span className="text-foreground font-medium">SharePoint</span>, and{' '}
              <span className="text-foreground font-medium">Dynamics 365</span>. Specializing in AI enablement initiatives 
              including Microsoft Copilot agent development with measurable performance improvements.
            </motion.p>

            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              variants={staggerItem}
            >
              Demonstrated leadership in delivering complex solutions for government and private-sector 
              organizations, ensuring security, scalability, and compliance with enterprise-grade standards.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <AnimatedCard
                  key={stat.label}
                  delay={index * 0.1}
                  className="glow-border rounded-xl p-6 text-center bg-card cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                  </motion.div>
                  <motion.p 
                    className="text-3xl font-bold text-foreground"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </AnimatedCard>
              ))}
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-semibold flex items-center gap-3 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <GraduationCap className="text-accent" />
              </motion.div>
              Education
            </motion.h3>

            <div className="space-y-6">
              {/* Masters */}
              <AnimatedCard className="glow-border p-6 rounded-xl bg-card cursor-pointer" delay={0.1}>
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: 'hsl(217 91% 55%)' }}
                  >
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Master of Science in Computer Science
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      Texas A&M University – Kingsville
                    </p>
                    <p className="text-sm text-accent font-medium mt-2">December 2013</p>
                  </div>
                </div>
              </AnimatedCard>

              {/* Bachelors */}
              <AnimatedCard className="glow-border p-6 rounded-xl bg-card cursor-pointer" delay={0.2}>
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: 'hsl(217 91% 55%)' }}
                  >
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      Jawaharlal Nehru Technological University
                    </p>
                    <p className="text-sm text-accent font-medium mt-2">May 2012</p>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* Quick facts */}
            <AnimatedCard className="glow-border p-6 rounded-xl bg-card" delay={0.3}>
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
                ].map((area, index) => (
                  <motion.span 
                    key={area} 
                    className="skill-badge text-xs cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
