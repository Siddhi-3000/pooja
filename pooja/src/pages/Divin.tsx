import PageLayout from "@/components/PageLayout";
import { Sparkles } from "lucide-react";

const Divin = () => {
  return (
    <PageLayout>
      <section className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up md:order-2">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">From Divin</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              You are <span className="text-gradient italic">magic</span>
            </h1>
            <div className="glass-card p-7 md:p-8 shadow-soft">
              <Sparkles className="w-6 h-6 text-lavender mb-4" />
              <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/85 italic">
                "Some people are stars; you are the whole sky. Watching you turn nineteen feels like watching the most beautiful chapter begin. Thank you for being unapologetically you — soft, fierce, and quietly extraordinary. May this year hand you everything your heart has been whispering for."
              </p>
              <p className="mt-6 text-right font-serif italic text-lavender">— Divin ✨</p>
            </div>
          </div>

          <div className="relative animate-scale-in md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-lavender to-accent rounded-[2.5rem] blur-2xl opacity-60 animate-pulse-glow" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden glass-card shadow-soft">
              <div className="w-full h-full bg-gradient-to-br from-secondary via-lavender/40 to-accent flex items-center justify-center text-foreground/40 font-serif italic">
                Divin's photo
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Divin;
