let currentExpression = '';

function appendNumber(number) {
  currentExpression += number;
  console.log(currentExpression)
  document.getElementById('result').value = currentExpression;
}

function appendOperator(operator) {
  currentExpression += operator;
  document.getElementById('result').value = currentExpression;
}

function calculateResult() {
  try {
    const result = eval(currentExpression);
    document.getElementById('result').value = result;
    currentExpression = result.toString();
  } catch (error) {
    document.getElementById('result').value = 'Error';
    currentExpression = '';
  }
}

function clearResult() {
  currentExpression = '';
  document.getElementById('result').value = '';
}
