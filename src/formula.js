//formula básicas
const squareCalculator = (typeOfOperation, side) => {
  if (typeOfOperation === "perimeter") {
    return console.log(`perimeter of the square is ${side * 4}`);
  } else if (typeOfOperation === "area") {
    return console.log(`area of the square is ${side * side}`);
  } else {
    console.log("error");
  }
};

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

const isoscelesTriangleCalculator = (side, base) =>
  side == base
    ? console.log("error")
    : console.log(Math.sqrt(side ** 2 - base ** 2 / 4));

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
    console.log("error");
  }
};
