const categories = [
    "Core Concepts",
    "Types of Selection",
    "Population Genetics",
    "Selection in Action",
    "Fun and Songs"
];

const questions = [
    // Core Concepts
    {
        question: "Darwin proposed this mechanism as the main driver of adaptive evolutionary change",
        answer: "What is natural selection?",
        options: ["What is genetic drift?", "What is natural selection?", "What is mutation pressure?", "What is artificial selection?"],
        value: 100,
        category: "Core Concepts"
    },
    {
        question: "Traits that increase survival or reproduction in a specific environment are called",
        answer: "What are adaptations?",
        options: ["What are homologous traits?", "What are adaptations?", "What are vestigial structures?", "What are mutations?"],
        value: 200,
        category: "Core Concepts"
    },
    {
        question: "This phrase describes when individuals with favorable traits leave more offspring",
        answer: "What is differential reproductive success?",
        options: ["What is gene flow?", "What is differential reproductive success?", "What is stabilizing selection?", "What is random mating?"],
        value: 300,
        category: "Core Concepts"
    },
    {
        question: "Natural selection can only act on this source of differences within a population",
        answer: "What is heritable variation?",
        options: ["What is random chance alone?", "What is acquired traits?", "What is heritable variation?", "What is migration?"],
        value: 400,
        category: "Core Concepts"
    },
    {
        question: "This term describes how well an organism survives and reproduces in its environment",
        answer: "What is fitness?",
        options: ["What is fitness?", "What is momentum?", "What is dominance?", "What is divergence?"],
        value: 500,
        category: "Core Concepts"
    },

    // Types of Selection
    {
        question: "When one extreme phenotype is favored, this pattern occurs",
        answer: "What is directional selection?",
        options: ["What is stabilizing selection?", "What is directional selection?", "What is disruptive selection?", "What is sexual selection?"],
        value: 100,
        category: "Types of Selection"
    },
    {
        question: "When intermediate phenotypes are favored and extremes selected against, this occurs",
        answer: "What is stabilizing selection?",
        options: ["What is disruptive selection?", "What is balancing selection?", "What is stabilizing selection?", "What is directional selection?"],
        value: 200,
        category: "Types of Selection"
    },
    {
        question: "When both extreme phenotypes are favored over intermediates, this occurs",
        answer: "What is disruptive selection?",
        options: ["What is disruptive selection?", "What is stabilizing selection?", "What is neutral selection?", "What is directional selection?"],
        value: 300,
        category: "Types of Selection"
    },
    {
        question: "This form of natural selection favors traits that improve mating success",
        answer: "What is sexual selection?",
        options: ["What is kin selection?", "What is sexual selection?", "What is artificial selection?", "What is balancing selection?"],
        value: 400,
        category: "Types of Selection"
    },
    {
        question: "In this type of sexual selection, one sex chooses mates based on specific traits",
        answer: "What is intersexual selection?",
        options: ["What is intrasexual selection?", "What is disruptive selection?", "What is intersexual selection?", "What is drift selection?"],
        value: 500,
        category: "Types of Selection"
    },

    // Population Genetics
    {
        question: "Evolution is often defined as a change in this over time in a population",
        answer: "What is allele frequency?",
        options: ["What is phenotype size?", "What is allele frequency?", "What is species richness?", "What is body mass?"],
        value: 100,
        category: "Population Genetics"
    },
    {
        question: "This principle predicts allele frequencies will remain constant if no evolutionary forces act",
        answer: "What is Hardy-Weinberg equilibrium?",
        options: ["What is punctuated equilibrium?", "What is founder equilibrium?", "What is Hardy-Weinberg equilibrium?", "What is adaptive equilibrium?"],
        value: 200,
        category: "Population Genetics"
    },
    {
        question: "Chance changes in allele frequencies, strongest in small populations, are called",
        answer: "What is genetic drift?",
        options: ["What is gene flow?", "What is mutation pressure?", "What is genetic drift?", "What is assortative mating?"],
        value: 300,
        category: "Population Genetics"
    },
    {
        question: "When individuals move between populations and transfer alleles, this process occurs",
        answer: "What is gene flow?",
        options: ["What is mutation drift?", "What is gene flow?", "What is sexual selection?", "What is linkage disequilibrium?"],
        value: 400,
        category: "Population Genetics"
    },
    {
        question: "A small group starting a new population with limited genetic variation shows this effect",
        answer: "What is the founder effect?",
        options: ["What is the founder effect?", "What is balancing effect?", "What is the bottleneck theorem?", "What is adaptive radiation?"],
        value: 500,
        category: "Population Genetics"
    },

    // Selection in Action
    {
        question: "Antibiotic resistance in bacteria is a classic example of",
        answer: "What is natural selection in action?",
        options: ["What is natural selection in action?", "What is Lamarckian inheritance?", "What is neutral drift only?", "What is artificial cloning?"],
        value: 100,
        category: "Selection in Action"
    },
    {
        question: "Insects evolving resistance to pesticides demonstrates",
        answer: "What is directional selection?",
        options: ["What is stabilizing selection?", "What is directional selection?", "What is no selection?", "What is random mutation only?"],
        value: 200,
        category: "Selection in Action"
    },
    {
        question: "Peppered moth color change during industrialization is a textbook case of",
        answer: "What is natural selection?",
        options: ["What is mutation without selection?", "What is natural selection?", "What is neutral evolution only?", "What is artificial selection?"],
        value: 300,
        category: "Selection in Action"
    },
    {
        question: "When hunters remove mostly large fish, the population may evolve smaller size due to",
        answer: "What is human-driven selection pressure?",
        options: ["What is no evolution?", "What is random mating?", "What is human-driven selection pressure?", "What is complete equilibrium?"],
        value: 400,
        category: "Selection in Action"
    },
    {
        question: "A trait favored in one environment may be harmful in another, showing selection is",
        answer: "What is environment-dependent?",
        options: ["What is fixed and universal?", "What is goal-directed?", "What is environment-dependent?", "What is always random?"],
        value: 500,
        category: "Selection in Action"
    },

    // Fun and Songs
    {
        question: "This song by Imagine Dragons starts with 'Welcome to the new age'",
        answer: "What is Radioactive?",
        options: ["What is Believer?", "What is Thunder?", "What is Demons?", "What is Radioactive?"],
        value: 100,
        category: "Fun and Songs"
    },
    {
        question: "This artist sings 'Bad Guy'",
        answer: "Who is Billie Eilish?",
        options: ["Who is Billie Eilish?", "Who is Olivia Rodrigo?", "Who is Dua Lipa?", "Who is Sia?"],
        value: 200,
        category: "Fun and Songs"
    },
    {
        question: "This song title completes the lyric: 'Cause baby you're a ____'",
        answer: "What is firework?",
        options: ["What is champion?", "What is dreamer?", "What is firework?", "What is starlight?"],
        value: 300,
        category: "Fun and Songs"
    },
    {
        question: "This band is famous for the song 'Viva La Vida'",
        answer: "Who is Coldplay?",
        options: ["Who is Maroon 5?", "Who is OneRepublic?", "Who is Muse?", "Who is Coldplay?"],
        value: 400,
        category: "Fun and Songs"
    },
    {
        question: "This song by Queen includes the lyric 'We are the champions, my friend'",
        answer: "What is We Are the Champions?",
        options: ["What is Bohemian Rhapsody?", "What is Don't Stop Me Now?", "What is We Will Rock You?", "What is We Are the Champions?"],
        value: 500,
        category: "Fun and Songs"
    }
];

const finalJeopardy = {
    question: "This condition is required for natural selection to change trait frequencies across generations",
    answer: "What is heritable variation in fitness?",
    category: "Core Concepts"
};

let score = 0;
const gameBoard = document.getElementById('gameBoard');
const modal = document.getElementById('questionModal');
const questionText = document.getElementById('questionText');
const answerOptions = document.getElementById('answerOptions');
const closeModal = document.getElementById('closeModal');
const scoreDisplay = document.getElementById('score');
const finalJeopardyButton = document.createElement('button');
finalJeopardyButton.textContent = 'Final Jeopardy';
finalJeopardyButton.className = 'final-jeopardy-button';
finalJeopardyButton.style.display = 'none';
finalJeopardyButton.style.position = 'fixed';
finalJeopardyButton.style.bottom = '20px';
finalJeopardyButton.style.right = '20px';
finalJeopardyButton.style.padding = '15px 30px';
finalJeopardyButton.style.fontSize = '20px';
finalJeopardyButton.style.backgroundColor = '#060CE9';
finalJeopardyButton.style.color = 'white';
finalJeopardyButton.style.border = 'none';
finalJeopardyButton.style.borderRadius = '5px';
finalJeopardyButton.style.cursor = 'pointer';
finalJeopardyButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
finalJeopardyButton.style.zIndex = '1000';
document.body.appendChild(finalJeopardyButton);

function showFinalJeopardyButton() {
    finalJeopardyButton.style.display = 'block';
    finalJeopardyButton.style.animation = 'pulse 2s infinite';
}

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    .final-jeopardy-button:hover {
        background-color: #0408B0;
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);

function initializeBoard() {
    categories.forEach(category => {
        const categoryCell = document.createElement('div');
        categoryCell.className = 'category';
        categoryCell.textContent = category;
        gameBoard.appendChild(categoryCell);
    });

    for (let points = 100; points <= 500; points += 100) {
        categories.forEach(category => {
            const questionCell = document.createElement('div');
            questionCell.className = 'question-cell';
            questionCell.textContent = '$' + points;
            questionCell.addEventListener('click', () => showQuestion(category, points, questionCell));
            gameBoard.appendChild(questionCell);
        });
    }

    showFinalJeopardyButton();
}

function showFinalJeopardy() {
    questionText.textContent = finalJeopardy.question;
    answerOptions.innerHTML = '';

    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.placeholder = 'Type your answer...';
    answerInput.style.width = '80%';
    answerInput.style.padding = '10px';
    answerInput.style.margin = '10px 0';
    answerInput.style.fontSize = '16px';
    answerInput.style.border = '2px solid #060CE9';
    answerInput.style.borderRadius = '5px';

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Answer';
    submitButton.style.padding = '10px 20px';
    submitButton.style.margin = '10px 0';
    submitButton.style.backgroundColor = '#060CE9';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.cursor = 'pointer';

    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim();
        const correctAnswer = finalJeopardy.answer.trim();
        submitButton.classList.add('clicked');

        setTimeout(() => {
            const answerDisplay = document.createElement('div');
            answerDisplay.textContent = `Correct Answer: ${correctAnswer}`;
            answerDisplay.style.margin = '10px 0';
            answerDisplay.style.padding = '10px';
            answerDisplay.style.backgroundColor = 'rgba(6, 12, 233, 0.1)';
            answerDisplay.style.borderRadius = '5px';
            answerDisplay.style.fontWeight = 'bold';

            answerOptions.appendChild(answerDisplay);
            answerInput.disabled = true;
            submitButton.disabled = true;

            const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
            handleAnswer(isCorrect, score, null);
        }, 500);
    });

    answerOptions.appendChild(answerInput);
    answerOptions.appendChild(submitButton);
    modal.style.display = 'block';
    finalJeopardyButton.style.display = 'none';
}

finalJeopardyButton.addEventListener('click', showFinalJeopardy);

function showQuestion(category, points, cell) {
    if (cell.classList.contains('answered')) return;

    const questionData = questions.find(q => q.value === points && q.category === category);
    questionText.textContent = questionData.question;
    answerOptions.innerHTML = '';
    const shuffledOptions = [...questionData.options];

    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', (e) => {
            e.target.classList.add('clicked');

            setTimeout(() => {
                const buttons = answerOptions.getElementsByTagName('button');
                Array.from(buttons).forEach(btn => {
                    if (btn.textContent === questionData.answer) {
                        btn.style.border = '3px solid blue';
                        btn.style.borderRadius = '50%';
                    }
                    btn.disabled = true;
                });

                handleAnswer(option === questionData.answer, points, cell);
            }, 500);
        });
        answerOptions.appendChild(button);
    });

    modal.style.display = 'block';
}

function handleAnswer(correct, points, cell) {
    const pointsIndicator = document.createElement('div');
    pointsIndicator.style.position = 'absolute';
    pointsIndicator.style.top = '50%';
    pointsIndicator.style.left = '50%';
    pointsIndicator.style.transform = 'translate(-50%, -50%)';
    pointsIndicator.style.fontSize = '24px';
    pointsIndicator.style.fontWeight = 'bold';
    pointsIndicator.style.padding = '10px';
    pointsIndicator.style.borderRadius = '5px';
    pointsIndicator.style.zIndex = '1000';

    if (correct) {
        if (cell === null) {
            score *= 2;
            pointsIndicator.textContent = 'Score Doubled!';
        } else {
            score += points;
            pointsIndicator.textContent = `+${points}`;
        }
        pointsIndicator.style.color = 'green';
        pointsIndicator.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
    } else {
        if (cell === null) {
            score = Math.floor(score / 2);
            pointsIndicator.textContent = `Final Score: ${score}`;
        } else {
            score -= points;
            pointsIndicator.textContent = `-${points}`;
        }
        pointsIndicator.style.color = 'red';
        pointsIndicator.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    }

    modal.appendChild(pointsIndicator);
    scoreDisplay.textContent = score;
    if (cell) {
        cell.classList.add('answered');
    }

    closeModal.style.display = 'block';
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        closeModal.style.display = 'none';
        pointsIndicator.remove();
    });
}

window.onload = initializeBoard;

window.onclick = function(event) {
    const modalElement = document.getElementById('questionModal');
    if (event.target === modalElement) {
        modalElement.style.display = 'none';
    }
};
