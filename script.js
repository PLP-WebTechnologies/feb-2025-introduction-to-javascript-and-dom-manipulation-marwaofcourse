// Change text content dynamically
const subtitle = document.getElementById('subtitle');
subtitle.textContent = "This subtitle was changed by JavaScript!";

// Modify CSS styles via JavaScript
const title = document.getElementById('main-title');
title.style.color = 'darkblue';
title.style.fontFamily = 'Arial, sans-serif';

// Add or remove an element when a button is clicked
const button = document.getElementById('toggle-btn');
const container = document.getElementById('container');

let elementAdded = false;

button.addEventListener('click', () => {
    if (!elementAdded) {
        const newElement = document.createElement('p');
        newElement.textContent = "This paragraph was dynamically added!";
        newElement.id = 'dynamic-paragraph';
        newElement.style.color = 'green';
        container.appendChild(newElement);
        button.textContent = 'Remove Element';
        elementAdded = true;
    } else {
        const dynamicParagraph = document.getElementById('dynamic-paragraph');
        if (dynamicParagraph) {
            container.removeChild(dynamicParagraph);
        }
        button.textContent = 'Add New Element';
        elementAdded = false;
    }
});
