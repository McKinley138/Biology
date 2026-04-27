const categories = [
    "Mendel's Laws",
    "DNA & Chromosomes",
    "Punnett Squares",
    "Gene Expression",
    "Fun and Songs"
];

const questions = [
    // Mendel's Laws
    {
        question: "Mendel's first law states that traits are controlled by pairs of factors called",
        answer: "What are alleles?",
        options: ["What are genes?", "What are alleles?", "What are mutations?", "What are chromosomes?"],
        value: 100,
        category: "Mendel's Laws"
    },
    {
        question: "In a monohybrid cross between two heterozygous individuals, the expected phenotypic ratio is",
        answer: "What is 3:1?",
        options: ["What is 1:1?", "What is 3:1?", "What is 2:1?", "What is 1:2:1?"],
        value: 200,
        category: "Mendel's Laws"
    },
    {
        question: "A trait that appears in heterozygous individuals and masks the other trait is called",
        answer: "What is dominant?",
        options: ["What is recessive?", "What is dominant?", "What is epistatic?", "What is incomplete?"],
        value: 300,
        category: "Mendel's Laws"
    },
    {
        question: "When an organism has two different alleles for a trait, it is called",
        answer: "What is heterozygous?",
        options: ["What is homozygous?", "What is heterozygous?", "What is haploid?", "What is diploid?"],
        value: 400,
        category: "Mendel's Laws"
    },
    {
        question: "The physical appearance of an organism based on its genotype is called its",
        answer: "What is phenotype?",
        options: ["What is genotype?", "What is phenotype?", "What is karyotype?", "What is pedigree?"],
        value: 500,
        category: "Mendel's Laws"
    },

    // DNA & Chromosomes
    {
        question: "DNA stands for",
        answer: "What is deoxyribonucleic acid?",
        options: ["What is deoxyribose nucleotide acid?", "What is deoxyribonucleic acid?", "What is dynamic nucleotide assembly?", "What is double nucleotide acid?"],
        value: 100,
        category: "DNA & Chromosomes"
    },
    {
        question: "The structure of DNA is described as a",
        answer: "What is double helix?",
        options: ["What is single strand?", "What is triple helix?", "What is double helix?", "What is circular loop?"],
        value: 200,
        category: "DNA & Chromosomes"
    },
    {
        question: "Adenine pairs with this base in DNA",
        answer: "What is thymine?",
        options: ["What is cytosine?", "What is guanine?", "What is thymine?", "What is uracil?"],
        value: 300,
        category: "DNA & Chromosomes"
    },
    {
        question: "Humans have this many pairs of chromosomes",
        answer: "What is 23?",
        options: ["What is 46?", "What is 23?", "What is 92?", "What is 12?"],
        value: 400,
        category: "DNA & Chromosomes"
    },
    {
        question: "The process where DNA makes a copy of itself is called",
        answer: "What is DNA replication?",
        options: ["What is transcription?", "What is translation?", "What is DNA replication?", "What is mutation?"],
        value: 500,
        category: "DNA & Chromosomes"
    },

    // Punnett Squares
    {
        question: "In a Punnett square showing Bb × Bb, the expected genotypic ratio is",
        answer: "What is 1:2:1?",
        options: ["What is 1:1?", "What is 3:1?", "What is 1:2:1?", "What is 2:2?"],
        value: 100,
        category: "Punnett Squares"
    },
    {
        question: "A cross between BB and bb would produce all offspring with this genotype",
        answer: "What is Bb?",
        options: ["What is BB?", "What is bb?", "What is Bb?", "What is BB and bb?"],
        value: 200,
        category: "Punnett Squares"
    },
    {
        question: "When crossing Bb × bb, the probability of getting a dominant phenotype is",
        answer: "What is 50%?",
        options: ["What is 25%?", "What is 50%?", "What is 75%?", "What is 100%?"],
        value: 300,
        category: "Punnett Squares"
    },
    {
        question: "In a dihybrid cross, the expected phenotypic ratio is",
        answer: "What is 9:3:3:1?",
        options: ["What is 3:1?", "What is 1:2:1?", "What is 9:3:3:1?", "What is 1:1:1:1?"],
        value: 400,
        category: "Punnett Squares"
    },
    {
        question: "A test cross uses a dominant phenotype individual with this genotype",
        answer: "What is homozygous recessive?",
        options: ["What is homozygous dominant?", "What is heterozygous?", "What is homozygous recessive?", "What is haploid?"],
        value: 500,
        category: "Punnett Squares"
    },

    // Gene Expression
    {
        question: "The process where DNA instructions are transferred to mRNA is called",
        answer: "What is transcription?",
        options: ["What is translation?", "What is transcription?", "What is replication?", "What is mutation?"],
        value: 100,
        category: "Gene Expression"
    },
    {
        question: "Proteins are made during this process where mRNA is read by ribosomes",
        answer: "What is translation?",
        options: ["What is transcription?", "What is replication?", "What is translation?", "What is mutation?"],
        value: 200,
        category: "Gene Expression"
    },
    {
        question: "A change in the DNA sequence that may affect gene expression is called a",
        answer: "What is mutation?",
        options: ["What is replication?", "What is transcription?", "What is mutation?", "What is translation?"],
        value: 300,
        category: "Gene Expression"
    },
    {
        question: "The enzyme that carries out transcription is called",
        answer: "What is RNA polymerase?",
        options: ["What is DNA polymerase?", "What is RNA polymerase?", "What is protease?", "What is ligase?"],
        value: 400,
        category: "Gene Expression"
    },
    {
        question: "mRNA is modified in eukaryotes before translation by the addition of a",
        answer: "What is poly-A tail and 5' cap?",
        options: ["What is intron?", "What is exon?", "What is poly-A tail and 5' cap?", "What is promoter?"],
        value: 500,
        category: "Gene Expression"
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
    question: "This term describes the two alleles of a gene that an organism inherits, one from each parent",
    answer: "What is genotype?",
    category: "Mendel's Laws"
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
