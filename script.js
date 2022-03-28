import { quizList1 } from './quizList.js';
import { 
    addEvent, 
    tagSetValue, 
    isShowElement,
    optionGenerator,
    appendChild, 
} from './helpers.js';


(function() {
    var i = 0;

    const speed = 100;

    let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

    const warningText = document.getElementById('warning');

    const typeWriter = () => {
        if (i < text.length) {
            warningText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    };
    typeWriter()
  
})();



addEvent('click', '#start', () => {
    isShowElement('.start_game_container', 'none');
    isShowElement('.root', 'block');
    showCheckQuestion();
});


let currentQuestion = 0;
let rightAnswer = 0;
let i = 1;


const showCheckQuestion = () => {
    const { title, options } = quizList1[currentQuestion];
    const data = optionGenerator(options);
    tagSetValue('#question', title);
    tagSetValue('#options', data);
};


const checkCorrectAnswer = (selectAnswer, correctAnswer) => {
    const right = `${i}) right answer is ${correctAnswer} your answer is ${selectAnswer} its true`;
    const wrong = `${i}) right answer is ${correctAnswer} your answer is ${selectAnswer} its false`;
    let hr = document.createElement("hr");
    let id = `right${i}`
    if (selectAnswer == correctAnswer) {
        let a = appendChild('#main_result','p',id)
        a.innerText = right;
        a.appendChild(hr)
    }else{
        let a = appendChild('#main_result','p',id)
        a.innerText = wrong;
        a.appendChild(hr)
    }
     rightAnswer++
     i++
};

addEvent('click', '#options', (event) => {
    let index = event.target.dataset.index;
    const { correctAnswer } = quizList1[currentQuestion];
    checkCorrectAnswer(index, correctAnswer);
    if (currentQuestion < quizList1.length - 1) {//?
        currentQuestion++;
        showCheckQuestion();
    } else {
        isShowElement('.root', 'none');
        isShowElement('.main_result', 'block');
    }
});







