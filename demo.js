//Define an arrow function that returns square of a number

const square = (a) => a * a;

//console.log(square(10));





//Define a function that return the largest of two numbers 

function largestNum (a , b){
    if( a > b) return a
    return b
}

//console.log(largestNum(20,40));


// Define a function that returns the area of a circle after given a radius

function areaOfCircle (r) {
    return (3.14 * (r * r)) 
}

console.log(areaOfCircle(5));



//Explain what is happening in the code below.

function kitchen(ing1, ing2, chefcb){
    return chefcb(ing1, ing2);
  }
  
  function pastaChef(ing1, ing2){
    return `I took ${ing1} and ${ing2} and I made you a 🍝`;
  }
  
  function pizzaChef(ing1, ing2){
     return `I took ${ing1} and ${ing2} and I made you a 🍕`;
  }

//console.log(kitchen('dough', 'sauce', pizzaChef));
console.log(kitchen('dough', 'sauce', pastaChef));