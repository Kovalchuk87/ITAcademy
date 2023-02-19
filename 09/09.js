function returnRandomNumber(min, max) {
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
};

const promise1 = new Promise((res) => {
    const timeout = returnRandomNumber(1, 5);
    setTimeout(async () => {
        await res(1)
    }, timeout * 1000);
});
const promise2 = new Promise((res) => {
    const timeout = returnRandomNumber(1, 5);
    setTimeout(async () => {
        await res(2)
    }, timeout * 1000);
});
const promise3 = new Promise((res) => {
    const timeout = returnRandomNumber(1, 5);
    setTimeout(async () => {
        await res(3)
    }, timeout * 1000);
});
Promise.race([promise1, promise2, promise3])
    .then((data) => console.log(data));


const getNum = function () {
    const promise = new Promise((res) => {
        const randNum = returnRandomNumber(1, 5)
        setTimeout(() => {
            res(randNum)
            console.log(randNum);
        }, 3000);
    });
    return promise;
}

async function squaring() {
    let num = await getNum();
    num = Math.pow(num, 2);
    console.log(num)
}
squaring();


const getNum2 = function () {
    const promise = new Promise((res) => {
        const randNum = returnRandomNumber(6, 10)
        setTimeout(() => {
            res(randNum)
            console.log(randNum);
        }, 5000);
    });
    return promise;
}

async function getNumsSum() {
    let num1 = await getNum();
    let num2 = await getNum2();
    let NumsSum = num1 + num2;
    console.log(NumsSum)
}
getNumsSum();
