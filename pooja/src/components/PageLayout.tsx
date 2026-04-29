import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  showBack?: boolean;
}

const PageLayout = ({ children, showBack = true }: PageLayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative orbs */}
      <div className="pointer-events-none fixed -top-40 -left-40 w-[500px] h-[500px] glow-orb opacity-60" />
      <div className="pointer-events-none fixed -bottom-40 -right-40 w-[500px] h-[500px] glow-orb opacity-50" style={{ background: "radial-gradient(circle, hsl(270 80% 85% / 0.6) 0%, transparent 70%)" }} />

      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        {showBack && !isHome ? (
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card hover:shadow-soft transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Home</span>
          </Link>
        ) : (
          <Link to="/" className="inline-flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-glow" />
            <span className="font-serif text-lg italic text-foreground/80">forever nineteen</span>
          </Link>
        )}
        {/* <div className="text-sm text-muted-foreground font-light tracking-wide hidden sm:block">
          with love ✿
        </div> */}
      </nav>

      <main className="relative z-10 animate-fade-in">{children}</main>

      <footer className="relative z-10 text-center py-10 text-sm text-muted-foreground">
        Made with <Heart className="inline w-3.5 h-3.5 text-primary fill-primary mx-1" /> just for you
      </footer>
    </div>
  );
};

export default PageLayout;
