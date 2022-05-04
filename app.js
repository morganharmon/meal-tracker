// import functions and grab DOM elements
import { renderIngredient, renderMeal } from './utils.js';

const form = document.getElementById('form');
const ingredientList = document.getElementById('ingredientList');
const removeButton = document.getElementById('removeButton');
const mealForm = document.getElementById('mealForm');
const mealList = document.getElementById('mealList');

// let state
let recipeArr = [];
let mealNames = [];
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

// function appendIngredients() {
//     ingredientList.textContent = '';
//     const li2 = document.createElement('li');
//     li2.textContent = '--------------';
//     mealList.append(li2);
//     for (let stuff of recipeArr) {
//         const thing = renderIngredient(stuff);
//         mealList.append(thing);
//     }
// }

function resetIngredients() {
    recipeArr = [];
    displayIngredients();
}

removeButton.addEventListener('click', () => {
    recipeArr.pop();
    displayIngredients();
});

mealForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(mealForm);
    const mealName = formData.get('mealName');
    const ingredientLength = recipeArr.length;
    mealNames.push({ name: mealName, length: ingredientLength });
    renderMeals();
    resetIngredients();
    mealForm.reset();
    mealNames = [];
});

function renderMeals() {
    for (let thing of mealNames) {
        const ul = document.createElement('ul');
        mealList.append(ul);
        const li = renderMeal(thing);
        ul.append(li);
        ingredientList.textContent = '';
        const li2 = document.createElement('li');
        li2.textContent = '----------------------';
        ul.append(li2);
        for (let stuff of recipeArr) {
            const thing = renderIngredient(stuff);
            ul.append(thing);
        }
    }
}
