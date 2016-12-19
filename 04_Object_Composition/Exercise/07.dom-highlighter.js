function colorize(selector) {
    let firstParent = $(selector);

    let bestDepth = -1;
    let bestSelector;

    findDeepestChild(0, firstParent);

    function findDeepestChild(depth, selector) {
        if (depth > bestDepth) {
            bestDepth = depth;
            bestSelector = selector;
        }

        let childrens = $(selector).children();
        for (let child of childrens) {
            findDeepestChild(depth + 1, $(child));
        }
    }

    while (true) {

        bestSelector.addClass('highlight');
        if (bestSelector.attr('id') == firstParent.attr('id')) {
            return;
        }

        bestSelector = bestSelector.parent();
    }
}
