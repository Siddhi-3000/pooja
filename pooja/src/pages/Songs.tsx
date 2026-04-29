import PageLayout from "@/components/PageLayout";
import { Music } from "lucide-react";

const Songs = () => {
  return (
    <PageLayout>
      <section className="px-6 md:px-12 py-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-button items-center justify-center shadow-glow mb-5 animate-float">
            <Music className="w-7 h-7 text-white" />
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">A little playlist</p>
          <h1 className="font-serif text-5xl md:text-6xl">Songs for You 🎶</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Press play and let every note remind you how loved you are.
          </p>
        </div>

        <div className="glass-card p-4 md:p-6 shadow-soft animate-scale-in">
          <div className="rounded-2xl overflow-hidden">
            <iframe
              title="Birthday playlist"
              style={{ borderRadius: "16px" }}
              src="https://open.spotify.com/embed/playlist/6oVEPIHkxC0yjRHHHuXYI0?utm_source=generator"
              width="100%"
              height="500"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Songs;
