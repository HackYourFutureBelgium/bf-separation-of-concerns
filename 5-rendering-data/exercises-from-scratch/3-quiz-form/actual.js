'use strict';

const actual = ({ question, answers, correct, selected }) => {
  // console.log(`Question !!!! : ${question}`);

  const form = document.createElement('form');
  const p = document.createElement('p');

  p.innerText = question;
  form.append(p);

  answers.forEach((answer, index) => {
    // console.log(`${index + 1}. ${answers}`);
    const text = document.createElement('text');
    const input = document.createElement('input');
    const lineBreak = document.createElement('br');
    input.type = 'radio';
    input.name = 'answer';
    text.innerText = answer;

    if (answer === answers[correct] && answer === answers[selected]) {
      input.checked = true;
      text.classList.add('correct');
      text.innerText = answer + ' √';
    }
    if (answer !== answers[correct] && answer === answers[selected]) {
      input.checked = true;
      text.classList.add('incorrect');
      text.innerText = answer + ' ✖';
    }

    form.append(input, text, lineBreak);
  });

  // console.log(`Correct answer : ${answers[correct]}`);
  // console.log(`Select answer : ${answers[selected]}`);

  return form;
};

/* 
Samir's solution 

'use strict';

const actual = ({ question, answers, correct, selected }) => {
    // form
    const form = document.createElement('form');

    // question
    const questionDom = document.createElement('p');
    questionDom.innerText = question;
    form.append(questionDom);

    // answers
    answers.forEach((answer, index) => {
        // input
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answers';
        if (index === selected) {
            input.checked = true;
        }

        // text
        const text = document.createElement('text');
        text.innerText = answer;
        if (input.checked) {
            if (index === correct) {
                text.className = 'correct';
                text.innerText = answer + ' √';
            } else {
                text.className = 'incorrect';
                text.innerText = answer + ' ✖';
            }
        }

        // br
        const br = document.createElement('br');
        form.append(input, text, br);
    });

    return form;
}; */
