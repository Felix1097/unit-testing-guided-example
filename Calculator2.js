function sum(a, b) {
    if (!a && !b) {
      return 0
    } else if(a && !b){
      return 0 + a
    } else if(!a && b){
      return 0 + b
    }
    return a + b
  }
  
  function subtract(a, b) {
    if (!a && !b){
      return 0
    }else if(a && !b){ 
      return a - 0
    }
    return a - b
  }
  
  function divide(a, b) {
    if (a && b){
      return a / b  
    }else {
      return error('No puedes dividir entre 0');
    }
  }
  
  
  
  function multiply(a, b) {
    return a * b;
  }
  
  // The following is required to make unit tests work. Please ignore it.
  module.exports = { sum, subtract, divide, multiply };
  /*
  function subtract(a,b){
    return a && b ? a - b : a ? a : b ? b : 0
  }
  
  */