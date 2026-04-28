import PageLayout from "@/components/PageLayout";
import { Heart } from "lucide-react";

const Siddhi = () => {
  return (
    <PageLayout>
      <section className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-br from-rose to-primary-glow rounded-[2.5rem] blur-2xl opacity-60 animate-pulse-glow" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden glass-card shadow-soft">
              <div className="w-full h-full bg-gradient-to-br from-blush via-rose/40 to-primary-glow flex items-center justify-center text-foreground/40 font-serif italic">
                Siddhi's photo
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">From Siddhi</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              To my <span className="text-gradient italic">favorite</span> human
            </h1>
            <div className="glass-card p-7 md:p-8 shadow-soft">
              <Heart className="w-6 h-6 text-primary fill-primary mb-4" />
              <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/85 italic">
                "From the very first day I met you, you became my sunshine on the cloudiest days. Nineteen years of you in this world, and I'm endlessly grateful for every single one. Here's to more midnight talks, silly laughs, and a forever kind of friendship. Happy birthday, my love."
              </p>
              <p className="mt-6 text-right font-serif italic text-primary">— Siddhi 🌷</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Siddhi;
