//Задание 1
let age = prompt("Ваш возраст?");
alert("Вам " + age + " лет");
let userName = prompt("Ваше имя?");
alert("Добро пожаловать на сайт " + userName + "!"); 

//Задание 2
let a=13;
let b=5;
alert(a) //13
alert('abc' * 3); //NaN
alert( 1 / 0); //Infinity
alert(-1 / 0); //-Infinity
alert('2' * '3'); // 6 */

//Задание 3
let a1 = '2';
let b1 = '3';
console.log(Number(a1) + Number(b1));

let firstNumber = Number(prompt("Введите первое число:"));
let secondNumber = Number(prompt("Введите второе число:"));

let sum = firstNumber + secondNumber;
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;
let remainder = firstNumber % secondNumber;

console.log(`Сумма чисел равна ${sum}`);// 5
console.log(`Разность чисел равна ${difference}`);// -1
console.log(`Произведение чисел равно ${product}`);// 6
console.log(`Частное чисел равно ${quotient}`);// 0.6
console.log(`Остаток от деления чисел равна ${remainder}`); // 2 

//Задание 4
console.log(String(true)); // true
console.log('a' + true); // atrue
console.log(Number(true)); // 1
console.log(true + 1); // 2
console.log(true + true); // 2
console.log(true - true); // 0
console.log( String(true) + Number(true)) // true1 

//Задание 5
let inputNumber = Number(prompt("Введите число для проверки относительно 5:"));
if (inputNumber > 5) {
  console.log("Число больше 5");
} else if (inputNumber < 5) {
  console.log("Число меньше 5");
} else {
  console.log("Число равно 5");
}

let test1 = 10; // Пример значения для test1
let test2 = 10; // Пример значения для test2

if (test1 === test2) {
  console.log("Переменные test1 и test2 равны.");
} else {
  console.log("Переменные test1 и test2 не равны.");
}

let firstNumber1 = Number(prompt("Введите первое число:"));
let secondNumber1 = Number(prompt("Введите второе число:"));

if (firstNumber < secondNumber) {
  console.log("Минимальное число: " + firstNumber1);
} else if (secondNumber < firstNumber) {
  console.log("Минимальное число: " + secondNumber1);
} else {
  console.log("Оба числа равны: " + firstNumber1);
}

let checkNumber = Number(prompt("Введите число для проверки диапазона (больше 0 и меньше 15):"));
if (checkNumber > 0 && checkNumber < 15) {
  console.log("Число удовлетворяет условию: больше 0 и меньше 15.");
} else {
  console.log("Число не удовлетворяет условию: либо не больше 0, либо не меньше 15.");
} 

//Задание 6
 let num1 = Number(prompt("Введите первое число (num1):"));
let num2 = Number(prompt("Введите второе число (num2):"));

if (num1 <= 1 && num2 >= 3) {
  console.log("Условие выполнено: num1 равна или меньше 1, и num2 больше или равна 3.");
} else {
  console.log("Условие не выполнено:");
  if (num1 > 1) {
    console.log(" - num1 больше 1.");
  }
  if (num2 < 3) {
    console.log(" - num2 меньше 3.");
  }
} 

//Задание 7
 let test = true;
if (test) {
  console.log('+++');
} else {
  console.log('---');
} // +++ 

//Задание 8
let day = 15;

if (day >= 1 && day <= 10) {
  console.log("Первая декада месяца");
} else if (day >= 11 && day <= 20) {
  console.log("Вторая декада месяца");
} else if (day >= 21 && day <= 31) {
  console.log("Третья декада месяца");
} else {
  console.log("Неверное значение дня"); 
} // Вторая декада месяца

//Задание 9
const number = parseInt(prompt("Введите положительное целое число:"));
const hundreds = Math.floor(number / 100) % 10; // Получаем количество сотен
const tens = Math.floor(number / 10) % 10;      // Получаем количество десятков
const units = number % 10;                       // Получаем количество единиц
console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`); // результат
