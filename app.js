// import functions and grab DOM elements
import { renderIngredient } from './utils.js';

const form = document.getElementById('form');
const ingredientList = document.getElementById('ingredientList');
const removeButton = document.getElementById('removeButton');

// let state
let recipeArr = [];

// set event listeners 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formD = new FormData(form);
    const ingredient = formD.get('ingredient');
    const quantity = formD.get('quantity');
    const measurement = formD.get('measurement');
    const recipe = { ingredient: ingredient, quantity: quantity, measurement: measurement };
    recipeArr.push(recipe);
    displayIngredients();
    form.reset();
});

function displayIngredients() {
    ingredientList.textContent = '';
    for (let stuff of recipeArr) {
        const thing = renderIngredient(stuff);
        ingredientList.append(thing);
    }
}

removeButton.addEventListener('click', () => {
    recipeArr.pop();
    displayIngredients();
});