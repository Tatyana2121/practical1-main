'use strict';
/*// Пример №1
// Создайте переменные a1, a2, a3, a4, a5. При помощи математических 
// операторов (сложение, вычитание и т.д.) найдите значения выражений:
// 7 + 2,
// 7 - 3,
// 2 * 4,
// 4 / 2,
// поместив результат каждого выражения в соответствующую 
// переменную. Например, let a1 = 7 + 2. Результаты переменных вывести в console.log();
let a1 = 7+2; // 9
let a2 = 7-3;// 4
let a3 = 2*4;// 8
let a4 = 4/2;// 2
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);


// Пример №2
// Напишите скрипт, который находит площадь прямоугольника высота 23см. 
// (в числовую переменную height), шириной 10см (в числовую переменную width), 
// значение площади должно хранится в числовой переменной s. (S=a*b);
let height = 23;
let width = 10;
let s;
s = height * width;
console.log(`S = ${s}`);


// Пример №3
// Создайте переменную str и присвойте ей значение 'qwerty'. Обращаясь к отдельным 
// символам этой строки выведите на экран символ 'q', символ 'w', символ 'r'.
let str = 'qwerty';
console.log(str[0]);
console.log(str[1]);
console.log(str[3]);

// Пример №4
// Напишите скрипт, который считает количество секунд в часе.
console.log(60 * 60);

// Пример №5
// Переделайте приведенный код так, чтобы в нем использовались операции 
// +=, -=, *=, /=, ++, --. 
// Количество строк кода при этом не должно измениться. Код для переделки:
// let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// console.log(num);
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --; 
console.log(num);*/


// ДОМАШНЕЕ ЗАДАНИЕ

// Пример №1
// Создайте переменные b1, b2, b3, b4, b5. Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'
// Результаты переменных вывести в console.log();
let b1 = 5 % 3;
let b2 = 3 % 5;
let b3 = 5 + '3';
let b4 = '5' - 3;
let b5 = 75 + 'кг';

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);

// Пример №2 
// Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и 
// диаметром основания 4м (dC), результат поместите в переменную v.
let heightC = 10;
let dC = 4;
let v = Math.floor(3.1415 * dC/2 * heightC);
console.log(`Объем цилиндра ${v}`);

// Пример №3
// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное 
//(результат деления).
let a = 10;
let b = 2;
let sum = a + b;
let dif = a - b;
let mul = a * b;
let div = a / b;
console.log(sum);
console.log(dif);
console.log(mul);
console.log(div);
// Пример №4
//  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. 
//  Выведите на экран значение переменной result.
let c = 15;
let d = 2;
let result = c * d;
console.log(`Пример №4: ${result}`);
// Пример №5
//  Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
let a05 = 10;
let b05 = 2;
let c05 = 5;
let sum05 = a05 + b05 + c05;
console.log(`Пример №5: ${sum05}`);

// Пример №6
//  Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
//  Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат 
//  запишите в переменную result. Выведите на экран значение переменной result.
let a06 = 17;
let b06 = 10
let c06 = a06 - b06;
let d06 = 7;
let result06 = c06 + d06;
console.log(`Пример №6: ${result06}`);
// Пример №7
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, (Имя)!'.
let name = 'Tanya';
console.log(`Привет, ${name}!`);
// Пример №8
// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне (Возраст) лет!'.
let age = 42;
console.log(`Мне ${age} года!`);
// Пример №9
// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите 
// на экран символ 'a', символ 'c', символ 'e'.
let str = 'abcde';
console.log(`Пример №9: ${str[0]}, ${str[2]}, ${str[4]}`);
//Пример №10
// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
let secondsHour = 60 * 60;
let secondsDay = secondsHour * 24;
let secondsMonth = secondsDay * 30;
console.log(`Kоличество секунд в часе: ${secondsHour}, Kоличество секунд в сутках: ${secondsDay}, Kоличество секунд в месяце: ${secondsMonth}`);
//Пример №11
//Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. 
// Количество строк кода при этом не должно измениться.
let num = 47;
//num += 7;
// num -= 18;
// num *= 10;
num /= 15;
console.log(num);

// Пример №12
// Переделайте этот код так, чтобы в нем использовались операции ++ и --. 
// Количество строк кода при этом не должно измениться.
let num12 = 10;
num12++;
// num12++;
// num12--;
console.log(num12);