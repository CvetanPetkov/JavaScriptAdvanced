function attachEvents() {
    $('#items').on('click', 'li', function () {
        let li = $(this);
        li.attr('data-selected') ?
        li.removeAttr('data-selected') && li.css('background', ', ')
            : li.attr('data-selected', 'true') && li.css('background', '#DDD')
    });


    $('#showTownsButton').on('click', function () {
        let setLi = $('#items li[data-selected = true]');
        let towns = setLi.toArray().map(li => li.textContent).join(', ');
        $('#selectedTowns').text('Selected towns: ' + towns);
    });
}
