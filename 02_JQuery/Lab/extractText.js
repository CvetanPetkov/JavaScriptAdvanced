function extractText() {
    let list = $('ul#items li')
        .toArray()
        .map(li => li.textContent)
        .join(', ');

    $('#result').text(list);
}
