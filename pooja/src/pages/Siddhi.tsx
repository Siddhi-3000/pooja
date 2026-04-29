import PageLayout from "@/components/PageLayout";
import { Heart } from "lucide-react";

const Siddhi = () => {
  return (
    <PageLayout>
      <section className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-br from-rose to-primary-glow rounded-[2.5rem] blur-2xl opacity-60 animate-pulse-glow" />
            <div className="relative rounded-[2rem] overflow-hidden glass-card shadow-soft">
              <img src="https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777457376/siddhi_szvxwz.jpg"           alt="My Image" className="w-full h-full object-contain"/>
            </div>
          </div>
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">From Siddhi</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              To my <span className="text-gradient italic">Best Friend,</span>
            </h1>
            <div className="glass-card p-7 md:p-8 shadow-soft">
              <Heart className="w-6 h-6 text-primary fill-primary mb-4" />
              <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/85 italic">
                Happiesttt b'day POOJA..my best frnd..my concert partner...my dance partner....my foodie partner..😘❤  I hope your this b'day and every b'day be special for youuu...as an frnd you have always been there for me... I wish you are with me in future too...you are such a cutie piee...loudy, energetic, cheerful, kind... Pls always be loudyyy... Silence doesn't suit youuu... But yesss in silence also I'll be there with youu... Even silence doesn't feel burdened with youuu...youu look cutest when youu smile...i love your smile...I'm so proud of youu... you're already such a strong person.. And also the kind one tooo...so be Proud of yourself... Uncle will also be always proud of youuu...aayu will always be having an cool akka...we are gonna complete all our wishes✊❤... Traveling around the world✈️️... Attending arijit's concert🌟...having fun...attending each other's weddings...you can always count on me🫶🏻❤️... I will always be there for youuu... Whenever youu need meee...once again Happiesttt b'dayyyyy gurlllllllll... Emjoyyy yourrr dayyyyyyy😘❤🌟
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
