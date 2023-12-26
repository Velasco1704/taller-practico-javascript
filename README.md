# Taller Practico de JavaScript: Matemáticas y Estadística

## Formulas básicas en JavaScript

La funcion **squareCalculator** toma dos parámetros: **typeOfOperation** (tipo de operación) y **side** (lado del cuadrado):

- Si el **typeOfOperation** es igual a **perimeter** (perímetro), la función calcula el perímetro del cuadrado multiplicando el lado por 4.
- Si el **typeOfOperation** es igual a **area** (área), la función calcula el área del cuadrado multiplicando el lado por sí mismo (elevado al cuadrado).
- Si el **typeOfOperation** no coincide con ninguno de los casos anteriores, la función muestra "error" en la consola.

```js
const squareCalculator = (typeOfOperation, side) => {
  if (typeOfOperation === "perimeter") {
    return console.log(`perimeter of the square is ${side * 4}`);
  } else if (typeOfOperation === "area") {
    return console.log(`area of the square is ${side * side}`);
  } else {
    console.log("error");
  }
};
```

La funcion **triangleCalculator** toma cinco parámetros: **typeOfOperation** (tipo de operación), **sideOne** (lado uno del triángulo), **sideTwo** (lado dos del triángulo), **base** (base del triángulo) y **height** (altura del triángulo).

- Si el **typeOfOperation** es igual a **perimeter** (perímetro), la función calcula el perímetro del triángulo sumando los tres lados (**sideOne**, **sideTwo** y **base**).
- Si el **typeOfOperation** es igual a **area** (área), la función calcula el área del triángulo multiplicando la base por la altura y dividiendo el resultado por 2 ((**base** \* **height**) / 2).
- Si el **typeOfOperation** no coincide con ninguno de los casos anteriores, la función muestra "error" en la consola.

```js
const triangleCalculator = (
  typeOfOperation,
  sideOne,
  sideTwo,
  base,
  height
) => {
  if (typeOfOperation === "perimeter") {
    return console.log(
      `perimeter of the triangle is ${sideOne + sideTwo + base}`
    );
  } else if (typeOfOperation === "area") {
    return console.log(`area of the triangle is ${(base * height) / 2}`);
  } else {
    console.log("error");
  }
};
```

La funcion **isoscelesTriangleCalculator** toma dos parámetros: **side** (lado del triángulo isósceles) y **base** (base del triángulo isósceles).

- Si el **side** es igual a **base**, lo cual indicaría que el triángulo no es isósceles, la función muestra "error".
- Si el **side** no es igual a **base**, la función calcula la altura del triángulo isósceles utilizando la fórmula de la altura de un triángulo isósceles: Math.sqrt(side ** 2 - base ** 2 / 4). Luego, muestra el resultado.

```js
const isoscelesTriangleCalculator = (side, base) =>
  side == base
    ? console.log("error")
    : console.log(Math.sqrt(side ** 2 - base ** 2 / 4));
```

La funcion **calculatorScaleneTriangle** toma tres parámetros: **sideOne**, **sideTwo** y **sideTree** (los tres lados del triángulo escaleno).

- Si alguno de los lados es igual a otro lado, lo cual indicaría que el triángulo no es escaleno, la función muestra "error".
- Si ninguno de los lados es igual a otro lado, la función calcula el semiperímetro del triángulo utilizando la fórmula (**sideOne** + **sideTwo** + **sideTree**) / 2. Luego, calcula el área del triángulo utilizando la fórmula de Herón y muestra el resultado (redondeado hacia abajo utilizando Math.floor()).

```js
const calculatorScaleneTriangle = (sideOne, sideTwo, sideTree) => {
  if (sideOne == sideTwo || sideTwo == sideTree || sideTree == sideOne) {
    console.log("error");
  } else {
    const semiperimeter = (sideOne + sideTwo + sideTree) / 2;
    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - sideOne) *
        (semiperimeter - sideTwo) *
        (semiperimeter - sideTree)
    );

    return console.log(Math.floor((2 * area) / sideOne));
  }
};
```

La funcion **circleCalculator** toma dos parámetros: **typeOfOperation** (tipo de operación) y **radius** (radio del círculo).

- Primero, se calcula el radio al cuadrado utilizando Math.pow(**radius**, 2).
- Luego, se calcula el diámetro del círculo multiplicando el **radio** por 2.

A continuación, se realiza lo siguiente:

- Si el **typeOfOperation** es igual a **circumference** (circunferencia), la función calcula la circunferencia del círculo utilizando el diámetro y el valor de PI (Math.PI).
- Si el **typeOfOperation** es igual a **area** (área), la función calcula el área del círculo utilizando el radio al cuadrado y el valor de PI (Math.PI).
- Si el **typeOfOperation** no coincide con ninguno de los casos anteriores, la función muestra "Error" en la consola.

```js
const circleCalculator = (typeOfOperation, radius) => {
  const radiusSquared = Math.pow(radius, 2);
  const diameter = radius * 2;

  if (typeOfOperation === "circumference") {
    return console.log(
      `the circumference of the circle is ${diameter * Math.PI}`
    );
  } else if (typeOfOperation === "area") {
    return console.log(`the area of the circle is ${radiusSquared * Math.PI}`);
  } else {
    console.log("Error");
  }
};
```

## Math

El objeto **Math** en JavaScript es un objeto incorporado que proporciona propiedades y métodos para realizar operaciones y funciones matemáticas. Puedes considerarlo como una calculadora científica incorporada en JavaScript.

- **Math.abs(x)**: Devuelve el valor absoluto de x.

```js
const absoluteValue = Math.abs(-5);
console.log(absoluteValue); // Imprime 5
```

- **Math.ceil(x)**: Redondea hacia arriba al número entero más cercano mayor o igual a x.

```js
const roundedUp = Math.ceil(4.3);
console.log(roundedUp); // Imprime 5
```

- **Math.floor(x)**: Redondea hacia abajo al número entero más cercano menor o igual a x.

```js
const roundedDown = Math.floor(4.7);
console.log(roundedDown); // Imprime 4
```

- **Math.round(x)**: Redondea al número entero más cercano a x.

```js
const rounded = Math.round(4.5);
console.log(rounded); // Imprime 5
```

- **Math.max(x1, x2, ..., xn)**: Devuelve el valor más grande entre los argumentos x1, x2, ..., xn.

```js
const largestNumber = Math.max(10, 5, 8);
console.log(largestNumber); // Imprime 10
```

- **Math.min(x1, x2, ..., xn)**: Devuelve el valor más pequeño entre los argumentos x1, x2, ..., xn.

```js
const smallestNumber = Math.min(10, 5, 8);
console.log(smallestNumber); // Imprime 5
```

- **Math.pow(base, exponente)**: Devuelve la potencia de base elevada a exponente.

```js
const power = Math.pow(2, 3);
console.log(power); // Imprime 8
```

- **Math.sqrt(x)**: Devuelve la raíz cuadrada de x.

```js
const squareRoot = Math.sqrt(25);
console.log(squareRoot); // Imprime 5
```

- **Math.random()**: Devuelve un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo).

```js
const random = Math.random();
console.log(random); // Imprime un número aleatorio entre 0 y 1
```

- **Math.PI**: Devuelve el valor de Pi (aproximadamente 3.14159).

```js
console.log(Math.PI); // Imprime el valor de Pi
```

## Media, Moda y Mediana

![image](https://www.questionpro.com/blog/wp-content/uploads/2023/09/822-info-media-mediana-y-moda.jpg "image")

## Media

1. Se define una lista de números llamada numbersList que contiene varios valores numéricos.

2. Luego, se utiliza el método reduce() en numbersList para sumar todos los elementos de la lista. El método reduce() toma una función de reducción como argumento y aplica esa función a cada elemento de la lista, acumulando un valor resultante. En este caso, la función de reducción (a, b) => a + b suma los elementos a y b. El segundo argumento de reduce() es el valor inicial de la acumulación, que en este caso es 0.

3. Después de sumar todos los elementos de la lista, se divide el resultado por la longitud de la lista (numbersList.length) para obtener el promedio.

4. Finalmente, se utiliza la función Math.floor() para redondear el resultado hacia abajo al número entero más cercano. Esto asegura que el resultado sea un número entero en lugar de un número decimal.

```js
const numbersList = [123, 12, 323, 45, 5, 6765, 7, 546, 342];

const media = Math.floor(
  numbersList.reduce((a, b) => a + b, 0) / numbersList.length
);
```

## Mediana

1. Se define un array de números llamado numbersList que contiene varios valores numéricos.

2. Luego, se verifica si la longitud del array es impar (numbersList.length % 2 !== 0). Si es así, se toma el elemento en la posición central del array ordenado como la mediana. Para lograr esto, el array se ordena utilizando el método sort() con una función de comparación (a, b) => a - b, y luego se accede al elemento en la posición Math.floor(numbersList.length / 2).

3. Si la longitud del array es par, se toman los dos elementos en las posiciones centrales del array ordenado. Nuevamente, el array se ordena utilizando el método sort() y se accede a los elementos en las posiciones Math.floor(numbersList.length / 2 - 1) y Math.floor(numbersList.length / 2). Luego, se calcula el promedio de estos dos elementos utilizando el método reduce() y se divide por 2 para obtener la mediana.

```js
const numbersList = [100, 10, 20, 30, 40, 60];
const sortedList = [...numbersList].sort((a, b) => a - b);
const mediana =
  sortedList.length % 2 !== 0
    ? sortedList[Math.floor(sortedList.length / 2)]
    : (sortedList[Math.floor(sortedList.length / 2) - 1] +
        sortedList[Math.floor(sortedList.length / 2)]) /
      2;
```

## Moda

1. Se define una función llamada **calculateModa** que toma un parámetro **list**, que representa la lista de elementos para la cual se calculará la moda.

2. Se crea un objeto vacío llamado **listCount** para almacenar el recuento de cada elemento en la lista.

3. Se utiliza el método **.forEach()** para iterar sobre cada elemento de la lista. Dentro del bucle, se verifica si el elemento ya existe como una propiedad en el objeto **listCount**. Si es así, se incrementa su contador en 1. De lo contrario, se crea una nueva propiedad en **listCount** con el elemento y se establece su contador en 1.

4. Después de contar los elementos, se utiliza el método **Object.entries()** para convertir el objeto **listCount** en una matriz de pares clave-valor. Luego, se utiliza el método **.sort()** para ordenar la matriz en función del valor de conteo de cada elemento, de menor a mayor.

5. Finalmente, se devuelve el primer elemento de la matriz ordenada, que corresponde al elemento con el recuento más alto, es decir, la moda de la lista.

```js
const modaNumberList = [1, 1, 2, 4, 6, 6, 7, 7, "abc", "abc", "abc"];

const calculateModa = (list) => {
  const listCount = {};
  list.forEach((item) =>
    listCount[item] ? (listCount[item] += 1) : (listCount[item] = 1)
  );
  const orderedList = Object.entries(listCount).sort((a, b) => a[1] - b[1]);
  return orderedList[orderedList.length - 1][0];
};
```

## Análisis de salarios por persona

1. Se define una función llamada **projectionPerPerson** que toma un parámetro **personName**, que representa el nombre de la persona para la cual se calculará la proyección salarial.

2. Se utiliza la función **findPerson(personName)** para obtener la información de la persona, incluyendo sus trabajos. La variable **works** almacena la lista de trabajos de la persona.

3. Se utiliza el método **slice(1)** en la lista **works** para obtener una nueva lista que excluya el primer trabajo. Esto se hace para calcular los porcentajes de crecimiento entre trabajos consecutivos.

4. Se utiliza el método **map()** en la nueva lista **works.slice(1)** para iterar sobre cada trabajo y calcular los porcentajes de crecimiento. Dentro de la función de mapeo, se obtiene el salario anterior utilizando **works[i].salario**, donde **i** es el índice actual en el bucle. Luego, se calcula el crecimiento restando el salario actual (**work.salario**) del salario anterior. Finalmente, se devuelve el porcentaje de crecimiento dividiendo el crecimiento entre el salario anterior.

5. Se calcula el aumento multiplicando el último salario de la lista **works** por la mediana de los porcentajes de crecimiento. Esto se hace utilizando la función **median(growthPercentages)**.

6. Finalmente, se devuelve el resultado de la suma del último salario de la lista **works** y el aumento, redondeado hacia abajo utilizando **Math.floor()**.

En resumen, la función **projectionPerPerson** calcula la proyección salarial para una persona específica utilizando los trabajos registrados para esa persona. Calcula los porcentajes de crecimiento entre trabajos consecutivos, encuentra la mediana de los porcentajes de crecimiento y utiliza esa mediana para proyectar el salario futuro.

```js
const projectionPerPerson = (personName) => {
  const works = findPerson(personName).trabajos;
  const growthPercentages = [];

  works.forEach((work, i) => {
    if (i > 0) {
      const currentSalary = work.salario;
      const pastSalary = works[i - 1].salario;
      const growth = currentSalary - pastSalary;
      const percentageGrowth = growth / pastSalary;
      growthPercentages.push(percentageGrowth);
    }
  });

  const medianGrowthPercentages = median(growthPercentages);
  const lastSalary = works[works.length - 1].salario;
  const increase = works[works.length - 1].salario * medianGrowthPercentages;

  return Math.floor(lastSalary + increase);
};
```

## Análisis de salarios por compañía

1. Se define una función llamada **projectionPerCompany** que toma un parámetro name, que representa el nombre del negocio para el cual se calculará la proyección.

2. Se verifica si el negocio existe en la variable company utilizando **!company[name]**. Si el negocio no existe, se muestra un mensaje de error en la consola y la función se detiene.

3. Se utiliza **Object.keys(company[name])** para obtener las claves (años) de los datos del negocio en la variable **company**. Luego, se utiliza el método **map()** para iterar sobre cada año y llamar a la función **medianPerCompany(name, year)** para obtener la mediana de los datos del negocio para ese año. El resultado se almacena en la variable **listMedianYears**.

4. Se utiliza el método **slice(1)** en la lista **listMedianYears** para obtener una nueva lista que excluya el primer año. Esto se hace para calcular los porcentajes de crecimiento entre años consecutivos.

5. Se utiliza el método **map()** en la nueva lista **listMedianYears.slice(1)** para iterar sobre cada año y calcular los porcentajes de crecimiento. Dentro de la función de mapeo, se obtiene el año anterior utilizando **listMedianYears[i]**, donde **i** es el índice actual en el bucle. Luego, se calcula el crecimiento restando el año actual (**year**) del año anterior. Finalmente, se devuelve el porcentaje de crecimiento dividiendo el crecimiento entre el año anterior.

6. Se calcula el aumento multiplicando el último año de la lista **listMedianYears** por la mediana de los porcentajes de crecimiento. Esto se hace utilizando la función **median(growthPercentages)**.

7. Finalmente, se devuelve el resultado de la suma del último año de la lista listMedianYears y el aumento, redondeado hacia abajo utilizando **Math.floor()**.

En resumen, la función **projectionPerCompany** calcula una proyección para un negocio específico utilizando los datos registrados para ese negocio. Calcula los porcentajes de crecimiento entre años consecutivos, encuentra la mediana de los porcentajes de crecimiento y utiliza esa mediana para proyectar el valor futuro.

```js
const projectionPerCompany = (name) => {
  if (!company[name]) return console.log("The company doesn't exist");
  const listMedianYears = Object.keys(company[name]).map((year) =>
    medianPerCompany(name, year)
  );

  const growthPercentages = listMedianYears.slice(1).map((year, i) => {
    const pastYear = listMedianYears[i];
    const growth = year - pastYear;
    return growth / pastYear;
  });

  const increase =
    listMedianYears[listMedianYears.length - 1] * median(growthPercentages);

  return Math.floor(listMedianYears[listMedianYears.length - 1] + increase);
};
```

## Top 10% de salarios

1. Se define una función llamada **medianTop10Percent** sin parámetros.

2. Se utiliza el método **map()** en la lista salaries para iterar sobre cada elemento y llamar a la función **medianPerPerson(person.name)** para obtener la mediana de los salarios de cada persona. El resultado se almacena en la variable **medianList**.

3. Se utiliza el método **sort()** en la lista **medianList** para ordenar los salarios de forma ascendente. La función de comparación **(a, b) => a - b** se utiliza para ordenar de menor a mayor.

4. Se utiliza el método **slice()** en la lista medianList para obtener una nueva lista que contenga los últimos elementos correspondientes al top 10%. Esto se hace utilizando **medianList.slice(-Math.floor(medianList.length \* 0.1))**.

5. Se invierte el orden de la lista utilizando el método **reverse()** para obtener los elementos en orden de mayor a menor.

En resumen, la función **medianTop10Percent** calcula el top 10% de una lista de salarios utilizando la función **medianPerPerson()** para obtener las medianas de cada persona. Luego, ordena los resultados de menor a mayor y devuelve los últimos elementos en orden de mayor a menor.

```js
const medianTop10Percent = () => {
  const medianList = salaries
    .map((person) => medianPerPerson(person.name))
    .sort((a, b) => a - b);

  return medianList.slice(-Math.floor(medianList.length * 0.1)).reverse();
};
```
## Finalize este curso en 7h
