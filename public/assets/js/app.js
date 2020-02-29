$( document ).ready(function() {

document.querySelector(".new-burger").addEventListener("submit", (e) => {
    const newBurger = {
        burger_name: document.getElementById('burger').textContent(),
        devoured: false
    }

    $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
    }).then( () => {
        console.log('new burger added!');
        location.reload();
    })
    e.preventDefault();
});

});