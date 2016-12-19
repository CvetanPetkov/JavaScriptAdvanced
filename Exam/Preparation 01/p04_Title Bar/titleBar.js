class TitleBar {

    constructor(title) {
        this.title = title;
        this.nav = $('<nav>').addClass('menu');
    }

    addLink(href, name) {
        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);

        this.nav.append($(link));
    }

    appendTo(selector) {
        let parent = $(selector);

        let head = $('<div>').attr('id', 'head');
        let header = $('<header>').addClass('header');

        let headerRow = $('<div>').addClass('header-row')
            .append($('<a>')
                .addClass('button')
                .text('\u2630')
                .on('click', function () {
                    if ($('.drawer').css('display') == 'none') {
                        $('.drawer').css('display', 'block');
                    }
                    else if ($('.drawer').css('display') == 'block') {
                        $('.drawer').css('display', 'none');
                    }
                }))
            .append($('<span>').addClass('title').text(this.title));

        let drawer = $('<div>').addClass('drawer')
            .append($(this.nav))
            .css('display', 'none');

        header.append($(headerRow)).append($(drawer));
        head.append($(header));
        parent.prepend($(head));
    }
}