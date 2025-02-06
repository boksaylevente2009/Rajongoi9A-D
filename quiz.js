const  questions = [
    {
        question: "Mikor született Dwayne Johnson ?",
        answers: [
            { text: "1969", correct: false},
            { text: "1974", correct: false},
            { text: "1972", correct: true},
            { text: "1965", correct: false},
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
        question: "Melyik filmben nem játszott Dwayne Johnson?",
        answers: [
            { text: "Pancser Police", correct: false},
            { text: "Halálos iramban 6.", correct: false},
            { text: "Forrest Gump", correct: true},
            { text: "A skorpiókirály", correct: false},
        ]
    },
    {
        question: "Mi a beceneve Dwayne Johnsonnak?",
        answers: [
            { text: "The Rock", correct: true},
            { text: "The Eagle", correct: false},
            { text: "The Egg", correct: false},
            { text: "The Lion", correct: false},
        ]
    },
    {
        question: "Melyik volt az első filmje Dwayne Johnsonnak?",
        answers: [
            { text: "A múmia visszatér", correct: true},
            { text: "Halálos iramban 3.", correct: false},
            { text: "A Boszorkány-hegy", correct: false},
            { text: "Tombolás", correct: false},
        ]
    },
    {
        question: "Hány gyermeke van Dwayne Johnsonnak?",
        answers: [
            { text: "0", correct: false},
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
        ]
    },
    {
        question: "Dwayne Johnson nem szeret horgászni",
        answers: [
            { text: "Igaz", correct: false},
            { text: "Hamis", correct: true},
           
        ]
    },
 
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Következő";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion= questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion. 
    question;
 currentQuestion.answers.forEach(answer=> {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
});
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

   
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
     selectedBtn.classList.add("correct");
     score++;
    }else{
        selectedBtn.classList.add("incorrect");
            }
            Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct === "true" ){
                    button.classList.add("correct");
                }
                button.disabled = true;
        });
        nextButton.style.display = "block";
    }
  function showScore(){
    resetState();
    questionElement.innerHTML = ` ${score} pontot értél el a ${questions.length} pontból !`;
    nextButton.innerHTML = "Játssz újra";
    nextButton.style.display = "block"
  }

    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }

nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){
    handleNextButton();
}else{
    startQuiz();
}

});

startQuiz();
