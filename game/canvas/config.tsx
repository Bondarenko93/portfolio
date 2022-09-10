export const GenerateRandomPosition = (width, height) => {
    return {
        x: randomNumber(0, width),
        y: randomNumber(0, height),
    }
}
function randomNumber(min, max) {
    let random = Math.random() * max;
    return random - (random % 8);
}
