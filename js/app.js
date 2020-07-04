
const buttons = document.querySelectorAll(".btn");
const storeItems = document.querySelectorAll('.store-item');


buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
    e.preventDefault();

    const filtered = e.target.dataset.filter;
    
    storeItems.forEach((item) => {
        if (filtered === 'all') {
            item.style.display = 'block'
            } else {
                if (item.classList.contains(filtered)) {
                item.style.display = 'block';
                } else {
                item.style.display = 'none';
                }
            }
        })
    });

})

