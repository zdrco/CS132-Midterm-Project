var button = document.getElementById("button");
var error = document.getElementById("error");
var ans = document.getElementById("answer");
var deci;
var digitGroupingCheckbox = document.getElementById("digit-grouping");
var resetButton = document.getElementById("reset-button");
var textBox = document.getElementById("textbox");
var ans = document.getElementById("answer");
var swapButton = document.getElementById("swap-button");
var fromDropdown = document.getElementById("from");
var toDropdown = document.getElementById("to");
var textBox = document.getElementById("textbox");
var ans = document.getElementById("answer");

button.onclick = function () {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var input = document.getElementById("textbox").value.trim();

  if (from == to) {
    error.textContent = "⚠️Select different number system";
    setTimeout(() => (error.textContent = ""), 3000);
  } else if (input == "") {
    error.textContent = "⚠️Enter the value";
    setTimeout(() => (error.textContent = ""), 3000);
  } else {
    if (from == "decimal") {
      if (/^[0-9]+$/.test(input)) {
        deci = Number(input);
        switch (to) {
          case "binary":
            ans.textContent = deci.toString(2);
            break;
          case "octal":
            ans.textContent = deci.toString(8);
            break;
          case "hexadecimal":
            ans.textContent = deci.toString(16).toUpperCase();
            break;
          default:
            break;
        }
      } else {
        error.textContent = "⚠️Enter the valid input";
        setTimeout(() => (error.textContent = ""), 3000);
      }
    } else if (from == "binary") {
      if (/^[0-1]+$/.test(input)) {
        deci = parseInt(input, 2);
        switch (to) {
          case "decimal":
            ans.textContent = deci;
            break;
          case "octal":
            ans.textContent = deci.toString(8);
            break;
          case "hexadecimal":
            ans.textContent = deci.toString(16).toUpperCase();
            break;
          default:
            break;
        }
      } else {
        error.textContent = "⚠️Enter the valid input";
        setTimeout(() => (error.textContent = ""), 3000);
      }
    } else if (from == "octal") {
      if (/^[0-7]+$/.test(input)) {
        deci = parseInt(input, 8);
        switch (to) {
          case "decimal":
            ans.textContent = deci;
            break;
          case "binary":
            ans.textContent = deci.toString(2);
            break;
          case "hexadecimal":
            ans.textContent = deci.toString(16).toUpperCase();
            break;
          default:
            break;
        }
      } else {
        error.textContent = "⚠️Enter the valid input";
        setTimeout(() => (error.textContent = ""), 3000);
      }
    } else {
      if (/^[0-9A-F]+$/.test(input.toUpperCase())) {
        deci = parseInt(input, 16);
        switch (to) {
          case "decimal":
            ans.textContent = deci;
            break;
          case "binary":
            ans.textContent = deci.toString(2);
            break;
          case "octal":
            ans.textContent = deci.toString(8);
            break;
          default:
            break;
        }
      } else {
        error.textContent = "⚠️Enter the valid input";
        setTimeout(() => (error.textContent = ""), 3000);
      }
    }
  }

  var isDigitGroupingEnabled = digitGroupingCheckbox.checked;
  if (isDigitGroupingEnabled) {
  
    ans.textContent = addDigitGrouping(ans.textContent);
  }
};

// ---- EVENT LISTENERS ----

digitGroupingCheckbox.addEventListener("change", function () {
  var isDigitGroupingEnabled = this.checked;
  if (isDigitGroupingEnabled) {

    ans.textContent = addDigitGrouping(ans.textContent);
  } else {
  
    ans.textContent = removeDigitGrouping(ans.textContent);
  }
});

resetButton.addEventListener("click", function () {

  textBox.value = "";

  ans.textContent = "";
});

swapButton.addEventListener("click", function () {
 
  var temp = fromDropdown.value;
  fromDropdown.value = toDropdown.value;
  toDropdown.value = temp;

  textBox.value = "";

  ans.textContent = "";
});

textBox.addEventListener('paste', function(event) {

    event.preventDefault();
  
    var pastedText = (event.clipboardData || window.clipboardData).getData('text');
  
    var cleanedText = cleanPastedText(pastedText);

    this.value = cleanedText;
  });

// ---- FUNCTIONS ----

function addDigitGrouping(numberString) {
  return numberString.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
}

function removeDigitGrouping(numberString) {
  return numberString.replace(/ /g, "");
}

function cleanPastedText(text) {

    return text.replace(/\s+/g, '').replace(/,/g, '');
  }

function copyText() {
    var resultText = document.getElementById("answer");
  
    var range = document.createRange();
    range.selectNode(resultText);
  
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
  
    document.execCommand("copy");
  
    window.getSelection().removeAllRanges();
}
  

  
