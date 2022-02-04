//--------Ejercicio 1--------------

let date = new Date().toLocaleDateString();

console.log(`Today is: ${date}`);

//------------------Ejercicio 2--------------

class Persona {}

//-----------------Ejercicio 3-------------
class Persona {
  constructor() {
    (this.name = "Bob"),
      (this.lastName = "Dylan"),
      (this.date = "May 24, 1941");
  }
}

//------------Ejercicio 4---------------

class Persona {
  constructor(name, lastName, date) {
    (this.name = name), (this.lastName = lastName), (this.date = date);
  }
}

//--------------------Ejercicio 5---------

class Printer {
  printerTest() {
    return "Printer";
  }
}

let myPrinter = new Printer();
let testResult = myPrinter.printerTest();
console.log(testResult);

//--------------------Ejercicio 6-------------------

class Printer {
  constructor(model) {
    this.model = model;
  }
  printerTest() {
    return "Printer";
  }
  getModel() {
    return this.model;
  }
}

let myPrinter2 = new Printer("TX-200");
console.log(`The model of the printer is: ${myPrinter2.getModel()}`);

//--------------------Ejercicio 7-------------------

class Counter {
  constructor(counter) {
    this.counter = counter;
  }
  increaseOne() {
    return this.counter++;
  }
  decreaseOne() {
    return this.counter--;
  }
  getValue() {
    return this.counter;
  }
}

let contador = new Counter(0);

contador.increaseOne();
console.log(contador.getValue());

contador.increaseOne();
contador.increaseOne();
console.log(contador.getValue());

contador.decreaseOne();
contador.decreaseOne();
console.log(contador.getValue());

//---------------Ejercicio 8--------------

class Persona {
  constructor(name, lastName, date) {
    this.name = name;
    this.lastName = lastName;
    this.date = date;
  }

  getAge() {
    let ageDif = Date.now() - this.date.getTime();
    let ageDate = new Date(ageDif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  canDrink() {
    let age = this.getAge();
    if (age > 21) {
      return true;
    } else {
      return false;
    }
  }
}

let fecha1 = new Date("11/02/2002");
let persona1 = new Persona("Kevin", "Efraim", fecha1);
console.log(persona1.canDrink());

//--------------Ejercicio 9--------------------
