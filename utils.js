export function renderIngredient(asdf) {
    const item = document.createElement('li');
    item.textContent = `${asdf.ingredient} ${asdf.quantity} of ${asdf.measurement}`;
    console.log(item);
    return item;
}

