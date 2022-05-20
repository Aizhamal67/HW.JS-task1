// 1. Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'
let replacementSymbol = "aaa@bbb@ccc";
console.log(replacementSymbol.replace(/@/g, "!"));

// 2. Дана строка 'js'. Сделайте из нее строку 'JS'.
const upperCaseText = "js";
console.log(upperCaseText.toUpperCase());

// 3.Дана строка 'JS'. Сделайте из нее строку 'js'.
const lowerCaseText = "JS";
console.log(lowerCaseText.toLowerCase());

// 4. Дана строка'I am a hero!'. Выведите в консоль количество символов в этой строке.
const numberSymbol = "I am a hero!";
console.log(numberSymbol.length);

// 5.Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены ***** например: "Номер вашей карты: **********1245"
const userCard = prompt("Номер вашей карты? (Выпуск 16)");
console.log(
  `Номер вашей карты- ${userCard
    .slice(0, 0)
    .concat("************")}${userCard.slice(12, 16)}`
);
