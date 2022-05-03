export function renderIngredient(asdf) {
    const item = document.createElement('li');
    item.textContent = `${asdf.quantity} ${asdf.measurement} of ${asdf.ingredient}`;
    return item;
}

