import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const flashcards = [
  {
    question: "Identify the degree: 3x³ - 5x + 2",
    hint: "Check the highest power of x.",
    options: ["1", "2", "3", "0"],
    answer: [2],
  },
  {
    question: "Factorize: x² - 9",
    hint: "It's a difference of squares.",
    options: ["(x - 3)(x + 3)", "x(x - 9)", "(x - 9)(x + 1)", "x² + 9"],
    answer: [0],
  },
  {
    question: "Which is a linear polynomial?",
    hint: "It has degree 1.",
    options: ["x² + 1", "x + 5", "x³ - 2", "7"],
    answer: [1],
  },
  {
    question: "Simplify: (2x + 3) + (x - 5)",
    hint: "Combine like terms.",
    options: ["3x - 2", "x - 2", "2x - 2", "3x + 3"],
    answer: [0],
  },
  {
    question: "Classify: x² + 5x + 6",
    hint: "Look at the highest degree.",
    options: ["Linear", "Quadratic", "Cubic", "Constant"],
    answer: [1],
  },
  {
    question: "Add: (3x² + x) + (x² - 2x)",
    hint: "Add coefficients of like terms.",
    options: ["4x² - x", "2x² - x", "4x² + x", "x² - x"],
    answer: [0],
  },
  {
    question: "Subtract: (4x - 1) - (2x + 3)",
    hint: "Distribute the minus.",
    options: ["2x - 4", "2x + 2", "6x + 2", "2x - 2"],
    answer: [0],
  },
  {
    question: "Degree of constant polynomial 7",
    hint: "Constants have special degree.",
    options: ["1", "0", "Undefined", "2"],
    answer: [1],
  },
  {
    question: "Which polynomial is cubic?",
    hint: "Degree 3 means cubic.",
    options: ["x² + 4", "x³ - 2x", "x - 7", "5"],
    answer: [1],
  },
  {
    question: "Which of the following is NOT a polynomial?",
    hint: "Polynomials can't have variables in denominators or roots.",
    options: ["x² + 1", "1/x", "x³ - x", "3x + 7"],
    answer: [1],
  },
  {
    question: "Select all quadratic expressions:",
    hint: "Degree 2 means quadratic.",
    options: ["x² + 1", "x + 5", "x² - 4x", "x³ - x"],
    answer: [0, 2],
  },
  {
    question: "Select all that are binomials:",
    hint: "Binomial has 2 terms.",
    options: ["x + 1", "x² + 3x + 2", "x² - 4", "3x"],
    answer: [0, 2],
  },
  {
    question: "Select the polynomials of degree 1:",
    hint: "Degree 1 = linear.",
    options: ["x² + 5", "3x + 2", "4x", "7"],
    answer: [1, 2],
  },
  {
    question: "Select expressions with like terms:",
    hint: "Like terms = same variable and power.",
    options: ["2x and 3x", "x² and 4x", "5 and -2", "x and x³"],
    answer: [0, 2],
  },
  {
    question: "Select polynomials with degree > 2:",
    hint: "Check the exponent.",
    options: ["x³ + x²", "x + 1", "x² + 3x", "x⁴ - 5"],
    answer: [0, 3],
  }
];

export default function PolynomialQuiz() {
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(-1);
  const [selected, setSelected] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [asked, setAsked] = useState([]);
  const [rolling, setRolling] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!showResult && asked.length >= flashcards.length && current !== -1) {
      setShowResult(true);
    }
  }, [asked, showResult, current]);

  const isMultiple = current >= 10;

  const handleOptionClick = (index) => {
    if (!isMultiple) {
      setSelected([index]);
    } else {
      setSelected((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    }
  };

  const submitAnswer = () => {
    const correctAnswers = flashcards[current].answer;
    const isCorrect =
      correctAnswers.length === selected.length &&
      selected.every((val) => correctAnswers.includes(val));

    if (isCorrect) setScore(score + 10);
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);
    setShowAnswer(true);
  };

  const rollDice = () => {
    if (flashcards.length === 0 || asked.length >= flashcards.length) {
      setShowResult(true);
      return;
    }
    setRolling(true);
    setTimeout(() => {
      const available = flashcards.map((_, i) => i).filter(i => !asked.includes(i));
      if (available.length === 0) {
        setShowResult(true);
        return;
      }
      const next = available[Math.floor(Math.random() * available.length)];
      setCurrent(next);
      setAsked(prev => [...prev, next]);
      setShowHint(false);
      setSelected([]);
      setShowAnswer(false);
      setRolling(false);
    }, 700);
  };

  if (flashcards.length === 0) {
    return (
      <div className="p-6 max-w-xl mx-auto text-center">
        <h1 className="text-2xl font-bold">No Questions Available</h1>
        <p className="text-gray-600">Please add questions to start the game.</p>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="p-6 max-w-xl mx-auto text-center">
        <div className="text-xl font-medium mb-4">
          Quiz Complete! 🎉 Your final score is <strong>{score}</strong>.
        </div>
        <div className="text-left space-y-4">
          {flashcards.map((card, index) => (
            <Card key={index} className="bg-white border">
              <CardContent className="p-4">
                <p className="font-semibold">Q{index + 1}: {card.question}</p>
                {card.options.map((opt, i) => {
                  const isCorrect = card.answer.includes(i);
                  const isSelected = answers[index]?.includes(i);
                  return (
                    <p
                      key={i}
                      className={`pl-4 ${
                        isCorrect ? "text-green-600 font-semibold" : ""
                      } ${
                        isSelected && !isCorrect ? "text-red-600" : ""
                      }`}
                    >
                      {isSelected ? "👉 " : ""}{opt}
                    </p>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-2">🧠 Polynomial Quiz Game</h1>

      <div className="grid grid-cols-5 gap-2 mb-6">
        {flashcards.map((_, index) => (
          <Button key={index} variant={current === index ? "default" : "outline"} className="text-xs" disabled>
            Q{index + 1}
          </Button>
        ))}
      </div>

      <motion.div animate={{ rotate: rolling ? 360 : 0 }} transition={{ duration: 0.5 }}>
        <Button onClick={rollDice} className="mb-4" disabled={rolling}>
          🎲 {rolling ? "Rolling..." : "Roll Dice to Choose a Question"}
        </Button>
      </motion.div>

      {current === -1 && (
        <Card className="bg-blue-50 border-blue-200 border mb-6">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>This quiz contains 15 questions based on polynomials.</li>
              <li>The first 10 questions are MCQs, and the last 5 are optional multiple-choice.</li>
              <li>Click the dice to get a random question. Each correct question gives 10 points.</li>
              <li>Your score and solution summary will appear at the end.</li>
            </ul>
          </CardContent>
        </Card>
      )}

      {current !== -1 && current < flashcards.length && (
        <Card className="bg-gray-100">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-1">
                <p className="text-lg font-medium mb-2">Q{current + 1}: {flashcards[current].question}</p>
              </div>
              <div className="w-full md:w-1/2">
                <Button
                  variant="outline"
                  className="text-sm mb-2"
                  onClick={() => setShowHint(!showHint)}
                >
                  {showHint ? "Hide Hint" : "Show Hint"}
                </Button>
                {showHint && (
                  <div className="bg-yellow-100 text-sm text-left p-3 rounded-md border border-yellow-300">
                    <strong>Hint:</strong> {flashcards[current].hint}
                  </div>
                )}
              </div>
            </div>
            {flashcards[current].options.map((opt, i) => (
              <Button
                key={i}
                onClick={() => handleOptionClick(i)}
                variant={selected.includes(i) ? "default" : "outline"}
                disabled={showAnswer}
                className="block w-full my-2"
              >
                {opt}
              </Button>
            ))}
            {!showAnswer ? (
              <Button onClick={submitAnswer} className="mt-4">Submit</Button>
            ) : (
              <Button onClick={rollDice} className="mt-4">Next (Roll Dice)</Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
