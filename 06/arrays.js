let str = '423876';
let sum1 = parseInt(str[0], 10) + parseInt(str[1], 10) + parseInt(str[2], 10);
let sum2 = parseInt(str[3], 10) + parseInt(str[4], 10) + parseInt(str[5], 10);
if(sum1 === sum2){
    console.log('да');
} else {
    console.log('нет');
}

let n = 1000;
let num = 0;
while (n >= 50){
   n = n/2;
    num++;
}
console.log(`Получилось число: ${n}. Количество итераций: ${num}`);

let arr = [12, 15, 20, 25, 59, 79];
let sum = 0;
for (let x = 0; x < arr.length; x++) {
    sum += arr[x];
}
let average = sum/arr.length;
console.log(average);

let array = [1, 2, 3, 4, 5];
array.splice(3, 0, 'a', 'b', 'c');

let array = [1, 2, 3, 4, 5];
array.splice(1, 0, 'a', 'b');
array.splice(6, 0, 'c');
array.push('e');
console.log(array);

let array = [3, 4, 1, 2, 7];
array.sort();
console.log(array);

