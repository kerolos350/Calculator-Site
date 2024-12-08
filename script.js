var disp = document.getElementById("sum");
var openBrackets = 0;

function ChV(num) {
  const lastChar = disp.innerText.slice(-1);

  if (disp.innerText === "Error") {
    disp.innerText = "0"
  }

  if (lastChar === ")") {
    disp.innerText += "*";
  }

  if (disp.innerText === "0") {
    disp.innerText = num;
  } else {
    disp.innerText += num;
  }
}

function Op(op) {
  const lastChar = disp.innerText.slice(-1);

  if (disp.innerText === "Error") {
    disp.innerText = "0"
  }

  if (op === "sb") {
    if (openBrackets > 0 && (!isNaN(lastChar) || lastChar === ")")) {
      disp.innerText += ")";
      openBrackets--;
    } else {
      if (!isNaN(lastChar) || lastChar === ")") {
        disp.innerText += "*";
      }
      disp.innerText += "(";
      openBrackets++;
    }
  } else if (op === "AC") {
    disp.innerText = "0";
  } else if (op === "del") {
    if (disp.innerText === "Error" || disp.innerText === NaN || disp.innerText === "NaN") {
      disp.innerText = "0"
    } else {
      const deletedChar = disp.innerText.slice(-1);
      if (deletedChar === "(") openBrackets--;
      if (deletedChar === ")") openBrackets++;
      disp.innerText = disp.innerText.slice(0, -1) || "0";
    }
  } else if (op === "×") {
    disp.innerText += "*"
    disp.innerText = eval(disp.innerText);
  } else if (op === "÷") {
    disp.innerText += "/"
    disp.innerText = eval(disp.innerText);
  } else if (op === "=") {
    try {
      for (let i = 0; i < openBrackets; i++) {
        disp.innerText += ")";
      }
      openBrackets = 0;
      
      if (!isNaN(lastChar) || lastChar === ")") {
        disp.innerText = eval(disp.innerText);
      } else {
        disp.innerText = "Error";
      }
    } catch (error) {
      disp.innerText = "Error";
    }
  }else {
    if (!isNaN(lastChar) || lastChar === ")" || (op !== ")" && lastChar !== "(")) {
      disp.innerText += op;
    }
  }
}