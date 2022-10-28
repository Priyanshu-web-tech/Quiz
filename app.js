const questions=[
    {
        'que': "Which of the following is a client site language?",
        'a': "Java",
        'b': "C",
        'c': "Python",
        'd': "JavaScript",
        'correct': "d",
    },
    {
        'que': "What does HTML stand for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "a",
    },
    {
        'que': "What year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b",
    },
    {
        'que': "What does CSS stands for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "b",
    },
    {
        'que':'Which of the following is a markup language',
        'a':'HTML',
        'b':'CSS',
        'c':'PHP',
        'd':'JavaScript',
        'correct':'a',
    },
    {
        'que':'What is the preferred way for adding a background color in HTML?',
        'a':'<body background="yellow">',
        'b':'<background>yellow</background>',
        'c':'< body style="background-color:yellow">',
        'd':'<background color="yellow">text<background>',
        'correct':'c', 
    },
    {
        'que':' What is the correct HTML for creating a hyperlink?',
        'a':' <a name="">A</a>',
        'b':'<a>B</a>',
        'c':'<a href="http://www.example.com">example</a>',
        'd':'<a url="http://www.example.com">example</a>',
        'correct':'a',
    }
]
let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll("input[type='radio']")
const loadQuestion=()=>{
    if(index==total){
        return endQuiz()
    }
reset()
const data=questions[index]
quesBox.innerHTML=`${index+1})${data.que}`
optionInputs[0].nextElementSibling.innerText=data.a
optionInputs[1].nextElementSibling.innerText=data.b
optionInputs[2].nextElementSibling.innerText=data.c
optionInputs[3].nextElementSibling.innerText=data.d
}
document.querySelector("#submit").addEventListener(
    "click",
    function(){
    const data=questions[index];
    const ans=getAnswer()
    if (ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion()
}
)
const getAnswer=()=>{
    let ans;
    optionInputs.forEach(
        (input)=>{
            if (input.checked){
                ans= input.value;
            } 
        }
    )
    return ans;
}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3>Thank you for playing the quiz</h3>
        <h2>${right}/${total} are correct</h2>
        </div>
    `
}
loadQuestion()