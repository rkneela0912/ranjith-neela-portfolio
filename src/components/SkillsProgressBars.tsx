import { motion } from 'framer-motion';

const skillData = [
  { skill: 'Frontend Development', proficiency: 95, color: 'from-blue-500 to-cyan-400' },
  { skill: 'Backend & Database', proficiency: 90, color: 'from-emerald-500 to-teal-400' },
  { skill: 'Microsoft Cloud', proficiency: 92, color: 'from-violet-500 to-purple-400' },
  { skill: 'Power Platform', proficiency: 98, color: 'from-orange-500 to-amber-400' },
  { skill: 'AI & Copilot', proficiency: 88, color: 'from-pink-500 to-rose-400' },
  { skill: 'DevOps & CI/CD', proficiency: 85, color: 'from-indigo-500 to-blue-400' },
  { skill: 'Enterprise Solutions', proficiency: 93, color: 'from-cyan-500 to-sky-400' },
  { skill: 'Automation & RPA', proficiency: 90, color: 'from-fuchsia-500 to-pink-400' },
];

const SkillsProgressBars = () => {
  return (
    <motion.div
      className="w-full max-w-lg mx-auto space-y-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {skillData.map((item, index) => (
        <motion.div
          key={item.skill}
          className="group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Label and percentage */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              {item.skill}
            </span>
            <motion.span
              className="text-sm font-bold text-accent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {item.proficiency}%
            </motion.span>
          </div>
          
          {/* Progress bar container */}
          <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
            {/* Animated fill */}
            <motion.div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.color} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${item.proficiency}%` }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                delay: 0.2 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-y-0 left-0 w-full"
              initial={{ x: '-100%' }}
              whileInView={{ x: '200%' }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.5, 
                delay: 1 + index * 0.1,
                ease: 'easeInOut'
              }}
            >
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsProgressBars;
