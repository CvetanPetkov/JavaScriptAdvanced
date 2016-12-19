function orderProcess(order) {
    let orderDispatched = {};

    let model = order.model;
    let power = order.power;
    let color = order.color;
    let carriage = order.carriage;
    let wheelsize = order.wheelsize;

    let engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400},
        monster: { power: 200, volume: 3500}
    };

    let carriages = {
        hatchback: { type: 'hatchback', color: undefined },
        coupe: { type: 'coupe', color: undefined }
    };

    (function setModel() {
        orderDispatched.model = model;
    })();

    (function setEngine() {
        if (power <= 90) {
            orderDispatched.engine = engines.small;
            return;
        } else if (power <= 120) {
            orderDispatched.engine = engines.normal;
        } else {
            orderDispatched.engine = engines.monster;
        }
    })();

    (function setCarriage() {
        orderDispatched.carriage = carriages[carriage];
        orderDispatched.carriage.color = color;
    })();

    (function setWheels() {
        if (wheelsize % 2 == 0) {
            wheelsize -= 1;
        }
        orderDispatched.wheels = [];
        for (let i = 0; i < 4; i++) {
            orderDispatched.wheels.push(wheelsize);
        }

    })();

    return orderDispatched;
}

let order = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};

//console.log(orderProcess(order));