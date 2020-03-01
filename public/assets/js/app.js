$( document ).ready(function() {

document.querySelector(".new-burger").addEventListener("submit", (e) => {
    const newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: false
    };

    $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
    }).then( () => {
        location.reload();
    })
    e.preventDefault();
});

const eaten = document.querySelectorAll(".eat");
    eaten.forEach(eats => {
        
     eats.addEventListener("click", function() {
    const id = $(this).data('id'),
        eat = { devoured: true };

        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: eat
        }).then( () => {
            location.reload();
        })
    });
});
});