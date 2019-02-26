/*
Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

*/

function getSum(a,b){
  let total = 0
  if (a===b){
    return b
  }

  if (a < b){
    for (let i = a; i<=b; i++){
      total += i
    }
    return total
  }

  if (b < a){
    for (let i = b; i<=a; i++){
      total += i
    }
    return total
  }
}

// basically you have to first iterate threw the numbers to seee how many check to see if they are equal then if they are not se a condition fo if b is geater and then set a condition if a is greater.
