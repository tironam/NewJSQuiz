const startButton = document.getElementById('startBtn')
const nextButton = document.getElementById('nextBtn')
const questionContainerElement = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const answerBtnsElement = document.getElementById('answerBtns')

startGame = () => {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()

})

setNextQuestion = () => {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

showQuestion = (question) => {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnsElement.appendChild(button)
    })
}

resetState = () => {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerBtnsElement.firstChild) {
        answerBtnsElement.removeChild
        (answerBtnsElement.firstChild)
    }
}

selectAnswer = (event) => {
    const selectedBtn = event.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
}

setStatusClass = (element, correct) => {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

clearStatusClass = (element) => {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false},
            { text: '2', correct: false},
            { text: '6', correct: false}
        ]
    },
    {
        question: 'Who\'s the real Slim Shady?',
        answers: [
            {text: 'John Laurens', correct: false},
            { text: 'Jeremy Piven', correct: false},
            {text: 'Marshal Mathers', correct: true},
            {text: 'Dr. Dre', correct: false}
        ]
    },
    {question: 'What is 8 * 4',
        answers: [
            { text: '42', correct: false },
            { text: '64', correct: false },
            { text: '12', correct: false },
            { text: '32', correct: true }
        ]
    }       
]