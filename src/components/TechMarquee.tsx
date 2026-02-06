import { motion } from 'framer-motion';

const technologies = [
  'Microsoft Azure',
  'Power Platform',
  'Power Apps',
  'Power Automate',
  'Power BI',
  'Dataverse',
  'SharePoint',
  'Dynamics 365',
  'Microsoft Copilot',
  'Azure OpenAI',
  'Bot Framework',
  'Copilot Studio',
  'Microsoft Teams',
  'Microsoft Graph',
  'Azure Functions',
  'Logic Apps',
  'TypeScript',
  'React',
  'C#',
  '.NET Core',
];

const TechMarquee = () => {
  return (
    <section className="py-16 bg-secondary/50 overflow-hidden border-y border-border">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/50 to-transparent z-10" />

        {/* Scrolling content - duplicated for seamless loop */}
        <motion.div 
          className="flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear"
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={`${tech}-${index}`}
              className="flex-shrink-0 mx-6 px-6 py-3 bg-card rounded-full border border-border hover:border-accent hover:bg-accent/5 transition-all cursor-default"
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;
