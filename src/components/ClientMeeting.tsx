import React, { useState } from "react";

interface ClientMeetingProps {
  onAnswer: (isCorrect: boolean, points: number, questionType: string) => void;
  onBack: () => void;
}

interface ClientScenario {
  id: number;
  scenario: string;
  scenarioRu: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  explanationRu: string;
  points: number;
}

const ClientMeeting: React.FC<ClientMeetingProps> = ({ onAnswer, onBack }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showRu, setShowRu] = useState(false);
  const [meetingComplete, setMeetingComplete] = useState(false);

  const scenarios: ClientScenario[] = [
    {
      id: 1,
      scenario: "Client: “Have you prepared the contract?”",
      scenarioRu: "Клиент: «Вы подготовили контракт?»",
      options: [
        "Yes, we have prepared the contract.",
        "Yes, we prepare it yesterday.",
        "We was preparing it.",
        "Not ready."
      ],
      correctAnswer: "Yes, we have prepared the contract.",
      explanation: "Present Perfect — результат важен сейчас.",
      explanationRu: "Да, мы подготовили контракт.",
      points: 15
    },
    {
      id: 2,
      scenario: "Client: “Why were you not at the meeting yesterday?”",
      scenarioRu: "Клиент: «Почему вас не было на встрече вчера?»",
      options: [
        "I was attending training.",
        "I attend training.",
        "I was attend training.",
        "Never go."
      ],
      correctAnswer: "I was attending training.",
      explanation: "Past Continuous — длительное действие в прошлом.",
      explanationRu: "Я был на тренинге.",
      points: 15
    },
    {
      id: 3,
      scenario: "Client: “When will you deliver the products?”",
      scenarioRu: "Клиент: «Когда вы доставите продукты?»",
      options: [
        "We will deliver them next Monday.",
        "We deliver yesterday.",
        "We was delivering.",
        "Not sure."
      ],
      correctAnswer: "We will deliver them next Monday.",
      explanation: "Future Simple — обещание/план.",
      explanationRu: "Мы доставим их в следующий понедельник.",
      points: 15
    },
    {
      id: 4,
      scenario: "Client: “The deadline is very close. Can you finish?”",
      scenarioRu: "Клиент: «Дедлайн очень близко. Вы можете закончить?»",
      options: [
        "Yes, we can finish by the deadline.",
        "We was finish it.",
        "We finished yesterday.",
        "Not possible."
      ],
      correctAnswer: "Yes, we can finish by the deadline.",
      explanation: "Can — возможность, обещание вовремя.",
      explanationRu: "Да, мы сможем закончить к дедлайну.",
      points: 15
    },
    {
      id: 5,
      scenario: "Client: “Why has the price increased?”",
      scenarioRu: "Клиент: «Почему цена повысилась?»",
      options: [
        "Because the costs have increased.",
        "Because costs was increase.",
        "Because costs increase yesterday.",
        "Not important."
      ],
      correctAnswer: "Because the costs have increased.",
      explanation: "Present Perfect объясняет текущую ситуацию.",
      explanationRu: "Потому что расходы выросли.",
      points: 15
    },
    {
      id: 6,
      scenario: "Client: “Did you use to work with international companies?”",
      scenarioRu: "Клиент: «Вы раньше работали с международными компаниями?»",
      options: [
        "Yes, we used to work with them.",
        "Yes, we use to work.",
        "We was working.",
        "Never work."
      ],
      correctAnswer: "Yes, we used to work with them.",
      explanation: "Used to — привычка/факт в прошлом.",
      explanationRu: "Да, мы раньше работали с ними.",
      points: 15
    },
    {
      id: 7,
      scenario: "Client: “Can you show me the market analysis?”",
      scenarioRu: "Клиент: «Можете показать анализ рынка?»",
      options: [
        "Yes, here is the analysis.",
        "We was analyze it.",
        "We analyze yesterday.",
        "Not have."
      ],
      correctAnswer: "Yes, here is the analysis.",
      explanation: "Клиент просит документ → дать вежливый ответ.",
      explanationRu: "Да, вот анализ.",
      points: 15
    },
    {
      id: 8,
      scenario: "Client: “I’m not happy with customer service.”",
      scenarioRu: "Клиент: «Я недоволен обслуживанием.»",
      options: [
        "I’m sorry. We will improve the service.",
        "That’s your problem.",
        "Not care.",
        "Later."
      ],
      correctAnswer: "I’m sorry. We will improve the service.",
      explanation: "Вежливое извинение + Future Simple для обещания.",
      explanationRu: "Извините. Мы улучшим обслуживание.",
      points: 20
    },
    {
      id: 9,
      scenario: "Client: “What is your plan for development?”",
      scenarioRu: "Клиент: «Каков ваш план развития?»",
      options: [
        "Our strategy is to invest in new technology.",
        "We was invest in new tech.",
        "We invest yesterday.",
        "No plan."
      ],
      correctAnswer: "Our strategy is to invest in new technology.",
      explanation: "Используем лексику strategy/invest.",
      explanationRu: "Наша стратегия — инвестировать в новые технологии.",
      points: 20
    },
    {
      id: 10,
      scenario: "Client: “Have you improved the training program?”",
      scenarioRu: "Клиент: «Вы улучшили программу обучения?»",
      options: [
        "Yes, we have improved the program.",
        "We was improve it.",
        "We improve yesterday.",
        "Not improved."
      ],
      correctAnswer: "Yes, we have improved the program.",
      explanation: "Present Perfect — результат улучшения.",
      explanationRu: "Да, мы улучшили программу.",
      points: 15
    },
    {
      id: 11,
      scenario: "Client: “When will you send the survey results?”",
      scenarioRu: "Клиент: «Когда вы отправите результаты опроса?»",
      options: [
        "We will send them tomorrow.",
        "We was send them.",
        "We send yesterday.",
        "Never."
      ],
      correctAnswer: "We will send them tomorrow.",
      explanation: "Future Simple — конкретный план.",
      explanationRu: "Мы отправим их завтра.",
      points: 15
    },
    {
      id: 12,
      scenario: "Client: “The profit has grown. What is your opinion?”",
      scenarioRu: "Клиент: «Прибыль выросла. Каково ваше мнение?»",
      options: [
        "That’s great. It will help development.",
        "Profit was grow.",
        "We was growing.",
        "Not know."
      ],
      correctAnswer: "That’s great. It will help development.",
      explanation: "Present Perfect (результат) + Future Simple (прогноз).",
      explanationRu: "Это отлично. Это поможет развитию.",
      points: 20
    }
  ];

  const total = scenarios.length;
  const current = currentScenarioIndex + 1;
  const percent = Math.round((current / total) * 100);
  const currentScenario = scenarios[currentScenarioIndex];
  const isLastScenario = currentScenarioIndex === total - 1;

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    const isCorrect = answer === currentScenario.correctAnswer;
    onAnswer(isCorrect, currentScenario.points, "scenario");
    setShowExplanation(true);
  };

  const handleNextScenario = () => {
    if (isLastScenario) {
      setMeetingComplete(true);
    } else {
      setCurrentScenarioIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setShowRu(false);
    }
  };

  const handleRestart = () => {
    setCurrentScenarioIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowRu(false);
    setMeetingComplete(false);
  };

  if (meetingComplete) {
    return (
      <div className="relative z-20 max-w-[1000px] mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
        <div className="flex items-center gap-4 pb-5 border-b border-white/10">
          <div className="w-14 h-14 rounded-full grid place-items-center bg-gradient-to-br from-emerald-400 to-teal-500 text-2xl shadow">🤝</div>
          <div>
            <h2 className="text-2xl font-bold">Meeting Complete</h2>
            <p className="text-slate-300">Nice work! You handled client scenarios well.</p>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <button onClick={handleRestart} className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition">Try Again</button>
          <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-500/80 hover:bg-slate-500 transition">Back to Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-20 max-w-[1000px] mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
      <div className="mb-4">
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-[width] duration-500" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
          <span>Client Meeting</span>
          <span>Scenario {current} / {total}</span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">What would you say to your client?</h3>
          <button
            type="button"
            onClick={() => setShowRu(v => !v)}
            className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
          >
            {showRu ? "Скрыть перевод" : "Показать перевод"}
          </button>
        </div>
        <p className="text-slate-200 mt-2">{currentScenario.scenario}</p>
        {showRu && <p className="text-slate-300 mt-2">{currentScenario.scenarioRu}</p>}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {currentScenario.options.map((option, idx) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === currentScenario.correctAnswer;
          const base = "px-4 py-3 rounded-lg text-left border transition disabled:opacity-90";
          const idle = "bg-white/5 border-white/10 hover:bg-white/10";
          const good = "bg-emerald-500/85 border-emerald-400 text-white";
          const bad = "bg-rose-500/85 border-rose-400 text-white";
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleAnswerSelect(option)}
              disabled={selectedAnswer !== null}
              className={`${base} ${selectedAnswer ? (isCorrect ? good : isSelected ? bad : "bg-white/5 border-white/10") : idle}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 min-h-[92px]">
        {showExplanation ? (
          <>
            <h4 className="font-semibold mb-1">Tip</h4>
            <p className="text-slate-200">{currentScenario.explanation}</p>
            <p className="text-slate-300 mt-1">{currentScenario.explanationRu}</p>
          </>
        ) : (
          <div className="text-slate-400 text-sm">Выберите вариант ответа…</div>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-500/80 hover:bg-slate-500 transition">Back to Menu</button>
        {showExplanation && (
          <button
            onClick={handleNextScenario}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
          >
            {isLastScenario ? "Finish Meeting" : "Next Scenario"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ClientMeeting;



