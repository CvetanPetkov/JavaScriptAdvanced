function argInfo() {
    let summary = {};

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ': ' + obj);
        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }

    let sorted = [...Object.keys(summary)]
        .sort((a, b) => summary[b] - summary[a])
        .forEach(item => console.log(item + ' = ' + summary[item]));
}
//argInfo(['cat', 42, function () { console.log('Hello world!'); }]);
//argInfo({name: 'bob'}, 3.333, 9.999);