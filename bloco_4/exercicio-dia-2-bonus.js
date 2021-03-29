let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Item 1

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  console.log(array);

//   Item 2

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  console.log(array);

//   Item 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicador = [];

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index +1]){
        multiplicador.push(numbers[index] * numbers[index + 1]);
    }else {
        multiplicador.push(numbers[index] * 2);
    }
}

console.log(multiplicador)