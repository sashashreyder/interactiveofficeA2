import React from "react";
import type { GameState } from "../types";

type Props = { gameState: GameState };

const ProgressTracker: React.FC<Props> = ({ gameState }) => {
  const { level, experience, totalQuestions, correctAnswers } = gameState;
  const accuracy = totalQuestions ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  const cur = experience % 100;
  const need = 100 - cur;
  const width = Math.min(100, Math.max(0, cur));

  return (
    <div className="w-full rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-5 md:p-6 text-slate-100">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span className="text-xl">📊</span> Ваш прогресс
      </h3>

      <div className="mb-4">
        <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-indigo-400 transition-[width] duration-700"
            style={{ width: `${width}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-slate-200/80">
          До следующего уровня: <span className="font-semibold text-white">{need}</span> очков опыта
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="rounded-xl bg-white/10 ring-1 ring-white/10 p-3 text-center">
          <span className="block text-2xl font-bold text-white">{level}</span>
          <span className="block text-xs uppercase tracking-wide text-slate-200/90">Уровень</span>
        </div>
        <div className="rounded-xl bg-white/10 ring-1 ring-white/10 p-3 text-center">
          <span className="block text-2xl font-bold text-white">{experience}</span>
          <span className="block text-xs uppercase tracking-wide text-slate-200/90">Опыт</span>
        </div>
        <div className="rounded-xl bg-white/10 ring-1 ring-white/10 p-3 text-center">
          <span className="block text-2xl font-bold text-white">{accuracy}%</span>
          <span className="block text-xs uppercase tracking-wide text-slate-200/90">Точность</span>
        </div>
        <div className="rounded-xl bg-white/10 ring-1 ring-white/10 p-3 text-center">
          <span className="block text-2xl font-bold text-white">{totalQuestions}</span>
          <span className="block text-xs uppercase tracking-wide text-slate-200/90">Вопросов</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;







