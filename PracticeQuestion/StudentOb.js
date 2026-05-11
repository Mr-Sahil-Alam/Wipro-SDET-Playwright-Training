//Create an object for a student and display all properties dynamically.
let student = {
  name: "Sahil",
  age: 22,
  course: "JavaScript"
};

for (let key in student) {

  console.log(key + " : " + student[key]);

}