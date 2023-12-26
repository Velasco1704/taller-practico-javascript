//Media

const numbersList = [100, 10, 20, 30, 40, 60];

const media = Math.floor(
  numbersList.reduce((a, b) => a + b, 0) / numbersList.length
);

console.log({ media });

// Mediana
const sortedList = [...numbersList].sort((a, b) => a - b);
const mediana =
  sortedList.length % 2 !== 0
    ? sortedList[Math.floor(sortedList.length / 2)]
    : (sortedList[Math.floor(sortedList.length / 2) - 1] +
        sortedList[Math.floor(sortedList.length / 2)]) /
      2;

console.log({ mediana });

//Moda
const modaNumberList = [1, 1, 2, 4, 6, 6, 7, 7, "abc", "abc", "abc"];

const calculateModa = (list) => {
  const listCount = {};
  list.forEach((item) =>
    listCount[item] ? (listCount[item] += 1) : (listCount[item] = 1)
  );
  const orderedList = Object.entries(listCount).sort((a, b) => a[1] - b[1]);
  return orderedList[orderedList.length - 1][0];
};

console.log({ moda: calculateModa(modaNumberList) });
