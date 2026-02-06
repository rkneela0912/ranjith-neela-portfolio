import { Award, BadgeCheck } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import azureAdminBadge from '@/assets/badges/azure-administrator.png';
import copilotStudioBadge from '@/assets/badges/copilot-studio-agents.svg';

interface Certification {
  title: string;
  code: string;
  level: string;
  badge?: string;
}

const certifications: Certification[] = [
  {
    title: 'Microsoft Azure Administrator',
    code: 'AZ-104',
    level: 'Associate',
    badge: azureAdminBadge,
  },
  {
    title: 'Create Agents in Microsoft Copilot Studio',
    code: 'Applied Skills',
    level: 'Applied Skills',
    badge: copilotStudioBadge,
  },
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 lg:py-32 relative bg-background overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0]
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
          >
            Professional Credentials
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Certifications & <span className="text-gradient">Credentials</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Validated expertise through industry-recognized Microsoft certifications
          </motion.p>
        </AnimatedSection>

        {/* Certifications Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={staggerItem}
              className="glow-border p-6 rounded-xl bg-card group cursor-pointer"
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start gap-4">
                {cert.badge ? (
                  <motion.div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={cert.badge} 
                      alt={`${cert.title} badge`} 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ) : (
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </motion.div>
                )}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground leading-tight mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <motion.span 
                      className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded-md"
                      whileHover={{ scale: 1.1 }}
                    >
                      {cert.code}
                    </motion.span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <BadgeCheck className="w-3 h-3" />
                      {cert.level}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Microsoft Partner Badge */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 px-8 py-4 bg-card rounded-full border border-border shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            animate={{ 
              boxShadow: ['0 10px 30px -10px hsl(217 91% 55% / 0.1)', '0 10px 30px -10px hsl(217 91% 55% / 0.3)', '0 10px 30px -10px hsl(217 91% 55% / 0.1)']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div 
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <BadgeCheck className="w-5 h-5 text-white" />
            </motion.div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Microsoft Certified Professional</p>
              <p className="text-xs text-muted-foreground">Verified expertise in Microsoft technologies</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
