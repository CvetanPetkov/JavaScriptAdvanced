let breakfastRobot = (function () {

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function restock(ingredient, val) {
        switch (ingredient) {
            case 'protein':
                ingredients.protein = Number(val);
                return success();
            case 'carbohydrate':
                ingredients.carbohydrate = Number(val);
                return success();
            case 'fat':
                ingredients.fat = Number(val);
                return success();
            case 'flavour':
                ingredients.flavour = Number(val);
                return success();
        }
    }

    function prepare(recipe, val) {
        switch (recipe) {
            case 'apple':
                return apple(val);
            case 'coke':
                return coke(val);
            case 'burger':
                return burger(val);
            case 'omelet':
                return omelet(val);
            case 'cheverme':
                return cheverme(val);
        }
    }

    function apple(val) {
        if (ingredients.carbohydrate >= 1 * val && ingredients.flavour >= 2 * val) {
            ingredients.carbohydrate -= 1 * val;
            ingredients.flavour -= 2 * val;
            return success();
        } else if (ingredients.carbohydrate >= 1 * val) {
            return error('flavour');
        } else {
            return error('carbohydrate');
        }
    }

    function coke(val) {
        if (ingredients.carbohydrate >= 10 * val && ingredients.flavour >= 20 * val) {
            ingredients.carbohydrate -= 10 * val;
            ingredients.flavour -= 20 * val;
            return success();
        } else if (ingredients.carbohydrate >= 10 * val) {
            return error('flavour');
        } else {
            return error('carbohydrate');
        }
    }

    function burger(val) {
        if (ingredients.carbohydrate >= 5 * val && ingredients.fat >= 7 * val && ingredients.flavour >= 3 * val) {
            ingredients.carbohydrate -= 5 * val;
            ingredients.fat -= 7 * val;
            ingredients.flavour -= 3 * val;
            return success();
        } else if (ingredients.carbohydrate >= 5 * val) {
            if (ingredients.fat >= 7 * val) {
                return error('flavour');
            } else {
                return error('fat');
            }
        } else {
            return error('carbohydrate');
        }
    }

    function omelet(val) {
        if (ingredients.protein >= 5 * val && ingredients.fat >= 1 * val && ingredients.flavour >= 1 * val) {
            ingredients.protein -= 5 * val;
            ingredients.fat -= 1 * val;
            ingredients.flavour -= 1 * val;
            return success();
        } else if (ingredients.protein >= 5 * val) {
            if (ingredients.fat >= 1 * val) {
                return error('flavour');
            } else {
                error('fat')
            }
        } else {
            return error('protein');
        }
    }

    function cheverme(val) {
        if (ingredients.protein >= 10 * val && ingredients.carbohydrate >= 10 * val && ingredients.fat >= 10 * val && ingredients.flavour >= 10 * val) {
            ingredients.protein -= 10 * val;
            ingredients.carbohydrate -= 10 * val;
            ingredients.fat -= 10 * val;
            ingredients.flavour -= 10 * val;
            return success();
        } else if (ingredients.protein >= 10 * val) {
            if (ingredients.carbohydrate >= 10 * val) {
                if (ingredients.fat >= 10 * val) {
                    return error('flavour');
                } else {
                    return error('fat');
                }
            } else {
                return error('carbohydrate');
            }
        } else {
            return error('protein');
        }
    }

    function success() {
        return 'Success'
    }

    function error(ingredient) {
        return 'Error: not enough ' + ingredient + ' in stock'
    }

    function report() {
        return 'protein=' + ingredients.protein
            + ' carbohydrate=' + ingredients.carbohydrate
            + ' fat=' + ingredients.fat
            + ' flavour=' + ingredients.flavour
    }

    return function commandProcessor(input) {
        let tokens = input.split(' ');
        let action = tokens[0];
        let prop = tokens[1];
        let val = tokens[2];
        switch (action) {
            case 'restock':
                return restock(prop, val);
                break;
            case 'prepare':
                return prepare(prop, val);
                break;
            default:
                return report();
                break;
        }
    }
})();

// console.log(breakfastRobot('prepare cheverme 1'));
// console.log(breakfastRobot('restock protein 10'));
// console.log(breakfastRobot('prepare cheverme 1'));
// console.log(breakfastRobot('restock carbohydrate 10'));
// console.log(breakfastRobot('prepare cheverme 1'));
// console.log(breakfastRobot('restock fat 10'));
// console.log(breakfastRobot('prepare cheverme 1'));
// console.log(breakfastRobot('restock flavour 10'));
// console.log(breakfastRobot('prepare cheverme 1'));
// console.log(breakfastRobot('report'));
