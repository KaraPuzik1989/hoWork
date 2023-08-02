/* Задача с урока:
 1. Создайте функцию "meanScore",
 * которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов,
 * округленное до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом -
 * выводим в консоль следующую ошибку:
 * "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest",
 * так и оператор "spread".
 */

/*const meanScore = (...numbers) => {
  const AllNumbers = numbers.every((num) => typeof num === "number");
  if (!AllNumbers) {
    console.error("Все аргументы в вызове функции должны быть числами!");
    return;
  }

  const numericValues = numbers.filter((num) => typeof num === "number");
  const total = numericValues.reduce((sum, num) => sum + num, 0);
  const mean = total / numericValues.length;
  return Math.round(mean * 100) / 100;
};

const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ["abc", 1.3, true, 2.5, 1.9];

console.log(meanScore(...scores1));
// 1.93

console.log(meanScore(...scores1, ...scores2));
// 2.8

console.log(meanScore(...scores1, ...scores2, ...scores3));
// 2.59

console.log(meanScore(...scores4));
// Все аргументы в вызове функции должны быть числами!



/*  **Задание 1**
Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex". */

/*const names = ["Victor", "Nikolai", "Roman", "Sergei"];

let [a, b, ...arrayNames] = names;

console.log("Первое имя:", a);
if (b) {
  console.log("Второе имя:", b);
} else {
  b = "alex";
  console.log("Второе имя:", b);
}

console.log("Остальные имена:");
arrayNames.forEach((name) => {
  console.log(name);
});

/* **Задание 2**
Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива. */

/*function threeParameters(param1, param2, param3) {
  console.log("Параметр 1:", param1);
  console.log("Параметр 2:", param2);
  console.log("Параметр 3:", param3);
}
const names = ["Victor", "Nikolai", "Roman", "Sergei"];
threeParameters(...names);

/*  **Задание 3**
Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields. */

 /* const obj = {
  Age: "34",
  Name: "Sergei",
  Place: "Warszawa",
};
const { Age = 1, Name = 2, ...fields } = obj;
console.log(Age);
console.log(Name);
console.log(fields);
