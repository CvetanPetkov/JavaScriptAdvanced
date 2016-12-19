// function increment(selector) {
//     let textArea = $('<textarea>').addClass('counter').attr( "disabled", true ).val('0');
//     let incrementBtn = $('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment');
//     let addBtn = $('<button>').addClass('btn').attr('id', 'addBtn').text('Add');
//     let ul = $('<ul>').addClass('results');
//
//     $(selector).append(textArea);
//     $(selector).append(incrementBtn);
//     $(selector).append(addBtn);
//     $(selector).append(ul);
//
//     $('#incrementBtn').on('click', function () {
//         let oldVal = Number($('.counter').val());
//         $('.counter').val(++oldVal);
//     })
//
//     $('#addBtn').on('click', function () {
//         let val = $('.counter').val();
//         let li = $('<li>').text(val);
//         $('.results').append(li);
//     })
// }

function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea></textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    list.addClass('results');

    incrementBtn.on('click', function () {
        let value = Number(textArea.val());
        textArea.val(++value);
    })

    addBtn.on('click', function () {
        let value = Number(textArea.val());
        let li = $('<li>');
        li.text(value);
        list.append(li);
    })

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);
}