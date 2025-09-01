import React, { useState } from "react";

interface Question {
  id: number;
  type: "vocabulary" | "grammar" | "scenario" | "critical_thinking";
  difficulty: "beginner" | "intermediate";
  question: string;
  options?: string[];               
  correctAnswer: string;             
  acceptableAnswers?: string[];      
  explanation: string;              
  explanationRu: string;            
  points: number;
  category: string;
  hintRu?: string;
}

interface QuizGameProps {
  questions: Question[];
  onAnswer: (isCorrect: boolean, points: number, questionType: string) => void;
  onBack: () => void;
}

const typeBadge = (t: string) => {
  switch (t) {
    case "vocabulary": return { icon: "📚", label: "Лексика", cls: "bg-sky-500" };
    case "grammar": return { icon: "✏️", label: "Грамматика", cls: "bg-rose-500" };
    case "critical_thinking": return { icon: "🧠", label: "Критическое мышление", cls: "bg-violet-500" };
    case "scenario": return { icon: "💬", label: "Сценарий", cls: "bg-amber-500" };
    default: return { icon: "❓", label: "Вопрос", cls: "bg-slate-500" };
  }
};

const QuestionProgress: React.FC<{ current: number; total: number; correct: number }> = ({ current, total, correct }) => {
  const percent = Math.round((current / total) * 100);
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-slate-300 mb-1">
        <span>Прогресс: {current}/{total}</span>
        <span>Верно: {correct}</span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-400 to-indigo-400 transition-[width] duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};


const norm = (s: string) =>
  s.trim().toLowerCase()
    .replace(/[.,!?;:()"'`]/g, "")
    .replace(/\s+/g, " ");

const QuizGame: React.FC<QuizGameProps> = ({ questions, onAnswer, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState(""); 
  const [showExplanation, setShowExplanation] = useState(false);
  const [showRussian, setShowRussian] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [answers, setAnswers] = useState<{ id: number; correct: boolean }[]>([]);
  const [finished, setFinished] = useState(false);

  if (!questions.length) {
    return (
      <div className="rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 text-white max-w-3xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,.25)] min-h-[520px] transition-all duration-500">
        Нет вопросов.
        <button onClick={onBack} className="mt-4 px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-500">
          Вернуться
        </button>
      </div>
    );
  }

  const q = questions[currentQuestionIndex];
  const isLast = currentQuestionIndex === questions.length - 1;
  const badge = typeBadge(q.type);

  const checkAnswer = (answerRaw: string) => {
    const userN = norm(answerRaw);
    const correctN = norm(q.correctAnswer);
    const alts = (q.acceptableAnswers ?? []).map(norm);

    const correct = userN === correctN || alts.includes(userN);

    setSelectedAnswer(answerRaw);
    setShowExplanation(true);
    setShowRussian(false);
    setShowHint(false);
    setAnswers(prev => [...prev, { id: q.id, correct }]);
    onAnswer(correct, q.points, q.type);
  };

  const handleNext = () => {
    if (isLast) {
      setFinished(true);
      return;
    }
    setCurrentQuestionIndex(i => i + 1);
    setSelectedAnswer(null);
    setInputValue("");
    setShowExplanation(false);
    setShowRussian(false);
    setShowHint(false);
  };

  const handleRetryWrong = () => {
    const wrongIds = answers.filter(a => !a.correct).map(a => a.id);
    const filtered = questions.filter(qq => wrongIds.includes(qq.id));
    if (filtered.length) {
    
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setInputValue("");
      setShowExplanation(false);
      setShowRussian(false);
      setShowHint(false);
      setAnswers([]);
      setFinished(false);
    } else {
      onBack();
    }
  };

  if (finished) {
    const correct = answers.filter(a => a.correct).length;
    const total = answers.length;
    const ratio = total ? correct / total : 0;
    let title = "Готово!";
    let note = "Попробуй ещё раз для закрепления.";
    if (ratio <= 0.3) { title = "Хорошее начало!"; note = "Включи подсказки и попробуй снова."; }
    else if (ratio <= 0.7) { title = "Неплохо!"; note = "Есть прогресс, повтори ошибки."; }
    else { title = "Отлично!"; note = "Можем идти дальше!"; }

    return (
      <div className="rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 text-white max-w-3xl mx-auto shadow-lg">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-slate-300 mb-4">{note}</p>
        <div className="rounded-xl bg-white/5 p-4 mb-4">
          <p className="font-semibold">Результат: {correct} из {total} ({Math.round(ratio * 100)}%)</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button onClick={handleRetryWrong} className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600">Повторить ошибки</button>
          <button onClick={() => { setCurrentQuestionIndex(0); setAnswers([]); setFinished(false); }} className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600">Пройти заново</button>
          <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-500">Назад</button>
        </div>
      </div>
    );
  }

  const userIsCorrect =
    selectedAnswer !== null &&
    norm(selectedAnswer) === norm(q.correctAnswer) ||
    (q.acceptableAnswers ?? []).map(norm).includes(norm(selectedAnswer ?? ""));

  return (
    <div className="rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 text-white max-w-3xl mx-auto shadow-lg">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Вопрос {currentQuestionIndex + 1} из {questions.length}</h2>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${badge.cls}`}>
            <span>{badge.icon}</span> {badge.label}
          </div>
        </div>
        <p className="text-slate-300 text-sm mt-1">Категория: {q.category}</p>
      </div>

      <QuestionProgress
        current={currentQuestionIndex + 1}
        total={questions.length}
        correct={answers.filter(a => a.correct).length}
      />

      <div className="mb-4 text-base md:text-lg font-medium leading-snug">{q.question}</div>

      {q.options && q.options.length > 0 ? (
        // Multiple choice
        <div className="grid gap-3 mb-4">
          {q.options.map((opt, idx) => {
            const isCorrect = norm(opt) === norm(q.correctAnswer) || (q.acceptableAnswers ?? []).map(norm).includes(norm(opt));
            const isSelected = opt === selectedAnswer;
            const base = "px-4 py-3 rounded-lg text-left transition";
            const idle = "bg-white/10 hover:bg-white/20";
            const after =
              isCorrect ? "bg-emerald-500/90 text-white"
              : isSelected ? "bg-rose-500/90 text-white"
              : "bg-white/10";
            return (
              <button
                key={idx}
                onClick={() => checkAnswer(opt)}
                disabled={showExplanation}
                className={`${base} ${showExplanation ? after : idle}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      ) : (
        // Gap-fill
        <div className="mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !showExplanation) checkAnswer(inputValue); }}
            disabled={showExplanation}
            placeholder="Введите слово..."
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {!showExplanation && (
            <button
              onClick={() => checkAnswer(inputValue)}
              className="mt-3 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600"
            >
              Проверить
            </button>
          )}
        </div>
      )}

      {q.hintRu && !showExplanation && (
        <button
          onClick={() => setShowHint(true)}
          className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 text-amber-200 text-sm font-medium hover:bg-amber-400/30 transition"
        >
          <span className="text-lg">💡</span>
          Подсказка
        </button>
      )}

      {showExplanation && (
        <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-2">
            {userIsCorrect ? "✅ Правильно!" : "❌ Неправильно"}
          </h4>

          {!userIsCorrect && (
            <p className="mb-2 text-slate-200">
              Правильный ответ: <strong>{q.correctAnswer}</strong>
              {q.acceptableAnswers?.length ? <> (варианты: <em>{q.acceptableAnswers.join(", ")}</em>)</> : null}
            </p>
          )}

          <p className="mb-3 text-slate-100/90">{q.explanation}</p>

          <button
            onClick={() => setShowRussian(v => !v)}
            className="px-3 py-1 rounded-full bg-teal-500/80 hover:bg-teal-500 text-white text-xs"
          >
            {showRussian ? "Скрыть перевод" : "Показать перевод"}
          </button>

          {showRussian && (
            <div className="mt-3 p-3 rounded bg-white/10 border border-white/10 text-slate-100/90">
              {q.explanationRu}
            </div>
          )}

          <div className="mt-3 font-semibold">
            {userIsCorrect ? `+${q.points} очков опыта` : "0 очков"}
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-500">Назад</button>
        {showExplanation && (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600"
          >
            {isLast ? "Завершить" : "Следующий вопрос"}
          </button>
        )}
      </div>

      {showHint && q.hintRu && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={() => setShowHint(false)}
        >
          <div
            className="relative bg-slate-800/95 p-6 rounded-2xl text-white max-w-md w-full shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowHint(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Закрыть"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💡</span>
              <h3 className="text-lg font-semibold">Подсказка</h3>
            </div>
            <p className="text-slate-200">{q.hintRu}</p>
            <div className="mt-5 flex justify-end">
              <button
                className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition"
                onClick={() => setShowHint(false)}
              >
                Понятно
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGame;






