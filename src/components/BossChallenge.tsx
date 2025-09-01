import React, { useState } from "react";

interface BossChallengeProps {
  onAnswer: (isCorrect: boolean, points: number, questionType: string) => void;
  onBack: () => void;
}

interface BossScenario {
  id: number;
  scenario: string;
  scenarioRu: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  explanationRu: string;
  points: number;
}

const BossChallenge: React.FC<BossChallengeProps> = ({ onAnswer, onBack }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showRu, setShowRu] = useState(false);
  const [challengeComplete, setChallengeComplete] = useState(false);

  const scenarios: BossScenario[] = [
    {
      id: 1,
      scenario: "Boss: “Have you completed the sales analysis?”",
      scenarioRu: "Босс: «Вы завершили анализ продаж?»",
      options: [
        "Yes, I have completed the analysis.",
        "Yes, I complete it yesterday.",
        "I was complete it.",
        "Not yet, sorry."
      ],
      correctAnswer: "Yes, I have completed the analysis.",
      explanation: "Present Perfect — результат важен сейчас.",
      explanationRu: "Да, я завершил анализ.",
      points: 15
    },
    {
      id: 2,
      scenario: "Boss: “Why were you late to the meeting yesterday?”",
      scenarioRu: "Босс: «Почему вы опоздали на встречу вчера?»",
      options: [
        "I was waiting for the client’s call.",
        "I wait for client’s call.",
        "I was wait the call.",
        "I am waiting for call."
      ],
      correctAnswer: "I was waiting for the client’s call.",
      explanation: "Past Continuous — действие в процессе в прошлом.",
      explanationRu: "Я ждал звонка клиента.",
      points: 15
    },
    {
      id: 3,
      scenario: "Boss: “What strategy will you use for development?”",
      scenarioRu: "Босс: «Какую стратегию вы будете использовать для развития?»",
      options: [
        "We will use a new digital strategy.",
        "We use a new strategy yesterday.",
        "We was using new strategy.",
        "I don’t know."
      ],
      correctAnswer: "We will use a new digital strategy.",
      explanation: "Future Simple — план или обещание.",
      explanationRu: "Мы будем использовать новую цифровую стратегию.",
      points: 15
    },
    {
      id: 4,
      scenario: "Boss: “The profit has decreased. Why?”",
      scenarioRu: "Босс: «Прибыль снизилась. Почему?»",
      options: [
        "Because costs have increased.",
        "Because costs was increase.",
        "Because costs increase yesterday.",
        "I don’t know nothing."
      ],
      correctAnswer: "Because costs have increased.",
      explanation: "Present Perfect — причина, важная в настоящем.",
      explanationRu: "Потому что расходы выросли.",
      points: 15
    },
    {
      id: 5,
      scenario: "Boss: “You must finish this project by Friday.” What do you say?",
      scenarioRu: "Босс: «Вы должны закончить проект к пятнице». Что ответить?",
      options: [
        "Yes, I will finish it by Friday.",
        "I finished it yesterday.",
        "I was finishing it.",
        "I don’t want."
      ],
      correctAnswer: "Yes, I will finish it by Friday.",
      explanation: "Future Simple обещает выполнить задачу.",
      explanationRu: "Да, я закончу это к пятнице.",
      points: 15
    },
    {
      id: 6,
      scenario: "Boss: “Did you use to work in another company?”",
      scenarioRu: "Босс: «Вы раньше работали в другой компании?»",
      options: [
        "Yes, I used to work in a bank.",
        "Yes, I use to work in a bank.",
        "I working in bank now.",
        "No, never work."
      ],
      correctAnswer: "Yes, I used to work in a bank.",
      explanation: "Used to — привычка/факт в прошлом.",
      explanationRu: "Да, я раньше работал в банке.",
      points: 15
    },
    {
      id: 7,
      scenario: "Boss: “Why is the deadline important?”",
      scenarioRu: "Босс: «Почему важен дедлайн?»",
      options: [
        "Because we have to deliver on time.",
        "Because we delivered yesterday.",
        "Because we was deliver.",
        "Not important."
      ],
      correctAnswer: "Because we have to deliver on time.",
      explanation: "Have to — необходимость по правилам/условиям.",
      explanationRu: "Потому что мы должны сдать вовремя.",
      points: 15
    },
    {
      id: 8,
      scenario: "Boss: “Can you prepare a survey for our clients?”",
      scenarioRu: "Босс: «Можете подготовить опрос для наших клиентов?»",
      options: [
        "Yes, I can prepare it today.",
        "Yes, I prepared yesterday.",
        "I was prepare it.",
        "Not possible."
      ],
      correctAnswer: "Yes, I can prepare it today.",
      explanation: "Can — возможность сделать сейчас.",
      explanationRu: "Да, я могу подготовить его сегодня.",
      points: 15
    },
    {
      id: 9,
      scenario: "Boss: “Have you improved the customer service?”",
      scenarioRu: "Босс: «Вы улучшили обслуживание клиентов?»",
      options: [
        "Yes, we have improved it.",
        "Yes, we improve yesterday.",
        "We was improving it.",
        "Not yet improved."
      ],
      correctAnswer: "Yes, we have improved it.",
      explanation: "Present Perfect — результат улучшения.",
      explanationRu: "Да, мы его улучшили.",
      points: 15
    },
    {
      id: 10,
      scenario: "Boss: “Why were you not in the training yesterday?”",
      scenarioRu: "Босс: «Почему вас не было на тренинге вчера?»",
      options: [
        "I was attending another meeting.",
        "I attend another meeting.",
        "I was attend meeting.",
        "Not go."
      ],
      correctAnswer: "I was attending another meeting.",
      explanation: "Past Continuous — действие в процессе в прошлом.",
      explanationRu: "Я был на другой встрече.",
      points: 15
    },
    {
      id: 11,
      scenario: "Boss: “Will you manage this new contract?”",
      scenarioRu: "Босс: «Вы будете вести этот новый контракт?»",
      options: [
        "Yes, I will manage this contract.",
        "Yes, I managed yesterday.",
        "I am manage it.",
        "Not me."
      ],
      correctAnswer: "Yes, I will manage this contract.",
      explanation: "Future Simple — обещание взять задачу.",
      explanationRu: "Да, я буду вести этот контракт.",
      points: 15
    },
    {
      id: 12,
      scenario: "Boss: “The investment has grown. What do you think?”",
      scenarioRu: "Босс: «Инвестиции выросли. Что вы думаете?»",
      options: [
        "That’s good. The profit will increase too.",
        "That good. Profit increase yesterday.",
        "Profit was increase.",
        "Not know."
      ],
      correctAnswer: "That’s good. The profit will increase too.",
      explanation: "Связка Present Perfect (результат) + Future Simple (прогноз).",
      explanationRu: "Это хорошо. Прибыль тоже увеличится.",
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
      setChallengeComplete(true);
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
    setChallengeComplete(false);
  };

  if (challengeComplete) {
    return (
      <div className="relative z-20 max-w-[1000px] mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
        <div className="flex items-center gap-4 pb-5 border-b border-white/10">
          <div className="w-14 h-14 rounded-full grid place-items-center bg-gradient-to-br from-rose-400 to-orange-500 text-2xl shadow">👔</div>
          <div>
            <h2 className="text-2xl font-bold">Challenge Complete</h2>
            <p className="text-slate-300">Great job! Ready for client practice next.</p>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <button onClick={handleRestart} className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 transition">Try Again</button>
          <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-500/80 hover:bg-slate-500 transition">Back to Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-20 max-w-[1000px] mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
      <div className="mb-4">
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-rose-400 to-orange-400 transition-[width] duration-500" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
          <span>Boss Challenge</span>
          <span>Scenario {current} / {total}</span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">What would you say to your boss?</h3>
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
            {isLastScenario ? "Finish Challenge" : "Next Scenario"}
          </button>
        )}
      </div>
    </div>
  );
};

export default BossChallenge;



