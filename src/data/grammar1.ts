import type { Question } from "../types";

export const grammar1: Question[] = [
  // --- Degrees of Comparison ---
  {
    id: 4001,
    type: "grammar",
    difficulty: "beginner",
    question: "This building is ___ than that one.",
    options: ["tall", "taller", "tallest", "more tall"],
    correctAnswer: "taller",
    explanation: "Comparative form — сравнение двух предметов.",
    explanationRu: "Это здание выше, чем то.",
    points: 10,
    category: "Degrees of Comparison",
    hintRu: "Сравнительная степень прилагательного."
  },
  {
    id: 4002,
    type: "grammar",
    difficulty: "beginner",
    question: "She is the ___ student in the class.",
    options: ["intelligent", "more intelligent", "most intelligent", "the most intelligent"],
    correctAnswer: "the most intelligent",
    explanation: "Superlative form — выделение одного среди многих.",
    explanationRu: "Она самая умная ученица в классе.",
    points: 10,
    category: "Degrees of Comparison",
    hintRu: "Превосходная степень прилагательного."
  },
  {
    id: 4003,
    type: "grammar",
    difficulty: "beginner",
    question: "Gold is ___ than silver.",
    options: ["expensive", "expensiver", "more expensive", "the most expensive"],
    correctAnswer: "more expensive",
    explanation: "Comparative form для многосложных прилагательных — more + adj.",
    explanationRu: "Золото дороже серебра.",
    points: 10,
    category: "Degrees of Comparison",
    hintRu: "Сравнение с прилагательным из 3 слогов."
  },
  {
    id: 4004,
    type: "grammar",
    difficulty: "beginner",
    question: "This method is ___ effective than that one.",
    options: ["less", "least", "more", "most"],
    correctAnswer: "less",
    explanation: "Less + adj — сравнительная степень в отрицательном значении.",
    explanationRu: "Этот метод менее эффективный, чем тот.",
    points: 10,
    category: "Degrees of Comparison",
    hintRu: "Сравнительная степень со словом less."
  },
  {
    id: 4005,
    type: "grammar",
    difficulty: "beginner",
    question: "Mount Everest is the ___ mountain in the world.",
    options: ["high", "higher", "highest", "the most high"],
    correctAnswer: "highest",
    explanation: "Superlative form — the + adj + est.",
    explanationRu: "Эверест — самая высокая гора в мире.",
    points: 10,
    category: "Degrees of Comparison",
    hintRu: "Превосходная степень короткого прилагательного."
  },

  // --- Present Perfect ---
  {
    id: 4006,
    type: "grammar",
    difficulty: "beginner",
    question: "She ___ already finished the report.",
    options: ["has", "have", "had", "is"],
    correctAnswer: "has",
    explanation: "Present Perfect — he/she/it → has + V3.",
    explanationRu: "Она уже закончила отчёт.",
    points: 10,
    category: "Present Perfect",
    hintRu: "Время Present Perfect, форма для 3-го лица."
  },
  {
    id: 4007,
    type: "grammar",
    difficulty: "beginner",
    question: "They ___ never visited London.",
    options: ["have", "has", "had", "are"],
    correctAnswer: "have",
    explanation: "Present Perfect с they → have + V3.",
    explanationRu: "Они никогда не были в Лондоне.",
    points: 10,
    category: "Present Perfect",
    hintRu: "Время Present Perfect, форма для множественного числа."
  },
  {
    id: 4008,
    type: "grammar",
    difficulty: "beginner",
    question: "I ___ just seen this movie.",
    options: ["have", "has", "had", "am"],
    correctAnswer: "have",
    explanation: "Present Perfect с I → have + V3.",
    explanationRu: "Я только что видел этот фильм.",
    points: 10,
    category: "Present Perfect",
    hintRu: "Время Present Perfect, форма для I."
  },
  {
    id: 4009,
    type: "grammar",
    difficulty: "beginner",
    question: "We ___ lived here for five years.",
    options: ["have", "has", "had", "are"],
    correctAnswer: "have",
    explanation: "Present Perfect с we → have + V3.",
    explanationRu: "Мы живём здесь уже пять лет.",
    points: 10,
    category: "Present Perfect",
    hintRu: "Время Present Perfect с we."
  },
  {
    id: 4010,
    type: "grammar",
    difficulty: "beginner",
    question: "He ___ never eaten sushi.",
    options: ["has", "have", "had", "is"],
    correctAnswer: "has",
    explanation: "Present Perfect с he → has + V3.",
    explanationRu: "Он никогда не ел суши.",
    points: 10,
    category: "Present Perfect",
    hintRu: "Время Present Perfect, форма для 3-го лица."
  },

  // --- Past Continuous ---
  {
    id: 4011,
    type: "grammar",
    difficulty: "beginner",
    question: "I ___ watching TV at 8 PM yesterday.",
    options: ["was", "were", "am", "is"],
    correctAnswer: "was",
    explanation: "Past Continuous — was/were + V-ing.",
    explanationRu: "Я смотрел телевизор вчера в 8 вечера.",
    points: 10,
    category: "Past Continuous",
    hintRu: "Past Continuous, форма для I."
  },
  {
    id: 4012,
    type: "grammar",
    difficulty: "beginner",
    question: "They ___ playing football when it started to rain.",
    options: ["was", "were", "are", "is"],
    correctAnswer: "were",
    explanation: "Past Continuous с they → were + V-ing.",
    explanationRu: "Они играли в футбол, когда начался дождь.",
    points: 10,
    category: "Past Continuous",
    hintRu: "Past Continuous, форма для множественного числа."
  },
  {
    id: 4013,
    type: "grammar",
    difficulty: "beginner",
    question: "She ___ cooking when I called her.",
    options: ["was", "were", "is", "are"],
    correctAnswer: "was",
    explanation: "Past Continuous с she → was + V-ing.",
    explanationRu: "Она готовила, когда я позвонил.",
    points: 10,
    category: "Past Continuous",
    hintRu: "Past Continuous, форма для she."
  },
  {
    id: 4014,
    type: "grammar",
    difficulty: "beginner",
    question: "We ___ studying while they were talking.",
    options: ["was", "were", "is", "are"],
    correctAnswer: "were",
    explanation: "Past Continuous с we → were + V-ing.",
    explanationRu: "Мы занимались, пока они разговаривали.",
    points: 10,
    category: "Past Continuous",
    hintRu: "Past Continuous, форма для we."
  },
  {
    id: 4015,
    type: "grammar",
    difficulty: "beginner",
    question: "He ___ sleeping when the phone rang.",
    options: ["was", "were", "is", "are"],
    correctAnswer: "was",
    explanation: "Past Continuous с he → was + V-ing.",
    explanationRu: "Он спал, когда зазвонил телефон.",
    points: 10,
    category: "Past Continuous",
    hintRu: "Past Continuous, форма для he."
  }
];





