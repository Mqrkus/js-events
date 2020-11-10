let firstBox = document.querySelector('.first');
let secondBox = document.querySelector('.second');
let thirdBox = document.querySelector('.third');

firstBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red'
    secondBox.style.backgroundColor= 'grey'
    thirdBox.style.backgroundColor= 'grey'
    console.log('Mouse entered the box!');
});

secondBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'yellow'
    firstBox.style.backgroundColor= 'grey'
    thirdBox.style.backgroundColor= 'grey'
    console.log('Mouse entered the box!');
});

thirdBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'green'
    secondBox.style.backgroundColor= 'grey'
    firstBox.style.backgroundColor= 'grey'
    console.log('Mouse entered the box!');
});

firstBox.addEventListener('mouseleave', () => {
    firstBox.style.backgroundColor = 'grey';
    console.log('Oops, the mouse have left the area');
});

secondBox.addEventListener('mouseleave', () => {
    secondBox.style.backgroundColor = 'grey';
    console.log('Oops, the mouse have left the area');
});

thirdBox.addEventListener('mouseleave', () => {
    thirdBox.style.backgroundColor = 'grey';
    console.log('Oops, the mouse have left the area');
});