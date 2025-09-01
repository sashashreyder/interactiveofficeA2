export type Difficulty = "beginner" | "intermediate";
export type QuestionType = "vocabulary" | "grammar" | "critical_thinking";

export interface GameState {
  currentMode: "main" | "vocabulary" | "grammar" | "critical_thinking" | "communication" | "boss" | "client";
  score: number;
  level: number;
  experience: number;
  totalQuestions: number;
  correctAnswers: number;
}

export interface Question {
    id: number;
    type: "vocabulary" | "grammar" | "critical_thinking";
    difficulty: "beginner" | "intermediate";
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    explanationRu: string;
    points: number;
    category: string;
    hintRu?: string; 
  }
  