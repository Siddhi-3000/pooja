import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [age, setAge] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setAge(current);

      if (current === 19) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-svh bg-[#fdf2f8] flex flex-col">
      
      {/* MAIN SECTION */}
      <section className="flex flex-1 flex-col md:flex-row">
        
        {/* IMAGE */}
        <div className="h-[58svh] w-full md:h-svh md:w-[44vw] md:min-w-[340px] md:max-w-[620px]">
          <img
            src="https://res.cloudinary.com/dr6mkbr8y/image/upload/v1777358483/Pooja_landing_page_qtdwsn.jpg"
            alt="Pooja"
            className="h-full w-full object-cover object-center md:object-[center_top]"
          />
        </div>

        {/* CONTENT */}
        <div className="flex min-h-[42svh] flex-1 items-center justify-center px-6 py-10 sm:px-10 md:min-h-svh md:px-12 lg:px-16">
          <div className="w-full text-center md:text-left">
            <h1 className="text-xl font-medium text-gray-700 sm:text-2xl md:text-3xl">
              Celebrating Pooja,
            </h1>

            <div className="mt-5 text-7xl font-extrabold leading-none text-purple-600 sm:text-8xl md:text-9xl">
              {age}
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 BOTTOM BUTTONS */}
      <div className="w-full flex justify-center gap-4 pb-6">
        <button
          onClick={() => navigate("/messages")}
          className="px-6 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >
          Messages
        </button>

        <button
          onClick={() => navigate("/siddhi")}
          className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
        >
          Siddhi
        </button>

        <button
          onClick={() => navigate("/divin")}
          className="px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
        >
          Divin
        </button>
      </div>

    </main>
  );
}