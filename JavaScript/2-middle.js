'use strict';

const adder = (initial = 0) => ({  // если убрать круглые скобки, будет блок операторов, а так обьект
  value: initial,
  steps: [initial],          // значение массив
  add(value) {
    this.steps.push(value);
    this.value += value;
    return this;             // Вернет ссылку на этот же объект
  }
});

const Adder = class {         // Классы с большой буквы
  constructor(initial = 0) {  // Конструктор функция внутри класса, которая возвращает только объект
    this.steps = [initial];
    this.value = initial;
  }

  add(value) {
    this.steps.push(value);
    this.value += value;
    return this;
  }
};

// Usage

{   // Вложенный блок операторов, возможно в пределах фигурных скобок создать переменную с таким же идентификатором (использовать одну и ту-же переменную с разными)

  const { value, steps } = adder(5).add(-8).add(11); // У переменной два оператора - деструктивное присвоение
  console.log(value);
  const [a, b, c] = steps;
  console.log(a, b, c);          // Нельзя отобразить только одну переменную, т. к. у нас три значения
}

{
  const { value, steps } = new Adder(5).add(-8).add(11); // Создание нового класса
  console.log(value);
  const [a, b, c] = steps;
  console.log(a, b, c);
}
