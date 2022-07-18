let heart = document.querySelector('.heart');
let counter = 0;
let likes = document.querySelector('.counter');

heart.addEventListener('click', function (e) {
    if (heart.classList.contains('added')) {
        counter--;
    } else {
        counter++;
    }
    likes.textContent = counter;
    heart.classList.toggle('added');
    e.preventDefault();
});