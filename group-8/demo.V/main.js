function myFunction() {
  var sign= ["+","-","x",":"];
  var firstElement =  Math.floor(Math.random() * 10);
  var secElement =  Math.floor(Math.random() * 10);
  var operator = sign[Math.floor(Math.random()*4)];
  var rightAns;

  if (operator=="+") rightAns=firstElement+secElement;
  else if (operator=="-") rightAns=firstElement-secElement;
  else if (operator=="x") rightAns=firstElement*secElement;
  else if (operator==":")  {
    rightAns=firstElement/secElement;
    rightAns= rightAns.toFixed(2);
 }

  document.getElementById("Calculation").innerHTML =  firstElement + " " +
  operator + " " + secElement + " " + "=" + " " + rightAns;

  var rightAns;


  }

  
