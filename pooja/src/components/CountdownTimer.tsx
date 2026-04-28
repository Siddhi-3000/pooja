import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const calculate = () => {
    const now = new Date();
    let target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const diff = target.getTime() - now.getTime();
    return {
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const id = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(id);
  }, []);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="glass-card px-5 py-4 md:px-7 md:py-5 min-w-[80px] md:min-w-[100px] shadow-soft">
        <div className="font-serif text-3xl md:text-5xl text-gradient font-bold tabular-nums">
          {value.toString().padStart(2, "0")}
        </div>
      </div>
      <span className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-3 md:gap-5 justify-center">
      <Box value={time.hours} label="Hours" />
      <Box value={time.minutes} label="Mins" />
      <Box value={time.seconds} label="Secs" />
    </div>
  );
};

export default CountdownTimer;
