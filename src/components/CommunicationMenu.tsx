import React from "react";
import type { GameState } from "../types";

type Props = {
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
};

const CommunicationMenu: React.FC<Props> = ({ setGameState }) => (
  <div className="max-w-[1200px] mx-auto text-center animate-[fadeIn_.8s_ease-out] px-4">
    <div className="mb-6 p-6 rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 text-slate-100">
      <h1 className="text-3xl font-bold mb-1">💬 Навыки общения</h1>
      <p className="text-slate-200">Практика с боссом и клиентом</p>
      <button
        onClick={() => setGameState(p => ({ ...p, currentMode: "main" }))}
        className="mt-4 inline-flex items-center justify-center rounded-full text-white px-4 py-2 text-sm shadow
                   bg-gradient-to-br from-slate-400/80 to-slate-600/80 hover:brightness-110 transition"
      >
        ← Назад в главное меню
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-[900px] mx-auto">
      <button
        onClick={() => setGameState(p => ({ ...p, currentMode: "boss" }))}
        className="group relative rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-8 text-slate-100
                   hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,.35)] transition"
      >
        <div className="w-30 h-30 mx-auto mb-5 rounded-full overflow-hidden border-4 border-rose-400/70 shadow">
          <img src="/boss.png" alt="Босс" className="w-[120px] h-[120px] object-cover mx-auto transition-transform group-hover:scale-110" />
        </div>
        <h3 className="text-[1.6rem] font-semibold text-white mb-2">Вызов Босса</h3>
        <p className="text-slate-200 text-[1.1rem]">Профессиональные сценарии</p>
      </button>

      <button
        onClick={() => setGameState(p => ({ ...p, currentMode: "client" }))}
        className="group relative rounded-[15px] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-8 text-slate-100
                   hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,.35)] transition"
      >
        <div className="w-30 h-30 mx-auto mb-5 rounded-full overflow-hidden border-4 border-emerald-400/70 shadow">
          <img src="/client.png" alt="Клиент" className="w-[120px] h-[120px] object-cover mx-auto transition-transform group-hover:scale-110" />
        </div>
        <h3 className="text-[1.6rem] font-semibold text-white mb-2">Встреча с Клиентом</h3>
        <p className="text-slate-200 text-[1.1rem]">Навыки обслуживания</p>
      </button>
    </div>
  </div>
);

export default CommunicationMenu;
