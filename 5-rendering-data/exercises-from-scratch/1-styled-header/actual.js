'use strict';

const actual = (level, text, styling) => {
  console.log(`level : ${level}, text : ${text}, styling : ${styling} `);

  const titleLevel = 'h' + level;
  const title = document.createElement(titleLevel);
  if (styling) {
    const stylings = styling.split(' ');
    if (stylings.length > 1) {
      for (const style of stylings) {
        title.classList.add(style);
      }
    } else {
      title.classList.add(styling);
    }
    console.log(`styling : ${styling.length}`);
  }
  title.innerText = text;

  console.log(title);

  return title;
};
