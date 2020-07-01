
const buttons = document.querySelectorAll(".btn");


buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
    e.preventDefault();
    })
})