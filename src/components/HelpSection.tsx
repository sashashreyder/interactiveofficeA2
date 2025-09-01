import React from "react";

type Props = {
  onClose: () => void;
};

const HelpSection: React.FC<Props> = ({ onClose }) => (
  <div className="max-w-[1200px] mx-auto overflow-hidden rounded-[15px] shadow-[0_8px_32px_rgba(0,0,0,.28)] bg-white/10 text-slate-100 ring-1 ring-white/15 backdrop-blur-xl relative z-10">
    <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-5 flex items-center justify-between">
      <h2 className="text-[1.8rem] font-semibold">📚 Как использовать Интерактивный Офис</h2>
      <button
        onClick={onClose}
        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-2xl grid place-items-center"
        aria-label="закрыть"
      >
        ×
      </button>
    </div>

    <div className="p-6 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
      <div className="bg-white/10 backdrop-blur-xl ring-1 ring-white/10 rounded-[12px] p-6 hover:bg-white/15 transition">
        <h3 className="text-[1.3rem] font-semibold text-white mb-3">🎯 Лексика</h3>
        <p className="text-slate-200">Business Center • Management & Customers • Strategy & Admin</p>
      </div>
      <div className="bg-white/10 backdrop-blur-xl ring-1 ring-white/10 rounded-[12px] p-6 hover:bg-white/15 transition">
        <h3 className="text-[1.3rem] font-semibold text-white mb-3">✏️ Грамматика</h3>
        <p className="text-slate-200">
          Will/going to • Present Continuous vs Simple • would like to • need/want • demonstratives • imperatives •
          modals • there is/are • count/uncount • possessives
        </p>
      </div>
      <div className="bg-white/10 backdrop-blur-xl ring-1 ring-white/10 rounded-[12px] p-6 hover:bg-white/15 transition">
        <h3 className="text-[1.3rem] font-semibold text-white mb-3">🧠 Критическое мышление</h3>
        <p className="text-slate-200">Реальные офисные сценарии.</p>
      </div>
    </div>
  </div>
);

export default HelpSection;
