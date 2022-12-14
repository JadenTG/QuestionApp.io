const q = document.getElementById("Q")
const sub = document.getElementById("nex")
const nex = document.getElementById("sub")
const ScB = document.getElementById("sc")
const god = document.getElementById("god")
const StartPage = document.getElementById("StartPage")
const StartButton = document.getElementById("StartButton")
const questionText = document.getElementById("Q")
const buttonOne = document.getElementById("button1");
const buttonTwo = document.getElementById("button2");
const buttonThree = document.getElementById("button3");
const buttonFour = document.getElementById("button4");

buttonOne.addEventListener('click', ()=>AnswerQuestion(buttonOne.textContent));
buttonTwo.addEventListener('click', ()=>AnswerQuestion(buttonTwo.textContent));
buttonThree.addEventListener('click', ()=>AnswerQuestion(buttonThree.textContent));
buttonFour.addEventListener('click', ()=>AnswerQuestion(buttonFour.textContent));
StartButton.addEventListener('click', StartTransition)
nex.addEventListener('click', SubmitButton)
sub.addEventListener('click', NextQuestion);

var score = 0;
var currentQuestion = null; 

const question = [
    {
        question: 'Which two statements are true about positioning floated elements?',
        answers: {
            a: 'The element can float up or down.',
            b: 'The element is positioned absolute to its parent element',
            c: 'The element is positioned relative to the upper-left corner of the browser',
            d: 'The element can float right or left'
        },
        correctAnswer: 'The element can float right or left', 
    },

    {
        question: 'What is the main purpose of CSS in HTML5',
        answers: {
            a: 'CSS is used for scripting on an HTML web Page.',
            b: 'CSS is used to determine style, positioning, and layout of a page.',
            c: 'None of these',
            d: 'CSS is used to define content on a page.'
        },
        correctAnswer: 'CSS is used to determine style, positioning, and layout of a page.'
    },

    {
        question: 'You want to create a  style that will modify the strong tag to apply blue color and add 60% transparency. Which of the following code fragments will do this?',
        answers: {
            a: 'strong { color: rgba(0,0,255,60); }',
            b: 'strong { color: rgba(0%,0%,100%,40%); }',
            c: 'strong { color: rgba(0,0,255, 0.40); }',
            d: 'strong { color: #0000ff, 60%; }'
        },
        correctAnswer: 'strong { color: rgba(0,0,255, 0.40); }'
    },

    {
        question: 'Which is true about absolute positioning',
        answers: {
            a: 'The element is positioned relative to the upper-left corner of the computer display window',
            b: 'The element is positioned relative to its parent element',
            c: 'The element is positioned relative to the upper-left corner of the browser',
            d: 'The element can float right or left'
        },
        correctAnswer: 'The element is positioned relative to the upper-left corner of the browser'
    },

    {
        question: 'What is the correct syntax for a CSS comment?',
        answers: {
            a: '<!--- Comment Goes Here -->',
            b: '// Comment Goes Here',
            c: '/* Comment Goes Here */',
            d: '# Comment Goes Here #'
        },
        correctAnswer: '/* Comment Goes Here */'
    },

    {
        question: 'How does the new Flexible Box Model eliminate the need for using float?',
        answers: {
            a: 'By positioning all objects at the coordinates 0,0',
            b: 'By providing a container positioned by properties assigned',
            c: 'By allowing the browser to position the objects',
            d: 'By positioning objects relative to a parent object'
        },
        correctAnswer: 'By providing a container positioned by properties assigned'
    },

    {
        question: 'Which CSS style positions an element relative to the browser window',
        answers: {
            a: 'position: absolute;',
            b: 'position: fixed;',
            c: 'position: static;',
            d: 'position: relative;'  
        },
        correctAnswer: 'position: fixed;'
    },

    {
        question: 'What is the purpose of the flexbox properties in CSS?',
        answers: {
            a: 'To display an element as a flexbox, allowing the user to drag the edges of the box in and out to change its size.',
            b: 'To display an element as a flexbox, allowing the content of a paragraph element to wrap around adjacent images.',
            c: 'To display an element as a flexbox, allow it to be moved dynamically to any position on the page with very little additional code.',
            d: 'To display an element as a flexbox, allowing its size and position to adjust with the size of the viewport.'
        },
        correctAnswer: 'To display an element as a flexbox, allowing its size and position to adjust with the size of the viewport.'
    },

    {
        question: 'Which box model establishes content alignment, direction, and orientation?',
        answers: {
            a: 'Parent Box Model',
            b: 'Inheritance Box Model',
            c: 'Fixed Box Model',
            d: 'Flexible Box Model'
        },
        correctAnswer: 'Flexible Box Model'
    },

    {
        question: 'What is the purpose  of the "flex-flow" property?',
        answers: {
            a: 'None of these.',
            b: 'Flex-flow allows the designer to set both the flex-direction and flex-wrap properties with a single line of code.',
            c: 'Flex-flow defines the alignment of child boxes (top, center, bottom) within the flex box.',
            d: 'Flex-flow ONLY determines whether or not the child boxes will wrap to a new line upon running out of space.'
        },
        correctAnswer: 'Flex-flow allows the designer to set both the flex-direction and flex-wrap properties with a single line of code.'
    }
]

function SelectQuestion(id){
    let q = question[id];

    questionText.textContent = q.question;

    buttonOne.textContent = q.answers.a; 
    buttonTwo.textContent = q.answers.b; 
    buttonThree.textContent = q.answers.c; 
    buttonFour.textContent = q.answers.d; 

    currentQuestion = q; 
}

function NextQuestion(){
    var currentId = question.indexOf(currentQuestion);
    var nextId = currentId + 1;

    SelectQuestion(nextId);
    ResetButtons();
}

function AnswerQuestion(answer){
    if(answer == currentQuestion.correctAnswer){
        UpdateScore(+5);
    }
    else{
        UpdateScore(-5);
    }

    ChangeButtons();
}

function ChangeButtons()
{
    var buttons = [buttonOne, buttonTwo, buttonThree, buttonFour];

    for(var i = 0; i < buttons.length; i++)
    {
        if(buttons[i].textContent == currentQuestion.correctAnswer){
            buttons[i].style.backgroundColor = "Green"; 
        }
        else{
            buttons[i].style.backgroundColor = "rgb(208, 52, 52)"; 
        }
    }
}

function ResetButtons()
{
    var buttons = [buttonOne, buttonTwo, buttonThree, buttonFour];

    for(var i = 0; i < buttons.length; i++)
    {
        buttons[i].style.backgroundColor = "#a8b698";
    }
}

SelectQuestion(0);

function UpdateScore(value)
{
    score = score+value <= 0 ? 0 : score+value; 
    ScB.textContent = score; 
}

function SetScore(value){
    score = value
    ScB.textContent = score;
}

function SubmitButton(){
    SelectQuestion(0);
    SetScore(0);
    ResetButtons();
}


function StartTransition()
{
    god.style.opacity = 1;
    StartPage.style.opacity = 0; 
    StartPage.style.pointerEvents = "none";
}