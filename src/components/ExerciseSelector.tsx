import React from "react";

export interface ExerciseSelectorProps<T extends string> {
  title?: string;
  items: { key: T; label: string; icon: string }[];
  onSelect: (key: T) => void;
  onBack: () => void;
}

const ExerciseSelector = <T extends string>({
  title = "Выберите упражнение",
  items,
  onSelect,
  onBack,
}: ExerciseSelectorProps<T>) => {
  return (
    <div className="relative z-20 w-full max-w-[1100px] mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,.22)] text-white p-5">

      <h2 className="text-lg font-semibold mb-4">{title}</h2>


      <ul className="space-y-2 mb-6">
        {items.map((it) => (
          <li key={it.key}>
            <button
              type="button"
              onClick={() => onSelect(it.key)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-sky-500/20 hover:border-sky-400/40 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400/60"
            >
              <span className="text-xl">{it.icon}</span>
              <span>{it.label}</span>
            </button>
          </li>
        ))}

        {!items.length && (
          <li className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-300">
            Ничего не найдено
          </li>
        )}
      </ul>

      <div className="pt-4 border-t border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 hover:text-white hover:bg-white/10 transition"
        >
          <span aria-hidden>←</span>
          Назад
        </button>
      </div>
    </div>
  );
};

export default ExerciseSelector;




