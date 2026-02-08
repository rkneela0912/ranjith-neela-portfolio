import { motion } from 'framer-motion';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const skillData = [
  { skill: 'Frontend', proficiency: 95, fullMark: 100 },
  { skill: 'Backend', proficiency: 90, fullMark: 100 },
  { skill: 'Cloud', proficiency: 92, fullMark: 100 },
  { skill: 'Power Platform', proficiency: 98, fullMark: 100 },
  { skill: 'AI & Copilot', proficiency: 88, fullMark: 100 },
  { skill: 'DevOps', proficiency: 85, fullMark: 100 },
  { skill: 'Enterprise', proficiency: 93, fullMark: 100 },
  { skill: 'Automation', proficiency: 90, fullMark: 100 },
];

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: { skill: string; proficiency: number } }> }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-xl">
        <p className="text-foreground font-semibold">{payload[0].payload.skill}</p>
        <p className="text-accent font-bold">{payload[0].payload.proficiency}%</p>
      </div>
    );
  }
  return null;
};

const SkillsRadarChart = () => {
  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative">
        {/* Glowing background effect */}
        <motion.div
          className="absolute inset-0 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={skillData} cx="50%" cy="50%" outerRadius="75%">
            <PolarGrid 
              stroke="hsl(var(--border))" 
              strokeOpacity={0.5}
            />
            <PolarAngleAxis 
              dataKey="skill" 
              tick={{ 
                fill: 'hsl(var(--muted-foreground))', 
                fontSize: 12,
                fontWeight: 500
              }}
              tickLine={false}
            />
            <PolarRadiusAxis 
              angle={22.5} 
              domain={[0, 100]} 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
              tickCount={5}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Radar
              name="Proficiency"
              dataKey="proficiency"
              stroke="hsl(var(--accent))"
              fill="hsl(var(--accent))"
              fillOpacity={0.3}
              strokeWidth={2}
              dot={{
                r: 4,
                fill: 'hsl(var(--accent))',
                stroke: 'hsl(var(--background))',
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: 'hsl(var(--accent))',
                stroke: 'hsl(var(--background))',
                strokeWidth: 2,
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend */}
      <motion.div 
        className="flex justify-center gap-6 mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-sm text-muted-foreground">Proficiency Level</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsRadarChart;
