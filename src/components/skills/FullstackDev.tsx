import htmlIcon from "../../assets/html-icon.png";
import jsIcon from "../../assets/javascript-icon.png";
// import reactIcon from "@/assets/react-icon.png";
import postgresIcon from "../../assets/postgresql-icon.png";
import wordpressIcon from "../../assets/wordpress-icon.png";
import vscodeIcon from "../../assets/vscode-icon.png";
import chatgptIcon from "../../assets/chatgpt-icon.png";
import nextjsIcon from "../../assets/nextjs-icon.png";
import djangoIcon from "../../assets/django-icon.png";
import djangorestIcon from "../../assets/djangorest-icon.png";
import gitIcon from "../../assets/git-icon.png";
import typescriptIcon from "../../assets/typescript-icon.png";

const FullstackDev = () => {
  const services = [
    "LANDING PAGE",
    "BLOGGING",
    "CMS",
    "ECOMMERCE",
    "APP DESIGN",
    "SYSTEM ARCHITECTURE",
    "DATABASES",
    "API",
    "TESTING",
    "WEB SCRAPPING",
    "MAINTANCE",
    "IA TOOLS",
    "FRAMEWORKS",
  ];

  const technologies = [
    { name: "HTML5", icon: htmlIcon, isImage: true },
    { name: "JavaScript", icon: jsIcon, isImage: true },
    // { name: "React", icon: reactIcon, isImage: true },
    { name: "Django", icon: djangoIcon, isImage: true },
    { name: "Next.js", icon: nextjsIcon, isImage: true },
    { name: "TypeScript", icon: typescriptIcon, isImage: true },
    { name: "PostgreSQL", icon: postgresIcon, isImage: true },
    { name: "WordPress", icon: wordpressIcon, isImage: true },
    { name: "ChatGPT", icon: chatgptIcon, isImage: true },
    { name: "VS Code", icon: vscodeIcon, isImage: true },
    { name: "Django REST", icon: djangorestIcon, isImage: true },
    { name: "Git", icon: gitIcon, isImage: true },
  ];

  return (
    <section className="bg-background overflow-hidden">
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Fullstack Development */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-8 sm:mb-12 text-center outline-text px-2">
              FULLSTACK DEVELOPMENT
            </h2>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="px-3 sm:px-4 md:px-6 py-2 md:py-3 border-2 border-foreground rounded-full bg-transparent hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer"
                >
                  <span className="font-black text-xs sm:text-sm tracking-wide whitespace-nowrap">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-8 sm:mb-12 text-center outline-text px-2">
              TECHNOLOGIES
            </h2>

            {/* Large background text */}
            <div className="relative py-8 sm:py-12 md:py-16">
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <p className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-transparent outline-text-large opacity-20 select-none whitespace-nowrap">
                  UI/UX DEV
                </p>
              </div>

              {/* Tech logos */}
              <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-3 sm:p-4 md:p-6 hover:scale-110 transition-transform duration-300"
                  >
                    {tech.isImage ? (
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-80 hover:opacity-100 transition-opacity">
                        {tech.icon}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats banner - Full width */}
      <div className="relative overflow-hidden bg-foreground py-3 sm:py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-background font-black text-sm sm:text-base md:text-lg mx-6 sm:mx-8">
            MORE THAN 50 PROJECTS - 4 YEARS EXPERIENCE 🔥 UI UX WEB DESIGNER - FRONTEND & BACKEND DEVELOPER
          </span>
          <span className="text-background font-black text-sm sm:text-base md:text-lg mx-6 sm:mx-8">
            MORE THAN 50 PROJECTS - 4 YEARS EXPERIENCE 🔥 UI UX WEB DESIGNER - FRONTEND & BACKEND DEVELOPER
          </span>
          <span className="text-background font-black text-sm sm:text-base md:text-lg mx-6 sm:mx-8">
            MORE THAN 50 PROJECTS - 4 YEARS EXPERIENCE 🔥 UI UX WEB DESIGNER - FRONTEND & BACKEND DEVELOPER
          </span>
        </div>
      </div>
    </section>
  );
};

export default FullstackDev;