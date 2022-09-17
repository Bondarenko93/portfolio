export const GenerateRandomPosition = (width: number, height: number) => {
    return {
        x: randomNumber(0, width),
        y: randomNumber(0, height),
    }
}
function randomNumber(min: number, max: number) {
    let random = Math.random() * max;
    return random - (random % 8);
}
