import React, { useState } from "react";
import "./App.css";

import QuizGame from "./components/QuizGame";
import BossChallenge from "./components/BossChallenge";
import ClientMeeting from "./components/ClientMeeting";
// import ProgressTracker from "./components/ProgressTracker";
import ExerciseSelector from "./components/ExerciseSelector";

import Header from "./components/Header";
import MainCards from "./components/MainCards";
import HelpSection from "./components/HelpSection";
import CommunicationMenu from "./components/CommunicationMenu";

import type { GameState } from "./types";
import { criticalThinkingQuestions } from "./data/critical";
import { vocabulary1 } from "./data/vocabulary1";
import { vocabulary2 } from "./data/vocabulary2";
import { vocabulary3 } from "./data/vocabulary3";
import { grammar1 } from "./data/grammar1";
import { grammar2 } from "./data/grammar2";
import { grammar3 } from "./data/grammar3";

type VocabKey = "vocab1" | "vocab2" | "vocab3";
type GrammarKey = "grammar1" | "grammar2" | "grammar3";

const ContentWrapper: React.FC<{ children: React.ReactNode; narrow?: boolean }> = ({ children, narrow }) => (
  <div className="px-4">
    <div className={`mx-auto mt-6 ${narrow ? "max-w-[800px]" : "max-w-[1000px]"}`}>
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentMode: "main",
    score: 0,
    level: 1,
    experience: 0,
    totalQuestions: 0,
    correctAnswers: 0,
  });

  const [selectedVocab, setSelectedVocab] = useState<VocabKey | null>(null);
  const [selectedGrammar, setSelectedGrammar] = useState<GrammarKey | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  const handleAnswer = (isCorrect: boolean, points: number) => {
    const gained = isCorrect ? points : 0;
    setGameState(prev => {
      const experience = prev.experience + gained;
      return {
        ...prev,
        score: prev.score + gained,
        level: Math.floor(experience / 100) + 1,
        experience,
        totalQuestions: prev.totalQuestions + 1,
        correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      };
    });
  };

  const resetGame = () => {
    setGameState({
      currentMode: "main",
      score: 0,
      level: 1,
      experience: 0,
      totalQuestions: 0,
      correctAnswers: 0,
    });
    setSelectedVocab(null);
    setSelectedGrammar(null);
  };

  const getVocabQuestions = () => {
    switch (selectedVocab) {
      case "vocab1": return vocabulary1;
      case "vocab2": return vocabulary2;
      case "vocab3": return vocabulary3;
      default: return [];
    }
  };

  const getGrammarQuestions = () => {
    switch (selectedGrammar) {
      case "grammar1": return grammar1;
      case "grammar2": return grammar2;
      case "grammar3": return grammar3;
      default: return [];
    }
  };

  const renderContent = () => {
    if (showHelp) return <HelpSection onClose={() => setShowHelp(false)} />;

    switch (gameState.currentMode) {
      case "vocabulary":
        if (!selectedVocab) {
          return (
<ContentWrapper>
  <ExerciseSelector
    title="Выберите упражнение по лексике (A0)"
    items={[
      { key: "vocab1", label: "Vocabulary 1 — Introduction to Business Sector (A0)", icon: "📘" },
      { key: "vocab2", label: "Vocabulary 2 — Instrumentary of a Manager & Manager’s Activities (A0)", icon: "📗" },
      { key: "vocab3", label: "Vocabulary 3 — Telling about Previous Work Experience (A0)", icon: "📙" },
    ]}
    onSelect={(key: VocabKey) => setSelectedVocab(key)}
    onBack={() => setGameState(p => ({ ...p, currentMode: "main" }))}
  />
</ContentWrapper>
          );
        }
        return (
          <ContentWrapper narrow>
            <QuizGame
              key={`vocab-${selectedVocab}`}
              questions={getVocabQuestions()}
              onAnswer={handleAnswer}
              onBack={() => setSelectedVocab(null)}
            />
          </ContentWrapper>
        );

      case "grammar":
        if (!selectedGrammar) {
          return (
            <ContentWrapper>
  <ExerciseSelector
    title="Выберите упражнение по грамматике (A0)"
    items={[
      { key: "grammar1", label: "Grammar 1 — Personal pronouns & to be · Articles (a/an, the) · have/has · Possessives (A0)", icon: "✏️" },
      { key: "grammar2", label: "Grammar 2 — Present Simple · can/can’t · Prepositions at/on/in (A0)", icon: "✏️" },
      { key: "grammar3", label: "Grammar 3 — Basic questions (who/what/where/why) · Short answers · This/That/These/Those (A0)", icon: "✏️" },
    ]}
    onSelect={(key: GrammarKey) => setSelectedGrammar(key)}
    onBack={() => setGameState(p => ({ ...p, currentMode: "main" }))}
  />
</ContentWrapper>
          );
        }
        return (
          <ContentWrapper narrow>
            <QuizGame
              key={`grammar-${selectedGrammar}`}
              questions={getGrammarQuestions()}
              onAnswer={handleAnswer}
              onBack={() => setSelectedGrammar(null)}
            />
          </ContentWrapper>
        );

      case "critical_thinking":
        return (
          <ContentWrapper narrow>
            <QuizGame
              key="critical"
              questions={criticalThinkingQuestions}
              onAnswer={handleAnswer}
              onBack={() => setGameState(p => ({ ...p, currentMode: "main" }))}
            />
          </ContentWrapper>
        );

      case "communication":
        return <CommunicationMenu setGameState={setGameState} />;

      case "boss":
        return (
          <ContentWrapper narrow>
            <BossChallenge
              onAnswer={handleAnswer}
              onBack={() => setGameState(p => ({ ...p, currentMode: "communication" }))}
            />
          </ContentWrapper>
        );

      case "client":
        return (
          <ContentWrapper narrow>
            <ClientMeeting
              onAnswer={handleAnswer}
              onBack={() => setGameState(p => ({ ...p, currentMode: "communication" }))}
            />
          </ContentWrapper>
        );

      default:
        return (
          <div className="max-w-[1000px] mx-auto px-4">
            <Header gameState={gameState} />
            <MainCards setGameState={setGameState} resetGame={resetGame} setShowHelp={setShowHelp} />
          </div>
        );
    }
  };

  return (
    <div className="app min-h-screen p-5 sm:p-6 md:p-8 relative text-white">
      <div className="bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="grid-overlay" />
      </div>
      {renderContent()}
    </div>
  );
};

export default App;


