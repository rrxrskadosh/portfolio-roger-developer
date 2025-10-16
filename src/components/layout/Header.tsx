import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToogle";

const Header = () => {
  const navItems = [
    { label: "ABOUT ME", href: "#about" },
    { label: "SKILLSET", href: "#skills" },
    { label: "WORK", href: "#work" },
    { label: "PLAYGROUND", href: "#playground" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6">
      <nav className="flex items-center justify-between max-w-[1800px] mx-auto">
        <Link to="/" className="text-xl sm:text-2xl font-black tracking-tight hover:scale-105 transition-transform">
          {"{.RR}"}
        </Link>

        <div className="hidden md:flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2 border-2 border-foreground">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-2 lg:px-4 py-2 text-[10px] lg:text-xs font-semibold uppercase tracking-wider hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="default" size="lg" className="text-xs sm:text-sm">
            CONTACT
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;