let createBook = (function () {
    let id = 1;

    return function (selector, title, author, isbn) {
        let currId = 'book' + id;
        let container = $(selector);
        let fragment = document.createDocumentFragment();
        let div = $('<div>').attr('id', currId);

        let pTitle = $('<p>').addClass('title').text(title);
        let pAuthor = $('<p>').addClass('author').text(author);
        let pIsbn = $('<p>').addClass('isbn').text(isbn);
        let selectBtn = $('<button>').text('Select').on('click', borderBlue);
        let deselectBtn = $('<button>').text('Deselect').on('click', borderNone);

        div.append(pTitle)
            .append(pAuthor)
            .append(pIsbn)
            .append(selectBtn)
            .append(deselectBtn);
        div.appendTo(fragment);
        container.append(fragment);
    };

    function borderBlue() {
        $(this).parent().css('border', '2px solid blue');
    }

    function borderNone() {
        $(this).parent().css('border', 'none');
    }

})();