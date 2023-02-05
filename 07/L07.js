let Player1Count = 0;
let Player2Count = 0;
const min = 1;
const max = 6;
function player1Dice() {
   let number = Math.floor(min + Math.random() * (max +1 - min));
    Player1Count += number;
}
function player2Dice() {
    let number = Math.floor(min + Math.random() * (max +1 - min));
    Player2Count += number;
}
player1Dice();
player2Dice();
player1Dice();
player2Dice();
player1Dice();
player2Dice();
if (Player1Count > Player2Count) {
   console.log('Player1 win!');
} else {
    if (Player1Count < Player2Count) {
        console.log('Player2 win!');
    } else {
        console.log('Draw!');
    }
}


const dayOfMonth = 13;
const friday = 5;
const step = 24 * 60 * 60 * 1000;
const startDate = Date.parse('01/01/2000');
const currentDate = Date.now();
let count = 0;
for (let dateStamp = startDate; dateStamp <= currentDate; dateStamp += step){
    let date = new Date(dateStamp);
    if (date.getDate() === dayOfMonth && date.getDay() === friday) {
        count++;
    }
}
console.log(count)


//эту задачу я не смог решить самостоятельно, поэтому прошу снизить балл
const total = 15;
const parts = 3;
const getRandomArbitrary = (min, max) => {
    return (Math.random() * (max - min) + min);
}
const rounded = (number, fr = 0) => {
    return +number.toFixed(fr);
}
const fn = (max, partCount, result = []) => {
    const randomNum = rounded(getRandomArbitrary(0, max));
    result.push(randomNum);
    partCount = partCount - 1;
    if (partCount === 1) {
        result.push(rounded(max - randomNum));
        return result;
    } else {
        return fn(max-randomNum, partCount, result);
    }
}
const result = fn(total, parts);
const result1 = fn(total, parts);
console.log(result)
console.log(result1)

const total = 15;
const parts = 3;
const getRandomArbitrary = (min, max) => {
    return (Math.random() * (max - min) + min);
}
const rounded = (number, fr = 2) => {
    return +number.toFixed(fr);
}
const result = []
const fn = (max, partCount) => {
    const randomNum = rounded(getRandomArbitrary(0, max));
    result.push(randomNum);
    partCount = partCount - 1;
    if (partCount === 1) {
        result.push(rounded(max - randomNum));
        return result;
    } else {
        fn(max-randomNum, partCount);
    }
}
fn(total, parts)
console.log(result)
