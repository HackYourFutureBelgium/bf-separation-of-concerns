debugger; // once when the program is initialized

const state = {
    currentNumber: 0,
    allNumbers: [],
};

// ==== the user can add a new number to state ====

document.getElementById('next-number').addEventListener('change', (e) => {
    debugger; // each time the user changes the 'next-number' input

    // --- read the user's input ---
    const inputValue = e.target.value;
    const nextNumber = Number(inputValue);

    // --- update state ---
    state.allNumbers.push(nextNumber);
    state.currentNumber = state.allNumbers.at(-1);

    // --- update UI ---

    // create new HTML string
    const liString = `<li class="number-item">${state.currentNumber}</li>`;

    // add the new item to the history
    const backwardsContainer = document.getElementById('number-history');
    backwardsContainer.innerHTML = liString + backwardsContainer.innerHTML;
});

// ==== the user can change the input's value ====

document.getElementById('number-history').addEventListener('mouseover', (e) => {
    debugger; // each time the user moves the mouse over 'number-history'

    // only do something if the user is hovering over an LI child
    if (e.target.nodeName !== 'LI') {
        return;
    }

    // read the user's input
    const targetText = e.target.innerText;
    const userNumber = Number(targetText);

    // update state
    state.currentNumber = userNumber;

    // update the UI
    document.getElementById('next-number').value = state.currentNumber;
});
