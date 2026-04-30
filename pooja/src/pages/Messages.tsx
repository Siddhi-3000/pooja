import PageLayout from "@/components/PageLayout";
import { Heart } from "lucide-react";

const messages = [
  { 
    from: "Shree",
    text: "Happiest birthday Pooozaaaaa🎊❤️ Always stay Blessed and Happy 🚀😇 and always Enjoy.....Have a Rockkkkkkkk 20....!!!🚀❤️",
    imageUrl: "https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777459172/pooja1_grwj6b.jpg"
  },
  { 
    from: "Shivam ", 
    text: "Happy Birthday Pooja!(Bhabhi ji ) 🎉 May your day be filled with happiness and laughter. You deserve all the smiles and success ahead 🫂♥️", 
    imageUrl: "https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777459172/pooja3_x0cyoe.jpg"
  },
  { 
    from: "Christina ", 
    text: "Wish you many many many many many more happy returns of the day bhabhi jiiiiiiii♥️🫂🥳 May God always guide you in his divine presence 😇🫶 aur iss Jayda ko sambhalne ki shakti de 😂", 
    imageUrl: "https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777459172/pooja6_qrpr96.jpg" 
  },
  { 
    from: "Jatin", 
    text: "Happy Birthday Pooja🥳✨ May your day bring you smiles, laughter, and good times. Wishing you a year full of happiness and new achievements. Enjoy your special day! 😊", 
    imageUrl: "https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777459172/pooja2_irehwq.jpg"
  },
  {
    from: "Devendra Sir", 
    text: "Happy birthday Pooja ❤️🎉🎂 God bless you 🙏😇  Blessed to have you as a student 🙏 The only student who beat sir 😂🎊",
    imageUrl: "https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777459172/aayu_e2nrca.jpg"
  },
  { 
    from: "Rohan", 
    text: "HAPPIEST BIRTHDAY POOJA AKA BHABHI😝 STAY BLESSED ALWAYS✌️ AND WHAT I FORGOT ANYWAY ENJOY YO DAY TO ITS FULLEST🔥🔥🔥", 
    imageUrl: "https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777459171/pooja8_zevqlg.jpg"
  },
  {
    from: "Advait", 
    text: "Happy Birthday Gatli 👹👹 Well I know that I dont show it but I do care about you I might show like I dont but I do yeah sure. I wish you to be happy tya divshi when i said sorry tyachya just aadhi siddhi ne mala saangitla ki tula jaila late jhala tya mule tujha phone rahila aani tujhi mam tula oradli like khup and you were about to cry it was for that I felt like te late maajhya mule jhalela tula and Im again sorry for that. Also thode divsaan aadhi jevha aapn inorbit la gelelo tevha sorry like after we get home I asked siddhi ki ky jhalela so she told me ki I made you feel unwanted there when we were going to inorbit I am even sorry about it . Also I miss us fighting over things it was fun I liked it why dont you fight with me anymore you even have gone a bit quiter dont be like that I want you to fight with me. Again Happy Birthday enjoy your day.",
    imageUrl: "https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777459171/poojja7_qukjdm.jpg"
  },
  {
    from: "Ritika",
    text: "Wishing you a very happy birthday Poojaaaaaaaaaaaaaa❤️❤️ God bless you 🫂 God nhi ritika bless you 😂😂 Ky ch lihu yrr tuzya sathi pages pn kami padtil 😂....tari lihte kahi tari 🤭 aapla bhetna he unexpected like 11th la bhetlo ani ajun hi aapn sobat ahot ani rahnar Samjla na 🤨 yrr te 2 years kase gele kahi Samjla ch nhi...as vatt yrr parat tech divas yavet Ani aapn parat tashi ch majja masti karavi..1st bench la basun jitki majja keli ahe na I swear te divas aathvle na ki hasayla yeta ani aathvan hi yete 🥹...tuz te mala takli bolna , rusun basna , maramari karna , tulu classes ghenar..je ajun tu complete nhi kela ahes 😒😂 he sarv aathavta ree 😭😭 nehmi bhetnare aapn aata kiti mahine zale tari bhetat nhi ahot 😭😭 kadhi tari time kadh ree 🥲🥲 khup divas zale bhetlo nhi ahot khup kahi share karaych ahe ree 😂 titkya shivya pn deshil tu ik 🥲😅..pn tari yrr 😭...Ani hooo maza neer dosa, kori roti Ani kori sukka kadhi deteys 😁 mala pahijeeeeeee😭😭 nhi tr jiv gheil me tuza kutreee 😭😂",
    imageUrl: "https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777533762/WhatsApp_Image_2026-04-30_at_12.47.55_PM_bza3mi.jpg"
  },
  { 
    from: "Pranali", 
    text: "Happiest Birthday, Pooja!!💓🫶🏻 As long as I have a best friend like you by my side, anything feels possible. 💕 I got a best friend and sister in one person, and that's you. 💞😚 I can share anything with you without any hesitation 🥹 and yes, I'm never gonna call you by your name; you will always be takli for me, even if your hair touches the floor, haha...😂 I'm missing our hihaha and those days when you came for cooking lessons from me. 😂😂 No matter how long we are apart, our bond will always remain the same. 💗🤌🏻 No matter how many friends are in my life, you will always have a special place in my heart. ❤️🎀 I was, I am, and I will be there for you in any situation... 💌 I'm lucky to have you as my best friend. 🫂💗 Loveee you from the bottom of my heart, Takliiiii!!❤️😘🧿", 
    imageUrl: "https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777459171/pooja4_rlh1vz.jpg"
  },
  {
    from: "Chinmay", 
    text: "Happy Birthday gatli malinga pgl batli  behana bhagvan tera bhala kare aur akaal  budhi aur accha dimag de jo proper use kar sake tu 🎉🥳🎂🎁❤️",
    imageUrl: "https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777459171/pooja5_datc06.jpg"
  }
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
              <div className="rounded-2xl overflow-hidden mb-5 flex justify-center">
                <img
                  src={m.imageUrl}
                  alt={m.from}
                  className="max-w-full h-auto rounded-2xl"
                />
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
