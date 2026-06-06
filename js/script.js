if (window.history.replaceState) {
    window.history.replaceState(null, document.title, window.location.href);
}

document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.popup-container');
    var popupButtons = document.querySelectorAll('.open-popup');
    var popupForm = document.querySelector('.popup');

    for (var i = 0; i < popupButtons.length; i++) {
        popupButtons[i].addEventListener('click', function () {
            container.style.display = 'flex';
        });
    }

    container.addEventListener('click', function (event) {
        if (event.target === container) {
            container.style.display = 'none';
        }
    });

    popupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        container.style.display = 'none';
        popupForm.reset();
    });
});
