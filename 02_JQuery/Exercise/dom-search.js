function domSearch(selector, sensibility) {
    let block = $(selector);
    let addFragment, searchFragment, resultFragment;

    addFragment = $('<div>').addClass('add-controls')
        .append($('<label>').text('Enter text:')
            .append($('<input>').addClass('input')))
        .append($('<a>').text('Add').addClass('button').css('display', 'inline-block')
            .on('click', function () {
                let deleteBtn = $('<a>').addClass('button').text('X')
                    .on('click', function () {
                        $(this).parent().css('display', 'none');
                    });

                let newItemString = $('input').val().trim();
                $('input').val('');

                $('.items-list')
                    .append($('<li>').addClass('list-item')
                        .append(deleteBtn)
                        .append($('<strong>').text(newItemString)));
            }));

    searchFragment = $('<div>').addClass('search-controls')
        .append($('<label>').text('Search:')
            .append($('<input>').addClass('input')
                .on('input', function () {
                    let searchedText = $(this).val().trim();
                    let list = $('.list-item strong');

                    list.each((index, item) => {
                        if (sensibility) {
                            if ($(item).text().indexOf(searchedText) < 0) {
                                $(item).parent().css('display', 'none');
                            }
                        } else {
                            if ($(item).text().toLowerCase().indexOf(searchedText.toLowerCase()) < 0) {
                                $(item).parent().css('display', 'none');
                            }
                        }
                    })
                })));

    resultFragment = $('<div>').addClass('result-controls')
        .append($('<ul>').addClass('items-list'));

    block.append(addFragment).append(searchFragment).append(resultFragment);
}
