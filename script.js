const flashcards = [
  { question: "Identify the degree: 3x³ - 5x + 2", hint: "Check the highest power of x.", options: ["1", "2", "3", "0"], answer: [2] },
  { question: "Factorize: x² - 9", hint: "It's a difference of squares.", options: ["(x - 3)(x + 3)", "x(x - 9)", "(x - 9)(x + 1)", "x² + 9"], answer: [0] },
  { question: "Which is a linear polynomial?", hint: "It has degree 1.", options: ["x² + 1", "x + 5", "x³ - 2", "7"], answer: [1] },
];

let score = 0;
let asked = [];
let current = -1;

document.getElementById('rollDiceBtn').addEventListener('click', rollDice);

function rollDice() {
  if (asked.length === flashcards.length) {
    showResults();
    return;
  }
  let available = flashcards.map((_, i) => i).filter(i => !asked.includes(i));
  current = available[Math.floor(Math.random() * available.length)];
  asked.push(current);
  showQuestion(current);
}

function showQuestion(index) {
  const card = flashcards[index];
  const container = document.getElementById("quiz");
  container.innerHTML = `
    <div class="card">
      <p><strong>Q${index + 1}:</strong> ${card.question}</p>
      <button onclick="toggleHint()">💡 Show Hint</button>
      <div id="hint" class="hint" style="display:none">${card.hint}</div>
      ${card.options.map((opt, i) => `
        <div>
          <input type="checkbox" id="opt${i}" name="opt" value="${i}" />
          <label for="opt${i}">${opt}</label>
        </div>
      `).join('')}
      <button onclick="submitAnswer()">Submit Answer</button>
    </div>
  `;
}

function toggleHint() {
  const hintBox = document.getElementById("hint");
  hintBox.style.display = hintBox.style.display === "none" ? "block" : "none";
}

function submitAnswer() {
  const card = flashcards[current];
  const selected = Array.from(document.querySelectorAll('input[name=opt]:checked')).map(input => parseInt(input.value));
  const correct = card.answer;

  const correctSet = new Set(correct);
  const selectedSet = new Set(selected);

  const isCorrect = correctSet.size === selectedSet.size && [...correctSet].every(val => selectedSet.has(val));

  if (isCorrect) {
    alert("✅ Correct! +10 points");
    score += 10;
  } else {
    alert("❌ Incorrect. Correct answer: " + correct.map(i => card.options[i]).join(", "));
  }

  document.getElementById("quiz").innerHTML = "";
}

function showResults() {
  document.getElementById("quiz").innerHTML = `<h2>🎉 Quiz Complete! Your score: ${score}</h2>`;
}
