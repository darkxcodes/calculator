var resultBox = document.querySelector("#result");
var keyPressed = "";
var n1,n2 ,oper;

function sum(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return n1+n2;
}
function subtract(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return n1-n2;
}
function multiply(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  return n1*n2;
}
function divide(n1,n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  var sub = '';
  if(n2 != '0'){
    sub = n1/n2;
  }else sub = "not defined";
  return sub;
}


function getNum(key) {
  switch (key) {
    case "1":
      keyPressed = "1";
      break;
    case "2":
      keyPressed = "2";
      break;
    case "3":
      keyPressed = "3";
      break;
    case "4":
      keyPressed = "4";
      break;
    case "5":
      keyPressed = "5";
      break;
    case "6":
      keyPressed = "6";
      break;
    case "7":
      keyPressed = "7";
      break;
    case "8":
      keyPressed = "8";
      break;
    case "9":
      keyPressed = "9";
      break;
    case "0":
      keyPressed = "0";
      break;
    
      case "+":

        n1 = resultBox.innerHTML;
        resultBox.innerHTML ="0";
        oper = "sum";
        break;
      case "-":
  
        n1 = resultBox.innerHTML;
        resultBox.innerHTML ="0";
        oper = "subtraction";
        break;
      case "*":
  
        n1 = resultBox.innerHTML;
        resultBox.innerHTML ="0";
        oper = "multiplication";
        break;
  
      case "/":
  
      n1 = resultBox.innerHTML;
      resultBox.innerHTML ="0";
      oper = "division";
      break;
  
        
      case "=":
        n2 = resultBox.innerHTML;
        result(oper,n1,n2);
        break;
  

    default:
      keyPressed = "";
      break;
  }
}

function result(operation,n1,n2) {
  if (operation == 'sum'){

    var answer = sum(n1,n2);
  }else if (operation == 'subtraction'){

    var answer = subtract(n1,n2);
  }else if (operation == 'multiplication'){

    var answer = multiply(n1,n2);
  }else if (operation == 'division'){

    var answer = divide(n1,n2);
  }

  resultBox.innerHTML = answer;
  resultBox.classList.add('resulted');
  

}

function writeVar(digit) {
  switch (digit) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      resultBox.innerHTML = resultBox.innerHTML + digit;
      break;
    case "+":

      n1 = resultBox.innerHTML;
      resultBox.innerHTML ="0";
      oper = "sum";
      break;
    case "-":

      n1 = resultBox.innerHTML;
      resultBox.innerHTML ="0";
      oper = "subtraction";
      break;
    case "*":

      n1 = resultBox.innerHTML;
      resultBox.innerHTML ="0";
      oper = "multiplication";
      break;

    case "/":

    n1 = resultBox.innerHTML;
    resultBox.innerHTML ="0";
    oper = "division";
    break;

      
    case "=":
      n2 = resultBox.innerHTML;
      result(oper,n1,n2);
      break;

    default:
      break;
  }
}

function check(){
  if(resultBox.innerHTML == '0'){
    resultBox.innerHTML='' 
  };
};  

var resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click",function(){
  n1,n2,oper,keyPressed = '';
  setTimeout(function(){
    resultBox.innerHTML ="0";
    resultBox.classList.remove('resulted');}
    ,200)
  
});

var buttons = document.querySelectorAll(".btn");
var noOfButtons = buttons.length;
for (var i = 0; i < noOfButtons; i++) {
  buttons[i].addEventListener("click", function () {
    var btnInnerHtml = this.innerHTML;
    // console.log(this.innerHTML);
    check();
    writeVar(btnInnerHtml);
  });

  var click = false;

  document.addEventListener("keydown", (e) => {
    if (click == false) {

      check();
      resultBox.classList.remove('resulted');
      keyPressed = "";
      click = true;
      console.log(e);
      getNum(e.key);
      document.addEventListener("keyup", function () {
        click = false;
      });
      resultBox.innerHTML = resultBox.innerHTML + keyPressed;
    }
  });
}
