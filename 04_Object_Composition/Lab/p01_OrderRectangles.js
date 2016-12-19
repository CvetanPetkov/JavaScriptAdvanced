function order(input) {
    let rectangles = [];

    for (let [width, height] of input) {
        let rect = createRect(width, height);
        rectangles.push(rect);
    }

    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function(other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };
        return rect;
    }

    rectangles.sort((a, b) => a.compareTo(b));
    return rectangles;
}
