const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Клік по кнопкам з підказками
for (let btn of infoBtns) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        this.parentNode.querySelector('.info-hint').classList.toggle('none');
    });
}



// Закриваємо підказки при кліку по всьому документу

document.addEventListener('click', function () {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
});




for (let hint of infoHints) {
   hint.addEventListener('click', (e)=> e.stopPropagation());
}
