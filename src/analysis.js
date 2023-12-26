import { salaries } from "./salariesList";

const findPerson = (name) => salaries.find((item) => item.name === name);

const median = (list) => {
  const sortedList = [...list].sort((a, b) => a - b);
  return sortedList.length % 2 !== 0
    ? sortedList[Math.floor(sortedList.length / 2)]
    : (sortedList[Math.floor(sortedList.length / 2) - 1] +
        sortedList[Math.floor(sortedList.length / 2)]) /
        2;
};

const medianPerPerson = (personeName) =>
  median(findPerson(personeName).trabajos.map((item) => item.salario));

// console.log(medianPerPerson("Juanita"));

// Projection per Person
const projectionPerPerson = (personName) => {
  const works = findPerson(personName).trabajos;
  const growthPercentages = works.slice(1).map((work, i) => {
    const pastSalary = works[i].salario;
    const growth = work.salario - pastSalary;
    return growth / pastSalary;
  });

  const increase = works[works.length - 1].salario * median(growthPercentages);

  return Math.floor(works[works.length - 1].salario + increase);
};

// console.log(projectionPerPerson("Juanita"));

const company = {};

salaries.forEach((person) =>
  person.trabajos.forEach((work) => {
    company[work.empresa] ??= {};
    company[work.empresa][work.year] ??= [];
    company[work.empresa][work.year].push(work.salario);
  })
);
// console.log(company);

// Projection per company
const medianPerCompany = (name, year) => {
  if (!company[name]) return console.log("The company doesn't exist");
  if (!company[name][year])
    return console.log("the company did not provide salaries");
  return median(company[name][year]);
};

// console.log(medianPerCompany("Industrias Mokepon", 2020));

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

//Top 10% de salarios

const medianTop10Percent = () => {
  const medianList = salaries
    .map((person) => medianPerPerson(person.name))
    .sort((a, b) => a - b);

  return medianList.slice(-Math.floor(medianList.length * 0.1)).reverse();
};

// console.log(medianTop10Percent());
