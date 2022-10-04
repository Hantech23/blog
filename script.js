const textbox = document.querySelector('textarea')

const savebutton = document.querySelector('.savebutton')

const wall = document.querySelector('.wall')

savebutton.addEventListener('click', (event) => {
    wall.innerText = textbox.value;
})