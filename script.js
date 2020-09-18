const startButton = document.getElementById('startBtn')
const questionContainerElement = document.getElementById('questionContainer')


startGame = () => {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

startButton.addEventListener('click', startGame)

setNextQuestion = () => {

}

selectAnswer = () => {

}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            
        ]
    }
]