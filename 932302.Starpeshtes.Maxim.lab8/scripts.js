const itemsContainer = document.querySelector('.list-manager__items');
const savedContainer = document.querySelector('.list-manager__output');
const addBtn = document.querySelector('.list-manager__add-btn');
const saveBtn = document.querySelector('.list-manager__save-btn');

addBtn.addEventListener('click', () => {
    const newItem = document.createElement('div');

    newItem.classList.add('list-item');
    newItem.innerHTML = `
        <input type="text" class="list-item__input">
        <input type="text" class="list-item__input">
        <button type="button" class="list-item__btn list-item__btn--up">&uarr;</button>
        <button type="button" class="list-item__btn list-item__btn--down">&darr;</button>
        <button type="button" class="list-item__btn list-item__btn--remove">&times;</button>
    `;

    newItem.querySelector('.list-item__btn--up').addEventListener('click', moveItemUp);
    newItem.querySelector('.list-item__btn--down').addEventListener('click', moveItemDown);
    newItem.querySelector('.list-item__btn--remove').addEventListener('click', removeItem);

    itemsContainer.append(newItem);
});

saveBtn.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.list-item');
    let savedObjects = '{';

    listItems.forEach((item) => {
        const firstInputValue = item.querySelector('input:nth-child(1)').value;
        const secondInputValue = item.querySelector('input:nth-child(2)').value;

        savedObjects += `"${firstInputValue}":"${secondInputValue}",`;
    });

    savedObjects = savedObjects.slice(0, savedObjects.length - 1);
    savedObjects += '}';

    savedContainer.textContent = savedObjects;
});

const moveItemUp = ($event) => {
    const currentItem = $event.target.closest('.list-item');
    const prevItem = currentItem.previousElementSibling;
    prevItem?.before(currentItem);
};

const moveItemDown = ($event) => {
    const currentItem = $event.target.closest('.list-item');
    const nextItem = currentItem.nextElementSibling;
    nextItem?.after(currentItem);
};

const removeItem = ($event) => {
    $event.target.closest('.list-item').remove();
};

document.querySelector('.list-item__btn--up').addEventListener('click', moveItemUp);
document.querySelector('.list-item__btn--down').addEventListener('click', moveItemDown);
document.querySelector('.list-item__btn--remove').addEventListener('click', removeItem);