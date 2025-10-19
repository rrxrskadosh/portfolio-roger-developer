interface ExperienceItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    year: "CURRENT",
    title: "Freelancer",
    company: "B2B Web Designer & Developer.",
    description: [
      "UI UX Design.",
      "Front-End Apps.",
      "Back-End Solutions.",
      "Creating graphic pieces.",
      "Maintain Website.",
      "Website Redesign.",
      "SEO Consultant.",
      "Web Training.",
    ],
    current: true,
  },
  {
    id: 2,
    year: "May 2022 - July 2023",
    title: "Developer",
    company: "Yieldigital",
    description: [
      "Create crawlers and spiders for data extraction in Python and Scrapy (Web Scrapping).",
      "Database administration and management in MySQL.",
      "Instance administration (servers) in EC2 AWS.",
      "Design and layout user interfaces based on specific prototypes.",
      "Implement new features in HTML5, JavaScript, and CSS, writing clean code.",
      "Collaborate in the implementation and configuration of Plugins and Themes in WordPress.",
    ],
  },
  {
    id: 3,
    year: "Oct 2021 - Jul 2022",
    title: "Full-Time Developer",
    company: "Swapps",
    description: [
      "Support the development of prototypes to test new ideas directly with clients.",
      "Design and layout user interfaces based on specific prototypes.",
      "Implement new features in HTML5, JavaScript, React, Vue, and Bootstrap.",
      "Collaborate on the implementation of backend Python and Django code.",
      "Conduct code reviews and support team members with constructive feedback.",
    ],
  },
  {
    id: 4,
    year: "Mar 2021 - Oct 2021",
    title: "Junior Software Developer Marketing",
    company: "MS Cloud Experts",
    description: [
      "Graphic Design.",
      "Maintain Website.",
      "Website Redesign.",
      "SEO Consultant.",
      "Website Design and Development using WordPress CMS.",
      "Marketing Strategies.",
    ],
  },
  {
    id: 5,
    year: "Oct 2020 - Dec 2020",
    title: "Junior Wordpress Developer",
    company: "Waco Services",
    description: [
      "Website Design and Development using WordPress CMS.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-card overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
              _EXPERIENCE
            </h2>
            <div className="absolute -bottom-2 left-0 w-24 sm:w-32 h-1 bg-accent"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-foreground transform -translate-x-1/2 hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-6 h-6 rounded-full bg-foreground border-4 border-card shadow-lg"></div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 w-full ${
                    index % 2 === 0 ? "md:text-right md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"
                  }`}
                >
                  <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border-2 border-foreground/10 hover:border-foreground/30 transition-all duration-300 hover:shadow-2xl">
                    {/* Year Badge */}
                    <div
                      className={`inline-block mb-3 sm:mb-4 ${
                        exp.current
                          ? "bg-accent text-background"
                          : "bg-foreground text-background"
                      } rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-wider`}
                    >
                      {exp.year}
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-muted-foreground mb-3 sm:mb-4 font-saira">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <ul className="space-y-1 text-xs sm:text-sm md:text-base font-saira">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;