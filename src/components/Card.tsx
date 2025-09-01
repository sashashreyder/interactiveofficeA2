import React from "react";

type CardProps = {
  children: React.ReactNode;
  accent: "blue" | "red" | "purple" | "amber" | "teal" | "zinc";
};

const Card: React.FC<CardProps> = ({ children, accent }) => {
  const accentColors: Record<
    string,
    { ring: string; glow: string; side: string; hoverRing: string }
  > = {
    blue:   { ring: "ring-sky-400/30",   glow: "hover:shadow-sky-500/40",   side: "before:bg-sky-400/90",   hoverRing: "hover:ring-sky-400/60" },
    red:    { ring: "ring-rose-400/30",  glow: "hover:shadow-rose-500/40",  side: "before:bg-rose-400/90",  hoverRing: "hover:ring-rose-400/60" },
    purple: { ring: "ring-violet-400/30",glow: "hover:shadow-violet-500/40",side: "before:bg-violet-400/90",hoverRing: "hover:ring-violet-400/60" },
    amber:  { ring: "ring-amber-400/30", glow: "hover:shadow-amber-500/40", side: "before:bg-amber-400/90", hoverRing: "hover:ring-amber-400/60" },
    teal:   { ring: "ring-teal-400/30",  glow: "hover:shadow-teal-500/40",  side: "before:bg-teal-400/90",  hoverRing: "hover:ring-teal-400/60" },
    zinc:   { ring: "ring-white/20",     glow: "hover:shadow-white/30",     side: "before:bg-white/40",     hoverRing: "hover:ring-white/40" }
  };

  const { ring, glow, side, hoverRing } = accentColors[accent];

  return (
    <div
      className={[
        "relative h-[210px] min-h-[210px] p-6 rounded-2xl",
        "bg-white/10 backdrop-blur-xl ring-1", ring,
        "flex flex-col items-center justify-center text-center text-slate-100",
        "transition-all duration-600 ease-in-out hover:-translate-y-2 hover:scale-[1.03]",
        "shadow-[0_10px_30px_rgba(0,0,0,.2)]", glow,
        "overflow-hidden", hoverRing, "hover:ring-2"
      ].join(" ")}
    >
      <span className={`absolute inset-y-0 left-0 w-1 rounded-r-lg ${side}`} />

      <span className="pointer-events-none absolute inset-0 -left-full hover:left-full transition-[left] duration-[1200ms] ease-in-out
                       before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r
                       before:from-transparent before:via-white/10 before:to-transparent" />

      {children}
    </div>
  );
};

export default Card;



