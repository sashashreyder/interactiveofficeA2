import type { Question } from "../types";

export const grammar2: Question[] = [
  // --- Past Perfect ---
  {
    id: 4101,
    type: "grammar",
    difficulty: "beginner",
    question: "She ___ finished her homework before dinner.",
    options: ["had", "has", "have", "was"],
    correctAnswer: "had",
    explanation: "Past Perfect — had + V3.",
    explanationRu: "Она закончила домашку до ужина.",
    points: 10,
    category: "Past Perfect",
    hintRu: "Past Perfect: вспомогательный глагол один для всех лиц."
  },
  {
    id: 4102,
    type: "grammar",
    difficulty: "beginner",
    question: "They ___ left when I arrived.",
    options: ["had", "have", "has", "were"],
    correctAnswer: "had",
    explanation: "Past Perfect — действие произошло раньше другого.",
    explanationRu: "Они уже ушли, когда я приехал.",
    points: 10,
    category: "Past Perfect",
    hintRu: "Past Perfect: вспомогательный глагол had."
  },
  {
    id: 4103,
    type: "grammar",
    difficulty: "beginner",
    question: "After she ___ watched the film, she went to bed.",
    options: ["had", "has", "have", "was"],
    correctAnswer: "had",
    explanation: "Past Perfect в придаточных предложениях с after.",
    explanationRu: "После того как она посмотрела фильм, она легла спать.",
    points: 10,
    category: "Past Perfect",
    hintRu: "Союз after + Past Perfect."
  },
  {
    id: 4104,
    type: "grammar",
    difficulty: "beginner",
    question: "The train ___ left by the time we arrived.",
    options: ["had", "has", "have", "was"],
    correctAnswer: "had",
    explanation: "By the time часто употребляется с Past Perfect.",
    explanationRu: "Поезд уже ушёл к тому времени, как мы приехали.",
    points: 10,
    category: "Past Perfect",
    hintRu: "Подсказка: конструкция by the time."
  },
  {
    id: 4105,
    type: "grammar",
    difficulty: "beginner",
    question: "I ___ eaten before I went to school.",
    options: ["had", "have", "has", "was"],
    correctAnswer: "had",
    explanation: "Past Perfect подчёркивает порядок действий.",
    explanationRu: "Я поел до того, как пошёл в школу.",
    points: 10,
    category: "Past Perfect",
    hintRu: "Past Perfect: вспомогательный глагол had."
  },

  // --- Modal Verbs: May / Might ---
  {
    id: 4106,
    type: "grammar",
    difficulty: "beginner",
    question: "It ___ rain tomorrow.",
    options: ["may", "might", "can", "must"],
    correctAnswer: "may",
    explanation: "May выражает вероятность (50–70%).",
    explanationRu: "Завтра может пойти дождь.",
    points: 10,
    category: "Modal Verbs: May/Might",
    hintRu: "Вероятность выше, чем might."
  },
  {
    id: 4107,
    type: "grammar",
    difficulty: "beginner",
    question: "She ___ come to the party, but I'm not sure.",
    options: ["may", "might", "must", "can"],
    correctAnswer: "might",
    explanation: "Might выражает меньшую вероятность (~30–50%).",
    explanationRu: "Она может прийти на вечеринку, но я не уверен.",
    points: 10,
    category: "Modal Verbs: May/Might",
    hintRu: "Более слабая вероятность, чем may."
  },
  {
    id: 4108,
    type: "grammar",
    difficulty: "beginner",
    question: "___ I ask you a question?",
    options: ["May", "Might", "Must", "Should"],
    correctAnswer: "May",
    explanation: "May вежливо используется для просьбы или разрешения.",
    explanationRu: "Можно я задам вам вопрос?",
    points: 10,
    category: "Modal Verbs: May/Might",
    hintRu: "Формальное разрешение."
  },
  {
    id: 4109,
    type: "grammar",
    difficulty: "beginner",
    question: "He ___ not be at home now.",
    options: ["may", "might", "must", "can"],
    correctAnswer: "may",
    explanation: "May not — выражает возможность отрицательную.",
    explanationRu: "Возможно, его сейчас нет дома.",
    points: 10,
    category: "Modal Verbs: May/Might",
    hintRu: "Вероятность отсутствия."
  },
  {
    id: 4110,
    type: "grammar",
    difficulty: "beginner",
    question: "They ___ be late, because the traffic is heavy.",
    options: ["may", "might", "must", "can"],
    correctAnswer: "might",
    explanation: "Might выражает вероятность опоздания.",
    explanationRu: "Они могут опоздать, потому что сильные пробки.",
    points: 10,
    category: "Modal Verbs: May/Might",
    hintRu: "Низкая вероятность (30–50%)."
  },

  // --- Modal Verbs: Have to ---
  {
    id: 4111,
    type: "grammar",
    difficulty: "beginner",
    question: "I ___ wear a uniform at work.",
    options: ["have to", "has to", "must", "had to"],
    correctAnswer: "have to",
    explanation: "Have to выражает обязанность (I/you/we/they → have to).",
    explanationRu: "Я должен носить форму на работе.",
    points: 10,
    category: "Modal Verbs: Have to",
    hintRu: "Внешняя необходимость, форма для I."
  },
  {
    id: 4112,
    type: "grammar",
    difficulty: "beginner",
    question: "She ___ finish the report today.",
    options: ["have to", "has to", "must", "had to"],
    correctAnswer: "has to",
    explanation: "He/She/It → has to.",
    explanationRu: "Ей нужно закончить отчёт сегодня.",
    points: 10,
    category: "Modal Verbs: Have to",
    hintRu: "Форма для she."
  },
  {
    id: 4113,
    type: "grammar",
    difficulty: "beginner",
    question: "We ___ pay the fine tomorrow.",
    options: ["have to", "has to", "must", "will have to"],
    correctAnswer: "will have to",
    explanation: "Будущее время — will have to.",
    explanationRu: "Мы должны будем заплатить штраф завтра.",
    points: 10,
    category: "Modal Verbs: Have to",
    hintRu: "Форма в будущем времени."
  },
  {
    id: 4114,
    type: "grammar",
    difficulty: "beginner",
    question: "I ___ work late yesterday.",
    options: ["have to", "has to", "had to", "must"],
    correctAnswer: "had to",
    explanation: "Прошедшее время — had to.",
    explanationRu: "Мне пришлось работать допоздна вчера.",
    points: 10,
    category: "Modal Verbs: Have to",
    hintRu: "Форма в прошедшем времени."
  },
  {
    id: 4115,
    type: "grammar",
    difficulty: "beginner",
    question: "You ___ come if you are busy.",
    options: ["don’t have to", "must not", "can’t", "shouldn’t"],
    correctAnswer: "don’t have to",
    explanation: "Don’t have to = не обязательно.",
    explanationRu: "Тебе не обязательно приходить, если ты занят.",
    points: 10,
    category: "Modal Verbs: Have to",
    hintRu: "Отрицательная форма: отсутствие необходимости."
  }
];


