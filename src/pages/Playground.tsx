import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface PlaygroundProject {
    id: number;
    title: string;
    description: string;
    tags: string[];
    color: string;
    image: string;
    url: string;
}

const projects: PlaygroundProject[] = [
  {
    id: 1,
    title: "SWAPPS",
    description: "Layout UI - Django Webapp",
    tags: ["Django", "Web App", "UI Design"],
    color: "bg-playground-card",
    image: "../src/assets/swapps.png",
    url: "https://swapps.com",
  },
  {
    id: 2,
    title: "PLUR-E",
    description: "Custom website wordpress, maintenance wordpress, web security, UI UX Design, System Design",
    tags: ["WordPress", "UI/UX", "Web Security"],
    color: "bg-playground-card",
    image: "../src/assets/plur-e.png",
    url: "https://www.plur-e.com/",
  },
  {
    id: 3,
    title: "TURISMO MADRID SCRAPPING",
    description: "Python, Scrappy - Web scrapping",
    tags: ["Python", "Scraping", "Data Extraction"],
    color: "bg-playground-card",
    image: "../src/assets/turismo-madrid.jpg",
    url: "https://github.com/rrxrskadosh/turismo-madrid-scrapping",
  },
  {
    id: 4,
    title: "ALININ",
    description: "Coordinador de Tecnología y Virtualidad",
    tags: ["Educational Tech", "Virtual Learning", "Platform"],
    color: "bg-playground-card",
    image: "../src/assets/alinin-laptop-mockup.png",
    url: "https://alinin.org",
  },
  {
    id: 5,
    title: "GICUINT",
    description: "Grupo de investigación científica universitaria interdisciplinaria nuevas tendencias",
    tags: ["Research", "Academic", "Innovation"],
    color: "bg-playground-card",
    image: "../src/assets/gicuint.png",
    url: "https://alinin.org/gicuint/",
  },
];

const Playground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

    // Text splitting animation - simplified
    useEffect(() => {
        if (titleRef.current) {
        const split = new SplitType(titleRef.current, { types: "chars" });
        
        gsap.from(split.chars, {
            opacity: 0,
            y: 20,
            stagger: 0.03,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            },
        });

        return () => {
            split.revert();
        };
        }
    }, []);

    // GSAP ScrollingTrigger animations
    useEffect(() => {
        const cards = document.querySelectorAll(".project-card");
        cards.forEach((card) => {
            gsap.fromTo(card, 
                { opacity: 0, y: 40 }, 
                {opacity: 1, y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none",
                    once: true, 
                },
            });
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

return (
    <div className="min-h-screen" ref={containerRef}>
      <Header />
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-accent/30 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      <motion.section 
        className="relative pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 px-4 sm:px-6 overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <div className="mb-20">
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight mb-6"
            >
              PLAYGROUND
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl"
            >
              Discover some of the latest projects
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project}  />
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

const ProjectCard = ({ project }: { project: PlaygroundProject }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      <div
        ref={cardRef}
        className="project-card group relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-black/40 dark:bg-black/60 border border-white/10 dark:border-white/5 hover:border-foreground/30 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] h-[400px]"
      >
        {/* Project Image - Always visible */}
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Project Number - Always visible */}
        <div className="absolute top-6 right-6 text-8xl font-black text-white/20 z-10">
          {project.id.toString().padStart(2, "0")}
        </div>

        {/* Content Overlay - Appears on hover */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8 z-20">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4 text-white group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6 text-base">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/10 text-white rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Button */}
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors">
              EXPLORE
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Playground;