$('#submit').on('click', function() {
    event.preventDefault();
    let food = {
        name: $('#userInput').val(),
        munched: false
    };
    $.ajax('/api/munch', {
        type: 'POST',
        data: food,
    }).then(function(){
        location.reload()
    })
}
$('.devour').on('click', function() {
    let id = $(this).data('id').trim();
    let devoured = {munched: true};

    $.ajax('api/munch' + id, {
        type: 'PUT',
        data: devoured
    }, function(){
        location.reload();
    })
}
