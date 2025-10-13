const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const bothBtn = document.querySelector('.btn-both');

const leftCol = document.querySelector('.column:nth-child(1)');
const rightCol = document.querySelector('.column:nth-child(2)');

leftBtn.addEventListener('click', () => {
    setAsymmetricLayout(leftCol, rightCol);
});

rightBtn.addEventListener('click', () => {
    setAsymmetricLayout(rightCol, leftCol);
});

bothBtn.addEventListener('click', () => {
    resetColumns();
});

function setAsymmetricLayout(wideCol, narrowCol) {
    wideCol.style.flexBasis = '95%';
    wideCol.querySelector('img').style.width = '75%';
    wideCol.querySelector('img').style.display = 'block';

    narrowCol.style.flexBasis = '5%';
    narrowCol.querySelector('img').style.display = 'none';
}

function resetColumns() {
    leftCol.style.flexBasis = '50%';
    leftCol.querySelector('img').style.display = 'block';
    leftCol.querySelector('img').style.width = '100%';

    rightCol.style.flexBasis = '50%';
    rightCol.querySelector('img').style.display = 'block';
    rightCol.querySelector('img').style.width = '100%';
}