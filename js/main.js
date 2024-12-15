let i = 0
while(i <= 10) {
    console.log(i)
    i++
}
for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    console.log(i);
  }
  const number = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
let arr = [1, 2, 3, 4, 5]
let k = 0
while (k < arr.length) {
    console.log(arr[k])
    k++
}
let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0;i < Arr.length; i++) {
    if(Arr[i] === 7) {
        break;
    }
    console.log(Arr[i])
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = 3;
for(i = 0; i < array.length; i++) {
    if(array[i] > n) {
        break;
    }
    console.log(array[i])
}
let j = 0
while(j <= 20) {
    if(j % 3 === 0) {
        j++
        continue;
    }
    console.log(j)
}