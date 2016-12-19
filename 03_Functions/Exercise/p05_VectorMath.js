let solution = (function () {

    let result;

    return {
        add: (vec1, vec2) => {
            result = [];
            let r1 = vec1[0] + vec2[0];
            let r2 = vec1[1] + vec2[1];
            result.push(r1);
            result.push(r2);
            return result;
        },
        multiply: (vec1, scalar) => {
            result = [];
            let r1 = vec1[0] * scalar;
            let r2 = vec1[1] * scalar;
            result.push(r1);
            result.push(r2);
            return result;
        },
        length: (vec) => {
            let r = Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2));
            result = r;
            return result;
        },
        dot: (vec1, vec2) => {
            let r1 = vec1[0] * vec2[0];
            let r2 = vec1[1] * vec2[1];
            result = r1 + r2;
            return result;
        },
        cross: (vec1, vec2) => {
            let r1 = vec1[0] * vec2[1];
            let r2 = vec1[1] * vec2[0];
            result = r1 - r2;
            return result;
        }
    }


})();
//console.log(solution.add([1, 1], [1, 0]));
//console.log(solution.multiply([3.5, -2], 2));
//console.log(solution.length([3, -4]));
//console.log(solution.dot([1, 0], [0, -1]));
//console.log(solution.cross([3, 7], [1, 0]));