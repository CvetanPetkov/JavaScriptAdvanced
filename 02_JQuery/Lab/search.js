function search() {
    let searchText = $('#searchText').val();
    let matches = 0;

    $('#towns li').each((index, item) => {
        item.textContent.includes(searchText) ?
        $(item).css('font-weight', 'bold')
        && matches++
            :
            $(item).css('font-weight', '');
    });

    $('#result').text(matches + ' matches found');
}
