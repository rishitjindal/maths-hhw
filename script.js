// Same JavaScript you confirmed working last time
const flashcards = [
    { question: "Identify the degree: 3x³ - 5x + 2", hint: "Check the highest power of x.", options: ["1", "2", "3", "0"], answer: [2] },
    { question: "Factorize: x² - 9", hint: "It's a difference of squares.", options: ["(x - 3)(x + 3)", "x(x - 9)", "(x - 9)(x + 1)", "x² + 9"], answer: [0] },
    { question: "Which is a linear polynomial?", hint: "It has degree 1.", options: ["x² + 1", "x + 5", "x³ - 2", "7"], answer: [1] },
    { question: "Simplify: (2x + 3) + (x - 5)", hint: "Combine like terms.", options: ["3x - 2", "x - 2", "2x - 2", "3x + 3"], answer: [0] },
    { question: "Classify: x² + 5x + 6", hint: "Look at the highest degree.", options: ["Linear", "Quadratic", "Cubic", "Constant"], answer: [1] },
    { question: "Add: (3x² + x) + (x² - 2x)", hint: "Add coefficients of like terms.", options: ["4x² - x", "2x² - x", "4x² + x", "x² - x"], answer: [0] },
    { question: "Subtract: (4x - 1) - (2x + 3)", hint: "Distribute the minus.", options: ["2x - 4", "2x + 2", "6x + 2", "2x - 2"], answer: [0] },
    { question: "Degree of constant polynomial 7", hint: "Constants have special degree.", options: ["1", "0", "Undefined", "2"], answer: [1] },
    { question: "Which polynomial is cubic?", hint: "Degree 3 means cubic.", options: ["x² + 4", "x³ - 2x", "x - 7", "5"], answer: [1] },
    { question: "Which of the following is NOT a polynomial?", hint: "Polynomials can't have variables in denominators or roots.", options: ["x² + 1", "1/x", "x³ - x", "3x + 7"], answer: [1] },
    { question: "Select all quadratic expressions:", hint: "Degree 2 means quadratic.", options: ["x² + 1", "x + 5", "x² - 4x", "x³ - x"], answer: [0, 2] },
    { question: "Select all that are binomials:", hint: "Binomial has 2 terms.", options: ["x + 1", "x² + 3x + 2", "x² - 4", "3x"], answer: [0, 2] },
    { question: "Select the polynomials of degree 1:", hint: "Degree 1 = linear.", options: ["x² + 5", "3x + 2", "4x", "7"], answer: [1, 2] },
    { question: "Select expressions with like terms:", hint: "Like terms = same variable and power.", options: ["2x and 3x", "x² and 4x", "5 and -2", "x and x³"], answer: [0, 2] },
    { question: "Select polynomials with degree > 2:", hint: "Check the exponent.", options: ["x³ + x²", "x + 1", "x² + 3x", "x⁴ - 5"], answer: [0, 3] },
];

let score = 0;
let asked = [];
let current = -1;
let selected = [];
let showAnswer = false;

const questionButtonsDiv = document.getElementById('questionButtons');
const quizArea = document.getElementById('quizArea');

flashcards.forEach((_, index) => {
    const btn = document.createElement('button');
    btn.textContent = `Q${index + 1}`;
    btn.disabled = true;
    btn.id = `btn-${index}`;
    questionButtonsDiv.appendChild(btn);
});

function showQuestion() {
    quizArea.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'card';

    const questionText = document.createElement('p');
    questionText.textContent = `Q${current + 1}: ${flashcards[current].question}`;

    const hintButton = document.createElement('button');
    hintButton.textContent = 'Show Hint';
    hintButton.addEventListener('click', () => {
        const hintDiv = document.createElement('div');
        hintDiv.className = 'hint';
        hintDiv.textContent = flashcards[current].hint;
        card.appendChild(hintDiv);
        hintButton.disabled = true;
    });

    card.appendChild(questionText);
    card.appendChild(hintButton);

    flashcards[current].options.forEach((opt, i) => {
        const optBtn = document.createElement('button');
        optBtn.textContent = opt;
        optBtn.className = 'option-button';
        optBtn.addEventListener('click', () => {
            if (!showAnswer) {
                if (!selected.includes(i)) {
                    selected.push(i);
                    optBtn.classList.add('active');
                } else {
                    selected = selected.filter(x => x !== i);
                    optBtn.classList.remove('active');
                }
            }
        });
        card.appendChild(optBtn);
    });

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.addEventListener('click', () => {
        const correctAnswers = flashcards[current].answer;
        const isCorrect = correctAnswers.length === selected.length && selected.every(val => correctAnswers.includes(val));
        if (isCorrect) score += 10;
        showAnswer = true;
        selected = [];
        document.getElementById(`btn-${current}`).classList.add('active');
        submitBtn.disabled = true;
    });

    card.appendChild(submitBtn);

    quizArea.appendChild(card);
}

function rollDice() {
    if (asked.length >= flashcards.length) return;

    const available = flashcards.map((_, i) => i).filter(i => !asked.includes(i));
    const next = available[Math.floor(Math.random() * available.length)];

    current = next;
    asked.push(next);
    showAnswer = false;
    selected = [];

    showQuestion();
}

document.getElementById('rollButton').addEventListener('click', rollDice);
