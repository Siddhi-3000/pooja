import PageLayout from "@/components/PageLayout";
import { Heart } from "lucide-react";

const messages = [
  { from: "Mom", text: "My darling, watching you grow into the beautiful soul you are today is my greatest joy. Happy 19th, my love.", emoji: "🌸" },
  { from: "Dad", text: "You'll always be my little girl, no matter how many candles are on the cake. So proud of you.", emoji: "🎈" },
  { from: "Best Friend", text: "Nineteen looks unreal on you. Cheers to chaos, late-night calls, and a year filled with magic.", emoji: "✨" },
  { from: "Sister", text: "From sharing toys to sharing secrets — I'd choose you in every lifetime. Happy birthday, bestie-by-blood.", emoji: "💞" },
  { from: "Grandma", text: "Sweetheart, may your year bloom as gently and as brightly as you do. All my love.", emoji: "🌷" },
  { from: "From Everyone", text: "You make every room softer just by walking in. Have the loveliest day.", emoji: "🤍" },
];

const Messages = () => {
  return (
    <PageLayout>
      <section className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">From the heart</p>
          <h1 className="font-serif text-5xl md:text-6xl">Messages for You</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">A little collection of love, written just for today.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((m, i) => (
            <article
              key={i}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group glass-card p-6 hover:-translate-y-2 hover:shadow-glow transition-all duration-500 animate-fade-in-up"
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-romantic mb-5 flex items-center justify-center text-4xl">
                {m.emoji}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <span className="font-serif italic text-lg">{m.from}</span>
              </div>
              <p className="text-foreground/80 leading-relaxed">{m.text}</p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Messages;
