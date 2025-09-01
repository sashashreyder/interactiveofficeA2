import type { Question } from "../types";

export const criticalThinkingQuestions: Question[] = [
  {
    id: 401,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Client says: 'The service is slow'. What do you answer?",
    options: [
      "Sorry, we will improve.",
      "It is not my problem.",
      "Say nothing.",
      "Go home."
    ],
    correctAnswer: "Sorry, we will improve.",
    explanation: "Future Simple показывает обещание.",
    explanationRu: "Извинись и пообещай улучшить: «Мы улучшим».",
    points: 10,
    category: "Customer",
    hintRu: "Жалоба → извинись + обещай (will)."
  },
  {
    id: 402,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "You are late to a meeting. What do you say?",
    options: [
      "Sorry, I was waiting for the bus.",
      "Nothing.",
      "Talk loud.",
      "Skip meeting."
    ],
    correctAnswer: "Sorry, I was waiting for the bus.",
    explanation: "Past Continuous описывает процесс в прошлом.",
    explanationRu: "Я ждал автобус (и поэтому опоздал).",
    points: 10,
    category: "Meeting",
    hintRu: "Процесс в прошлом, was/were + V-ing."
  },
  {
    id: 403,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Boss asks: 'Did you finish the report?'. You didn’t. What do you say?",
    options: [
      "Not yet. I have worked on it.",
      "Nothing.",
      "Say 'Impossible'.",
      "Ignore."
    ],
    correctAnswer: "Not yet. I have worked on it.",
    explanation: "Present Perfect показывает, что работа началась и ещё продолжается.",
    explanationRu: "Ещё нет. Я работал над этим (и продолжаю).",
    points: 10,
    category: "Work",
    hintRu: "Используй Present Perfect: have/has + V3."
  },
  {
    id: 404,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Colleague: 'Can you help me now?'. You are busy. What do you say?",
    options: [
      "I can help later.",
      "Ignore.",
      "No, never.",
      "Stop asking."
    ],
    correctAnswer: "I can help later.",
    explanation: "Can показывает возможность.",
    explanationRu: "Я могу помочь позже.",
    points: 10,
    category: "Teamwork",
    hintRu: "Используй can + действие."
  },
  {
    id: 405,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Office floor is wet. What do you do?",
    options: [
      "Tell the manager.",
      "Play.",
      "Say nothing.",
      "Run."
    ],
    correctAnswer: "Tell the manager.",
    explanation: "Безопасность важнее всего.",
    explanationRu: "Сообщи менеджеру или персоналу.",
    points: 10,
    category: "Office",
    hintRu: "Опасность → сообщи."
  },
  {
    id: 406,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Client speaks very fast. What do you say?",
    options: [
      "Could you speak more slowly, please?",
      "Yes, yes.",
      "Nothing.",
      "Bye."
    ],
    correctAnswer: "Could you speak more slowly, please?",
    explanation: "Вежливая просьба с could.",
    explanationRu: "Скажи: «Могли бы вы говорить медленнее?».",
    points: 10,
    category: "Customer",
    hintRu: "Вежливо → Could you…?"
  },
  {
    id: 407,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Cashier gives extra money. What do you say?",
    options: [
      "Sorry, it is too much.",
      "Keep it.",
      "Smile.",
      "Leave fast."
    ],
    correctAnswer: "Sorry, it is too much.",
    explanation: "Будь честным и скажи, что денег слишком много.",
    explanationRu: "Извинись и верни лишнее.",
    points: 10,
    category: "Shopping",
    hintRu: "Получил лишние деньги."
  },
  {
    id: 408,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Teammate made a mistake in document. What do you do?",
    options: [
      "Fix it and tell politely.",
      "Public blame.",
      "Delete doc.",
      "Say nothing."
    ],
    correctAnswer: "Fix it and tell politely.",
    explanation: "Исправь ошибку и вежливо сообщи.",
    explanationRu: "Так команда работает лучше.",
    points: 10,
    category: "Teamwork",
    hintRu: "Ошибка → исправь + предупреди."
  }
];
