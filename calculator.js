function sum(a, b) {
  return a && b ?  a + b : a ? a : b ? b : 0 
}

function subtract(a, b) {
  return a && b ? a - b : a ? a : b ? b : 0

}

function divide(a, b) {
  return a && b ? a / b : error('no puede dividir entre 0')
}



function multiply(a, b) {
  return  a && b ? a * b : a ? a : b ? b : 0
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };

