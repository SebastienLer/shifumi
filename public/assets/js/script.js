var weapons = document.querySelectorAll('.weapon')

function playGame(){
    console.log('arg');
}

weapons.forEach(weapon => {
    weapon.addEventListener('click', playGame());
});
