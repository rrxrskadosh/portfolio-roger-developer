import { ArrowUpRight } from "lucide-react";
import marbolStores from "../../assets/marbol-stores.png";
import alinin from "../../assets/alinin-laptop-mockup.png";
import flowVibes from "../../assets/flow-vibes.png";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "small" | "medium" | "large";
}

const projects: Project[] = [
  {
    id: 1,
    title: "MARBOL STORES - 3D PRINTING",
    category: "UI UX - Website",
    image: marbolStores,
    size: "small",
  },
  {
    id: 2,
    title: "ALININ - SCIENTIFIC RESEARCH PLATFORM",
    category: "UI UX - Website",
    image: alinin,
    size: "medium",
  },
  {
    id: 3,
    title: "FLOWVIBES - ECOMMERCE",
    category: "UI UX - Architecture Information",
    image: flowVibes,
    size: "large",
  },
];

const LatestWork = () => {
  return (
    <section id="work" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-card overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
              _LATEST WORK
            </h2>
            <div className="absolute -bottom-2 left-0 w-24 sm:w-32 h-1 bg-accent"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative cursor-pointer ${
                project.size === "large" ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-muted shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-background text-foreground rounded-full p-3 sm:p-4 shadow-xl">
                        <ArrowUpRight size={24} className="sm:w-8 sm:h-8" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-4 sm:mt-6 space-y-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-wide font-saira">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-base sm:text-lg font-bold uppercase tracking-wider hover:text-accent transition-colors group"
          >
            VIEW ALL PROJECTS
            <ArrowUpRight
              size={20}
              className="sm:w-6 sm:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;