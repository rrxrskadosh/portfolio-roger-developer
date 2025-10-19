import { FileText, Network, Smartphone, Users, FlaskConical } from "lucide-react";
import figmaIcon from "../../assets/figma-icon.png";
import diagramIcon from "../../assets/diagram-icon.png";
import miroIcon from "../../assets/miro-icon.png";
import xmindIcon from "../../assets/xmind-icon.png";
import photoshopIcon from "../..//assets/photoshop-icon.png";


// Componente de hexágono reusable con bordes redondeados
interface HexagonBorderProps {
  children: React.ReactNode;
  className?: string;
}

const HexagonBorder: React.FC<HexagonBorderProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 100 115" 
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M 50 5 L 90 30 L 90 85 L 50 110 L 10 85 L 10 30 Z"
          fill="transparent"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};


const Skills = () => {
  const uiuxSkills = [
    { name: "BRIEFING", icon: FileText },
    { name: "WIREFRAMING", icon: Network },
    { name: "PROTOTYPES", icon: Smartphone },
    { name: "USER PERSONA", icon: Users },
    { name: "A/B TESTING", icon: FlaskConical },
  ];

  const designTools = [
    { name: "FIGMA", logo: figmaIcon },
    { name: "DIAGRAM", logo: diagramIcon },
    { name: "MIRO", logo: miroIcon },
    { name: "XMIND", logo: xmindIcon },
    { name: "PHOTOSHOP", logo: photoshopIcon },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Skillset UI UX */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-2 text-center px-2">
            SKILLSET UI UX
          </h2>
          <div className="h-1 w-24 sm:w-32 bg-accent mx-auto mb-8 sm:mb-12"></div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {uiuxSkills.map((skill, index) => {
              const Icon = skill.icon;
              const rotation = (index % 2 === 0 ? -2 : 2);
              
              return (
                <div
                  key={skill.name}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="bg-transparent border-2 border-foreground rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 aspect-[3/4] flex flex-col items-center justify-between hover:shadow-2xl transition-all duration-300">
                    <div className="flex-1 flex items-center justify-center">
                        <HexagonBorder className="w-30 sm:w-24 md:w-28 h-16 sm:h-20 md:h-24">
                            <Icon className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-black-900" strokeWidth={2} />
                        </HexagonBorder>
                    </div>
                    <div className="text-center">
                      <p className="font-black text-[10px] sm:text-xs md:text-sm text-foreground tracking-wide">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Design Tools */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-2 text-center px-2">
            DESIGN TOOLS
          </h2>
          <div className="h-1 w-24 sm:w-32 bg-accent mx-auto mb-8 sm:mb-12"></div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {designTools.map((tool, index) => {
              const rotation = (index % 2 === 0 ? 2 : -2);
              
              return (
                <div
                  key={tool.name}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="bg-transparent border-2 border-foreground rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 aspect-[3/4] flex flex-col items-center justify-between hover:shadow-2xl transition-all duration-300">
                    <div className="flex-1 flex items-center justify-center">
                        <HexagonBorder className="w-30 sm:w-24 md:w-28 h-16 sm:h-20 md:h-24">
                            <img 
                              src={tool.logo} 
                              alt={tool.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                            />
                        </HexagonBorder>
                    </div>
                    <div className="text-center">
                      <p className="font-black text-[10px] sm:text-xs md:text-sm text-foreground tracking-wide">
                        {tool.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;