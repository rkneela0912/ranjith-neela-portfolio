import { Code, Cloud, Database, Bot, Shield, Layers, Terminal, Cpu } from 'lucide-react';

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

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive expertise across the Microsoft ecosystem and modern development technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glow-border rounded-xl p-6 bg-card group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <category.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">
            Core <span className="text-gradient">Competencies</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Solution Architecture',
              'AI Enablement',
              'Digital Transformation',
              'Enterprise Integration',
              'Agile Delivery',
              'Technical Leadership',
            ].map((competency) => (
              <div
                key={competency}
                className="text-center p-4 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all"
              >
                <p className="text-sm font-medium text-foreground">{competency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
