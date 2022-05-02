// import functions and grab DOM elements
const form = document.getElementById('form');

// let state
let recipeArr = [];

// set event listeners 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formD = new FormData(form);
    const ingredient = formD.get('ingredient');
    const quantity = formD.get('quantity');
    const measurement = formD.get('measurement');
    const recipe = { ingredient, quantity, measurement };
    recipeArr.push(recipe);

});

