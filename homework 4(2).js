function revealMessage(){
    document.getElementById("hiddenMessage").style.display ='block';
}
function countDown(){
    var currentVal= document.getElementById("countDownButton").innerHTML;
    var newVal;= 0;
    if (currentVal >0){
        newVal =currentVal -1;
    }
    document.getElementById("countDownButton").innerHTML = newVal;
}
const start = document.getElementById("start");
const quiz =document.getElementById("quiz");
const qImg= document.getElementById("questionImage");
const question =document.getElementById("question");
const counter=document.getElementById("counter");
const timeGuage = document.getElementById("timeGuage");
const choiceA = document.getElementById ("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById ("C");
const choiceD = document.getElementById("D");

const progress = document.getElementById("progress");
const scoreContainer = document.ElementById("scoreContainer");

let questions =[
    {
        question: "WHAT DOES HTML STAND FOR?",
        imgSrc: "img/html.png",
        choiceA: "hyper Text Markup Language",
        choiceB: "HyperLinks and Text Markup Languages",
        choiceC: "Not this one",
        choiceD: "Maybe",
        correct: "A"
    },
{
question: "This is the question #2",
imgSrc:"img/pictures2.png",
choiceA: "Not right",
choiceB: "Getting warmer",
choiceC: "Almost",
choiceD: "Right Answer",
}
];
let lastQuestionIndex= questions.length-2;
let runningQuestionIndex=0;
function renderQuestion(){
let q= questions[runningQuestionIndex];
qImg.innerHTML="<img src="+ q.imgSrc + ">";
question.innerHTML="<p>"+ q.question +"<p/>";
choiceA.innerHTML= q.choiceA;
choiceB.innerHTML= q.choiceB;
choiceC.innerHTML= q.choiceC;
choiceD.innerHTML= q.choiceD;
}