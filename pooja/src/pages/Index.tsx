import { Link } from "react-router-dom";
import { MessageCircle, Music, Sparkles, Heart } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CountdownTimer from "@/components/CountdownTimer";

const navItems = [
  { to: "/messages", label: "Messages", icon: MessageCircle, gradient: "from-pink-200 to-rose-200" },
  { to: "/divin", label: "Divin", icon: Heart, gradient: "from-rose-200 to-pink-300" },
  { to: "/siddhi", label: "Siddhi", icon: Sparkles, gradient: "from-purple-200 to-pink-200" },
  { to: "/songs", label: "Songs", icon: Music, gradient: "from-violet-200 to-purple-200" },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Photo */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-romantic rounded-[2.5rem] blur-2xl opacity-60 animate-pulse-glow" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glass-card shadow-soft group">
              {/* <div className="w-full h-full bg-gradient-romantic flex items-center justify-center text-foreground/40 font-serif italic text-lg"> */}
                {/* <div className="text-center px-6"> */}
                  {/* <Heart className="w-16 h-16 mx-auto mb-3 text-primary/60 fill-primary/30" /> */}
                  <img src="https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777358483/Pooja_landing_page_qtdwsn.jpg" alt="My Image" className="mx-auto rounded-xl w-full h-full object-cover"/>
                {/* </div> */}
              {/* </div> */}
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-button shadow-glow flex items-center justify-center animate-float">
              <span className="text-2xl">🎂</span>
            </div>
          </div>

          {/* Right: Counter */}
          <div className="text-center md:text-left space-y-8 animate-fade-in-up">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">A special day</p>
              <h1 className="font-serif text-5xl md:text-7xl leading-none">
                Celebrating <span className="text-gradient italic">Pooja,</span>
              </h1>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* Big greeting */}
      <section className="px-6 md:px-12 py-16 text-center">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight">
          Happy Birthday <span className="inline-block animate-pulse-glow">❤️</span>
        </h2>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative aspect-[16/7] rounded-[2rem] overflow-hidden glass-card shadow-soft">
            <div className="w-full h-full bg-gradient-to-br from-blush via-secondary to-accent flex items-center justify-center text-foreground/40 font-serif italic">
              <img src="https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777448570/Pooja_ne8rmv.png" alt="My Image" className="mx-auto rounded-xl w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Nav buttons */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-muted-foreground mb-10">Explore</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {navItems.map(({ to, label, icon: Icon, gradient }, i) => (
              <Link
                key={to}
                to={to}
                style={{ animationDelay: `${i * 100}ms` }}
                className="group relative animate-fade-in-up"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                <div className="relative glass-card px-6 py-8 md:py-10 flex flex-col items-center gap-3 hover:-translate-y-2 hover:shadow-glow transition-all duration-500">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-soft`}>
                    <Icon className="w-6 h-6 text-foreground/70" />
                  </div>
                  <span className="font-serif text-lg md:text-xl">{label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;