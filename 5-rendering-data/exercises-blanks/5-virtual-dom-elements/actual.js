'use strict';

const actual = (virtualElement) => {
  const { name, attributes = {}, children = [] } = virtualElement;
  console.log(
    `name : ${name}, attributes = {} : ${attributes}, children = [] : ${children}`,
  );

  const el = document.createElement(name);

  for (const attributeName in attributes) {
    console.log(`attributeName : ${attributeName}`);
    const attributeValue = attributes[attributeName];
    console.log(`attributeValue : ${attributeValue}`);
    el.setAttribute(attributeName, attributeValue);
  }

  for (const child of children) {
    console.log(`child : ${child}`);
    console.log(child.attributes);

    if (typeof child === 'string') {
      console.log('!!!!!!!!!!!!!!!!!1');
      el.textContent += child;
      console.log(el.textContent);
    } else {
      // recursively render child elements
      const renderedChild = actual(child);
      console.log(`renderedChild : ${renderedChild}`);
      console.log(renderedChild);
      el.appendChild(renderedChild);
    }
  }

  return el;
};
