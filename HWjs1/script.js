//  1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере

let message = "Hello world!";
document.write(message);

//   2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение. Затем замените значение переменной другим сообщением и выведите новое сообщение

let mess1;

mess1 = "Jyldyz academy";
alert(mess1);

mess1 = "Kele4ek, Chyrak";
alert(mess1);

// 3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.

let data = "Aizhamal Samibaeva";
let mail = "aizhamal.samibaeva.kk@gmail.com";

alert(`My name: ${data}`);
alert(`E-mail: ${mail}`);

// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

let saleSuvenir = +prompt("Введите сколько сувениров собираетесь покупать?");
let saleBezdel = +prompt("Введите сколько безделушек собираетесь покупать?");

let a = saleSuvenir * 75;
let b = saleBezdel * 112;

alert(`Общий вес вашей посылки: ${a + b}гр`);

// 5. Создайте программу, которая запрашивает у пользователя два целых числа a и b, после чего выводит на экран результаты следующих математических операций:
// - сумма a и b;
// - разница между a и b;
// - произведение a и b;
// - частное от деления a на b;
// - остаток от деления a на b;
// - результат возведения числа a в степень b

let ab = +prompt("Введите целое число");
let ba = +prompt("Введите второе целое число");

alert(`Cумма a и b: ${a + b}`);
alert(`Разница между: ${a - b}`);
alert(`Произведение: ${a * b}`);
alert(`Частное от деления: ${a / b}`);
alert(`Остаток от деления: ${a % b}`);
alert(`Результат возведения числа a в степень b: ${a ** b}`);
