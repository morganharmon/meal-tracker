export function renderIngredient(asdf) {
    const item = document.createElement('li');
    item.textContent = `${asdf.ingredient} - ${asdf.quantity} ${asdf.measurement}`;
    return item;
}

export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.name} - ${meal.length} ingredients`;
    return li;
}