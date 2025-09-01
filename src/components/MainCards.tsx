import React from "react";
import Card from "./Card";
import type { GameState } from "../types";

type Props = {
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  resetGame: () => void;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainCards: React.FC<Props> = ({ setGameState, resetGame, setShowHelp }) => (
  <div className="grid gap-6 max-w-[1000px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {/* Vocabulary practice */}
    <button
      onClick={() => setGameState(p => ({ ...p, currentMode: "vocabulary" }))}
      className="focus:outline-none transform transition hover:scale-[1.03]"
    >
      <Card accent="blue">
        <div className="text-[48px] mb-3">📚</div>
        <h3 className="text-lg font-semibold text-white">Практика Лексики</h3>
        <p className="text-slate-300/80 text-sm">Vocabulary 1/2/3</p>
      </Card>
    </button>

    {/* Grammar practice */}
    <button
      onClick={() => setGameState(p => ({ ...p, currentMode: "grammar" }))}
      className="focus:outline-none transform transition hover:scale-[1.03]"
    >
      <Card accent="red">
        <div className="text-[48px] mb-3">✏️</div>
        <h3 className="text-lg font-semibold text-white">Практика Грамматики</h3>
        <p className="text-slate-300/80 text-sm">Grammar 1/2/3</p>
      </Card>
    </button>

    {/* Critical thinking */}
    <button
      onClick={() => setGameState(p => ({ ...p, currentMode: "critical_thinking" }))}
      className="focus:outline-none transform transition hover:scale-[1.03]"
    >
      <Card accent="purple">
        <div className="text-[48px] mb-3">🧠</div>
        <h3 className="text-lg font-semibold text-white">Критическое мышление</h3>
        <p className="text-slate-300/80 text-sm">Офисные ситуации</p>
      </Card>
    </button>

    {/* Communication skills */}
    <button
      onClick={() => setGameState(p => ({ ...p, currentMode: "communication" }))}
      className="focus:outline-none transform transition hover:scale-[1.03]"
    >
      <Card accent="amber">
        <div className="text-[48px] mb-3">💬</div>
        <h3 className="text-lg font-semibold text-white">Навыки общения</h3>
        <p className="text-slate-300/80 text-sm">Босс и Клиент</p>
      </Card>
    </button>

    {/* Help / Rules */}
    <button
      onClick={() => setShowHelp(true)}
      className="focus:outline-none transform transition hover:scale-[1.03]"
    >
      <Card accent="teal">
        <div className="text-[48px] mb-3">❓</div>
        <h3 className="text-lg font-semibold text-white">Помощь и правила</h3>
        <p className="text-slate-300/80 text-sm">Как пользоваться приложением</p>
      </Card>
    </button>

    {/* Reset progress (highlighted as more "dangerous" action) */}
    <button
      onClick={resetGame}
      className="focus:outline-none transform transition hover:scale-[1.03]"
    >
      <Card accent="zinc">
        <div className="text-[48px] mb-3">🔄</div>
        <h3 className="text-lg font-semibold text-rose-400">Сбросить прогресс</h3>
        <p className="text-slate-300/80 text-sm">Начать заново</p>
      </Card>
    </button>
  </div>
);

export default MainCards;


