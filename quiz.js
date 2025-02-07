const  questions = [
    {
        question: "Hol született Dwayne Johnson?",
        answers: [
            { text: "New York", correct: false},
            { text: "Kalifornia", correct: true},
            { text: "Miami", correct: false},
            { text: "London", correct: false},
        ]
    },
    {
        question: "Hol született Dwayne Johnson?",
        answers: [
            { text: "New York", correct: false},
            { text: "Kalifornia", correct: true},
            { text: "Miami", correct: false},
            { text: "London", correct: false},
        ]
    },
    {
        question: "Hol született Dwayne Johnson?",
        answers: [
            { text: "New York", correct: false},
            { text: "Kalifornia", correct: true},
            { text: "Miami", correct: false},
            { text: "London", correct: false},
        ]
    },
    {
        question: "Hol született Dwayne Johnson?",
        answers: [
            { text: "New York", correct: false},
            { text: "Kalifornia", correct: true},
            { text: "Miami", correct: false},
            { text: "London", correct: false},
        ]
    },
    {
        question: "Hol született Dwayne Johnson?",
        answers: [
            { text: "New York", correct: false},
            { text: "Kalifornia", correct: true},
            { text: "Miami", correct: false},
            { text: "London", correct: false},
        ]
    },
 
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score=0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion= questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion. 
    question;
}  currentQuestion.answers.forEach(answers=> {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
});


function resetState(){
nextButton.style.display = "none";
while( answerButton.firstChild){
    answers.Buttons.removeChild(answers.Buttons.firstChild);
}
}


startQuiz();
