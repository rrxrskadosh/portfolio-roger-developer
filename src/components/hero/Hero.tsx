import workspaceImage from "../../assets/workspace.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen grid-pattern overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40 lg:py-48">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 max-w-full overflow-hidden">
            <h1 className="text-display break-words">
              HEY THERE,
              <br />
              I'M <span className="text-accent-highlight">ROGER</span>
              <br />
              WEB DESIGNER.
              <br />
              DEVELOPER.
            </h1>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto lg:mx-0 lg:absolute lg:right-12 xl:right-24 lg:top-1/2 lg:-translate-y-1/2">
            <div className="relative transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-foreground/10 blur-2xl rounded-3xl"></div>
              <img
                src={workspaceImage}
                alt="Web designer workspace with multiple monitors showing code"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto border-4 sm:border-8 border-card"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-4 sm:py-6 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wider mx-6 sm:mx-8">
            MORE THAN 50 PROJECTS - 4 YEARS EXPERIENCE ✨
          </span>
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wider mx-6 sm:mx-8">
            UI UX WEB DESIGNER - FRONTEND DEVELOPER
          </span>
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wider mx-6 sm:mx-8">
            MORE THAN 50 PROJECTS - 4 YEARS EXPERIENCE ✨
          </span>
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wider mx-6 sm:mx-8">
            UI UX WEB DESIGNER - FRONTEND DEVELOPER
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;