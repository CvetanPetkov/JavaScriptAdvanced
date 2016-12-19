function extensibleObj() {
    let obj = Object.create({});
    obj.extend = function (template) {
        for (let prop in template) {
            if (typeof template[prop] == 'function') {
                Object.getPrototypeOf(obj)[prop] = template[prop];
            } else {
                obj[prop] = template[prop];
            }
        }
    };

    return obj;
}

let myObj = extensibleObj();
myObj.extend({
    extensionMethod: function () {},
    extensionProperty: 'someString'
});

//console.log(myObj);