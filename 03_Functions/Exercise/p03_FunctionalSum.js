let add = (function () {
    let sum = 0;

    function add(number){
        sum += number;
        return add;
    }
    add.toString = () => sum;

    return add;
})();
//console.log(add(1)(6)(-3));
//console.log(add(6));
//console.log(add(-3));