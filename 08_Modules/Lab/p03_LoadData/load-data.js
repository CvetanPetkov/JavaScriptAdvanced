let data = require('./data').data;

function sort(property) {
    data.sort((a, b) => a[property].localeCompare(b[property]));
    return data;
}

function filter(property, value) {
    let result = [];
    for (let d of data) {
        for (let prop in d) {
            if (prop == property && d[prop] == value) {
                result.push(d);
            }
        }
    }
    return result;
}

module.exports = {sort, filter};