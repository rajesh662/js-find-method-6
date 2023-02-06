
const employees = [
 { name: "David Carlson",age: 30 },
 
 { name: "John Cena", age: 34 },
 
 { name: "Mike Sheridan", age: 25 },
 
 { name: "John Carte", age: 50 }
];

let result3= employees.find(emply=>emply.name.includes("John"))

console.log(result3);
