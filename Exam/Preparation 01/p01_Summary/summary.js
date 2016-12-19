function summary(selector) {
    let parent = $('#content').parent();
    let button = $(selector);
    let highlighted = $('#content').find('strong').text();

    $(button).on('click', function () {

        let summary = $('<div>').attr('id', 'summary')
            .append($('<h2>').text('Summary'))
            .append($('<p>').text(highlighted));

        $(parent).append($(summary));
    });
}