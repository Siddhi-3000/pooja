import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev >= 19) {
          clearInterval(id); // stop at 19
          return 19;
        }
        return prev + 1;
      });
    }, 100); // speed (lower = faster)

    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <div className="glass-card px-7 py-5 min-w-[100px] shadow-soft">
          <div className="font-serif text-5xl text-gradient font-bold tabular-nums">
            {count.toString().padStart(2, "0")}
          </div>
        </div>
        <span className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
          Age
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;