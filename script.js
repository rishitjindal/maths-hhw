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

let score = 0, current = -1, asked = [], selected = [], answers = [];

const rollButton = document.getElementById('rollButton');
const questionGrid = document.getElementById('questionGrid');
const instructionCard = document.getElementById('instructionCard');
const questionCard = document.getElementById('questionCard');
const resultCard = document.getElementById('resultCard');
const questionText = document.getElementById('questionText');
const hintButton = document.getElementById('hintButton');
const hintText = document.getElementById('hintText');
const optionsDiv = document.getElementById('options');
const submitButton = document.getElementById('submitButton');
const finalScore = document.getElementById('finalScore');
const summaryDiv = document.getElementById('summary');

flashcards.forEach((_, i) => {
  const btn = document.createElement('button');
  btn.textContent = `Q${i + 1}`;
  btn.disabled = true;
  btn.id = `q${i}`;
  questionGrid.appendChild(btn);
});

rollButton.onclick = () => {
  if (asked.length >= flashcards.length) {
    showResults();
    return;
  }

  let available = flashcards.map((_, i) => i).filter(i => !asked.includes(i));
  current = available[Math.floor(Math.random() * available.length)];
  asked.push(current);

  document.querySelectorAll('.grid button').forEach((b, i) => {
    b.classList.toggle('active', i === current);
  });

  instructionCard.style.display = 'none';
  questionCard.style.display = 'block';
  showQuestion();
};

function showQuestion() {
  const card = flashcards[current];
  questionText.textContent = `Q${current + 1}: ${card.question}`;
  hintText.style.display = 'none';
  hintText.textContent = `Hint: ${card.hint}`;
  selected = [];
  optionsDiv.innerHTML = '';

  card.options.forEach((opt, i) => {
    const label = document.createElement('label');
    label.className = 'option';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = i;
    input.onclick = () => {
      if (current < 10) {
        selected = [i];
        document.querySelectorAll('#options input').forEach(inp => {
          if (inp !== input) inp.checked = false;
        });
      } else {
        if (input.checked) selected.push(i);
        else selected = selected.filter(val => val !== i);
      }
    };
    label.appendChild(input);
    label.appendChild(document.createTextNode(opt));
    optionsDiv.appendChild(label);
  });
}

hintButton.onclick = () => {
  hintText.style.display = hintText.style.display === 'none' ? 'block' : 'none';
};

submitButton.onclick = () => {
  const correct = flashcards[current].answer;
  if (correct.length === selected.length && selected.every(val => correct.includes(val))) {
    score += 10;
  }
  answers[current] = selected;
  if (asked.length >= flashcards.length) {
    showResults();
  } else {
    questionCard.style.display = 'none';
  }
};

function showResults() {
  rollButton.style.display = 'none';
  questionCard.style.display = 'none';
  instructionCard.style.display = 'none';
  resultCard.style.display = 'block';
  finalScore.textContent = score;

  summaryDiv.innerHTML = '';
  flashcards.forEach((card, idx) => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>Q${idx + 1}:</strong> ${card.question}<br>`;
    card.options.forEach((opt, i) => {
      if (card.answer.includes(i)) div.innerHTML += `<span style="color:green;">✔️ ${opt}</span><br>`;
      else if (answers[idx] && answers[idx].includes(i)) div.innerHTML += `<span style="color:red;">❌ ${opt}</span><br>`;
    });
    summaryDiv.appendChild(div);
    summaryDiv.appendChild(document.createElement('hr'));
  });
}
