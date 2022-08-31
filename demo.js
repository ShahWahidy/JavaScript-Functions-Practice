//Define an arrow fucntion that returns square of a number



//Define a function that return the largest of two numbers 



// Define a function that returns the area of a circle after given a radius




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

// console.log(kitchen('dough', 'sauce', pizzaChef));
// console.log(kitchen('dough', 'sauce', pastaChef));