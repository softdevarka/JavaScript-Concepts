//Constant
const name = "Code With Arka";
//console.log(name);

// The const keyword allows you to declare a constant (a JavaScript variable with a constant value).

// Constants are similar to let variables, except that the value cannot be changed.

function letExample() {
  //The let keyword allows you to declare a variable with block scope.
  let age = 28;
  {
    let age = 14;
    console.log(age);
  }
  console.log(age);
}

letExample();
