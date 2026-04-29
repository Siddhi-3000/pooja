import PageLayout from "@/components/PageLayout";
import { Sparkles } from "lucide-react";

const Divin = () => {
  return (
    <PageLayout>
      <section className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in md:order-1">
            {/* Glow background (no pulse) */}
            <div className="absolute -inset-4 bg-gradient-to-br from-lavender to-accent rounded-[2.5rem] blur-2xl opacity-30" />

            {/* Image container */}
            <div className="relative rounded-[2rem] overflow-hidden glass-card shadow-soft">
              <img src="https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777451991/divin_c7pqtr.jpg"            alt="My Image" className="w-full h-full object-contain"/>
            </div>
          </div>
          <div className="space-y-6 animate-fade-in-up md:order-2">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">From Divin</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              You are <span className="text-gradient italic">magic</span>
            </h1>
            <div className="glass-card p-7 md:p-8 shadow-soft">
              <Sparkles className="w-6 h-6 text-lavender mb-4" />
              <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/85 italic">
                "Happy Birthday babe ♥️😋
 
                You turned my boring days into one of the most peaceful phases of my life. You truly deserve every happiness, dear 🥹 and I feel really lucky to have such an auspicious and beautiful person like you in my life 🫶
                
                Your smile just makes my day, and your presence instantly brightens my mood. I’ve never really felt proud of my decisions… but this one choosing you  is honestly perfect 🤭♥️♥️
                
                Long distance kabhi easy nahi hota… aur kuch reasons ki wajah se main utna time bhi nahi de pata jitna dena chahiye. Phir bhi aap mere saath rehna choose karte ho, mere messages ka wait karte ho, meri choti choti baaton ko importance deti ho… yeh sab sach mein bohot hi pyara lagta hai 🥹
                
                I just want to tell that aapko duniya ki saari happiness mile aur aapko kabhi kisi cheez ke liye takleef na ho 🫶♥️ Aap hamesha khush rehna, strong rehna… aur hamesha aise hi apni value samajhna.
                
                And thank you… thank you so much for coming into my life 🥺♥️ I will always be grateful for you.
                
                I love you so much, dear 🫶♥️♥️♥️ Enjoy your day… stay happy, stay strong, and always be the best in your own eyes 👀♥️"
              </p>
              <p className="mt-6 text-right font-serif italic text-lavender">— Divin ✨</p>
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
};

export default Divin;
