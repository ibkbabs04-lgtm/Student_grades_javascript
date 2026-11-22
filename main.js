// Student Grade Calculator

//Student
const student = 
{
    name: "Bob",
    Math: 85,
    English: 92,
    Science: 78,
}
let average = (student.Math + student.English + student.Science) / 3;

console.log(`Student Name: ${student.name}`);
console.log(`Math Grade: ${student.Math}`);
console.log(`English Grade: ${student.English}`);
console.log(`Science Grade: ${student.Science}`);
console.log(`Average Grade: ${average.toFixed(2)}`);

if (average >= 90) 
    { console.log("Final Grade: A"); }
else if (average >= 80) 
    { console.log("Final Grade: B"); }
else if (average >= 70) 
    { console.log("Final Grade: C"); }
else if (average >= 60) 
    { console.log("Final Grade: D"); }
else
{console.log("Failed: F");}
