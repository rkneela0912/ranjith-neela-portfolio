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
        <div className="flex animate-marquee">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex-shrink-0 mx-6 px-6 py-3 bg-card rounded-full border border-border hover:border-accent hover:bg-accent/5 transition-all cursor-default"
            >
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;
