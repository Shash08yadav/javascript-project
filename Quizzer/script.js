const questions =[
    {
      question:  "what is the capital of Australia?",
       answers :[
            { text:"Sydney",correct: false},
            { text:" Melbourne",correct: false},
            { text:"Canberra",correct: true},
            { text:"Perth",correct: false},
       ]
    },
    {
        question:  "What is the largest ocean in the world?",
        answers :[
             { text:"atlantic ocean",correct: false},
             { text:" indan ocean",correct: false},
             { text:"arctic ocean",correct: false},
             { text:"pacific ocean",correct: true},
        ]
    },
    {
        question:  "Which planet is known as the Red Planet",
       answers :[
            { text:"venus",correct: false},
            { text:" mars",correct: true},
            { text:"jupiter",correct: false},
            { text:"saturn",correct: false},
       ]
    },
    {
        question:  "What is the currency of Japan? ",
       answers :[
            { text:"Yen",correct: true},
            { text:"Euro",correct: false},
            { text:"Dollar",correct: false},
            { text:"Rupee",correct: false},
       ]
    },
    {
        question:  "Which country is known as the 'Land of the Rising Sun'?",
       answers :[
            { text:"China",correct: false},
            { text:"South korea ",correct: false},
            { text:"Japan",correct: true},
            { text:"Thailand",correct: false},
       ]
    }
    
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;
function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML="next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " +currentQuestion.question
    
    currentQuestion.answers.forEach((answer) => { //chhed1
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
} //chhed 2

function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect =selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct ==="true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display="block";
    }
    function showscore(){
        resetState();
        questionElement.innerHTML = `you scored  ${score} out of ${questions.length}`;
        nextButton.innerHTML="play Again";
        nextButton.style.display="block";
    }   
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
            
        }else{
            showscore();
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