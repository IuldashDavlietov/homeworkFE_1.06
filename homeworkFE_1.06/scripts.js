// Task 1

// Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), которая в качестве аргумента получает объект и возвращает результат согласно примеру ниже:
// Примечание: Использовать класс Object нельзя.

// Результат: ['key1','key2','key3','key4']

// let someObj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   key4: 'value4',
//   }

// function getKeys(obj){
//   for(let elem in obj){
//     obj = elem
//     console.log(obj);
//   }
//   return obj
// }
// getKeys(someObj)


// Task 2

// Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. Примечание: гарантируется, что все элементы передают числовое значение
// Пример: [1,2,3,4,5]

// Результат: 3

// let  getAvg = (arr) => {
// let result = 0;
// for(let i = 0;i < arr.length;i++){
// result +=arr[i] / arr.length
// }

// return result 
// }

// console.log(getAvg([1,2,3,4,5]));


// Task 3

// Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает и выведет в консоль количество элементов, чей тип равен ‘string’
// Пример: [1,true,'3','value1',9,'key']
// Результат: 3

// function countString(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'string') {
//         count++;
//       }
//     }
//     console.log(count);
//   }
//   const array = [1, true, '3', 'value1', '9', 'key'];
//   countString(array);

// Task 4

// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат  согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }




// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }

// let result = [];
// function getEntries(){
//   for(let elem in someObj){
// result.push([elem,someObj[elem]])
//   }
// return console.log(result);
// }
// getEntries()


// Task 5 

// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

// const  array = [1,true,'3','value1',9,'key'];

// function object(){
// let obj = {}
// for(let elem in array ){
//  obj['key' + ++elem]  = array[elem -1] 
// }
// console.log(obj);
// return obj 
// }
// object()