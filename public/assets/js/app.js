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
        console.log('new burger added!');
        location.reload();
    })
    e.preventDefault();
});

const eaten = document.querySelectorAll(".eat");
    eaten.forEach(eats => {
        
     eats.addEventListener("click", function() {
    const id = $(this).data('id'),
        eat = { devoured: true };
    console.log(id, this);
        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: eat
        }).then( () => {
            console.log(`Your ${$(this).siblings('p').text()} has been devoured!`);
            location.reload();
        })
    });
});
});