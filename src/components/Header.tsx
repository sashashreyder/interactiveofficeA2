import React from "react";
import ProgressTracker from "./ProgressTracker";
import type { GameState } from "../types";

const Header: React.FC<{ gameState: GameState }> = ({ gameState }) => (
  <div className="relative z-10 mb-10">
    <div className="w-full">
      <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/15 text-white shadow-[0_12px_40px_rgba(0,0,0,.25)]">
        <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-400/10 via-white/10 to-cyan-400/10 blur-xl" />
        <div className="relative p-6 md:p-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-full bg-white/15 ring-1 ring-white/25 font-extrabold">
              <span className="text-2xl">🏢</span>
              <span>Интерактивный офис</span>
            </div>
            <p className="text-slate-200 mt-3 text-sm sm:text-base">Бизнес-английский • Уровень A2</p>
            <p className="text-slate-200/90 font-medium text-sm sm:text-base">
              Лексика • Грамматика • Критическое мышление • Общение
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 items-stretch">
            <div className="w-full">
              <ProgressTracker gameState={gameState} />
            </div>
            <div className="w-full rounded-xl bg-white/10 ring-1 ring-white/15 p-3 flex items-center justify-center">
              <img
                src="/транслинчик_бизнес.png"
                alt="Транслинчик Бизнес"
                className="w-auto max-h-[220px] md:max-h-[240px] select-none pointer-events-none drop-shadow-xl"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;





