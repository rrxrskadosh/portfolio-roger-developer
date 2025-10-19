import { Button } from "../ui/button";
import teamWorkspace from "../../assets/team-workspace.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img
                src={teamWorkspace}
                alt="Collaborative workspace with multiple laptops and creative tools"
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-8 border-card transform hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative dots pattern */}
              <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-20 sm:w-32 h-20 sm:h-32 opacity-60">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {Array.from({ length: 25 }).map((_, i) => {
                    const x = (i % 5) * 20 + 10;
                    const y = Math.floor(i / 5) * 20 + 10;
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="2"
                        fill="currentColor"
                        className="text-foreground"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="relative inline-block">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
                ABOUT ME
              </h2>
              <div className="absolute -bottom-2 left-0 w-24 sm:w-32 h-1 bg-accent"></div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed font-saira">
              <p>
                My name is <span className="font-bold text-foreground">Roger Reyes.</span> I have
                expertise as a{" "}
                <span className="font-bold text-foreground">Web Designer & Full-Stack Developer</span>
                , my focus has been on creating creative user interfaces and providing them with the
                combination of interactivity and functionality at both the{" "}
                <span className="font-bold text-foreground">Front-End and Back-End levels.</span>
              </p>
              <p>
                I'm practitioner of self-taught study for innovation, researcher by habit to improve
                skills, open to problem solving for the concept of new challenges
              </p>
            </div>

            {/* Decorative lines */}
            <div className="flex gap-2 py-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-foreground transform rotate-45"
                  style={{ height: `${30 + i * 6}px` }}
                ></div>
              ))}
            </div>

           <Button
              variant="default"
              size="lg"
              className="text-sm sm:text-base font-bold uppercase tracking-wider"
            >
             <a href="/FULL-STACK_DEVELOPER_-_ROGER_REYES_CV.pdf" download>
                CV DOWNLOAD
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;