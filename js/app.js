
const buttons = document.querySelectorAll(".btn");
const storeItems = document.querySelectorAll("#store-items");


buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
    e.preventDefault();
    const filter = e.target.dataset.filter
    console.log(filter);
    })
});

