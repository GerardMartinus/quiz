// Armazenamento dos valores
const quizData = [
    {
        question: "Questão 1: Traduza a imagem",
        a: "Oi",
        b: "Bom dia",
        c: "Tchau",
        d: "Boa noite",
        correct: "a",
    },
    {
        question: "Questão 2: Traduza a imagem",
        a: "Oi",
        b: "Bom dia",
        c: "Tchau",
        d: "Boa noite",
        correct: "a",
    },
    {
        question: "Questão 3: Traduza a imagem",
        a: "Oi",
        b: "Bom dia",
        c: "Tchau",
        d: "Boa noite",
        correct: "a",
    },
    {
        question: "Questão 4: Traduza a imagem",
        a: "Oi",
        b: "Bom dia",
        c: "Tchau",
        d: "Boa noite",
        correct: "a",
    },
    {
        question: "Questão 5: Traduza a imagem",
        a: "Oi",
        b: "Bom dia",
        c: "Tchau",
        d: "Boa noite",
        correct: "a",
    },
    {
        question: "Questão 6: Traduza a imagem",
        a: "Oi",
        b: "Bom dia",
        c: "Tchau",
        d: "Boa noite",
        correct: "a",
    },
    {
        question: "Questão 7: Traduza a imagem",
        a: "Oi",
        b: "Bom dia",
        c: "Tchau",
        d: "Boa noite",
        correct: "a",
    },
    {
        question: "Questão 8: Traduza a imagem",
        a: "Oi",
        b: "Bom dia",
        c: "Tchau",
        d: "Boa noite",
        correct: "a",
    },
    {
        question: "Questão 9: Traduza a imagem",
        a: "Oi",
        b: "Bom dia",
        c: "Tchau",
        d: "Boa noite",
        correct: "a",
    },
    {
        question: "Questão 10: Traduza a imagem",
        a: "Oi",
        b: "Bom dia",
        c: "Tchau",
        d: "Boa noite",
        correct: "a",
    },


];

// Busca de conteudo da pagina html
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// Declaração de variável padrão
let currentQuiz = 0
let score = 0

// Chama a função load
loadQuiz()


function loadQuiz() {


    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            if (currentQuiz < 7) {
                quiz.innerHTML =
                    `<h2>Parabéns, você respondeu ${score}/${quizData.length} questões corretamente</h2>;
                    <button>Seguir</button>;`
            } else {
                quiz.innerHTML =
                    `<h2>${score}/${quizData.length} questões respondidas, tente novamente</h2>;
                    <button onclick="location.reload()">Recarregar</button>`
            }
        }
    }
})