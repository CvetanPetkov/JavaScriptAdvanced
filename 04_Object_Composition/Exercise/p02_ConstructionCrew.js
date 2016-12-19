function applyAlc() {
    let weight = arguments[0].weight;
    let experience = arguments[0].experience;
    let bloodAlcoholLevel = arguments[0].bloodAlcoholLevel;
    let handsShaking = arguments[0].handsShaking;

    if (handsShaking) {
        let newAlcohol = (0.1 * weight) * experience;
        arguments[0].bloodAlcoholLevel += newAlcohol;
        arguments[0].handsShaking = false;
    }

    return arguments[0];
}
let worker = {
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
};

//console.log(applyAlc(worker));