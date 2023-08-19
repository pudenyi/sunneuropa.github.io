document.addEventListener('DOMContentLoaded', function () {
    const englishTextElements = document.querySelectorAll('.english-text');
    const spanishTextElements = document.querySelectorAll('.spanish-text');

    englishTextElements.forEach(function (element) {
        element.style.display = 'block';
    });
    spanishTextElements.forEach(function (element) {
        element.style.display = 'none';
    });

    document.querySelector('#radio1').addEventListener('click', function () {
        englishTextElements.forEach(function (element) {
            element.style.display = 'block';
        });
        spanishTextElements.forEach(function (element) {
            element.style.display = 'none';
        });
    });

    document.querySelector('#radio2').addEventListener('click', function () {
        englishTextElements.forEach(function (element) {
            element.style.display = 'none';
        });
        spanishTextElements.forEach(function (element) {
            element.style.display = 'block';
        });
    });
});
