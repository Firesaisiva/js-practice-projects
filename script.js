(function() {
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clearButton = document.querySelector('.btn-clear');
  let equalButton = document.querySelector('.btn-equal');
  let operator = '';
  let num1 = '';
  let num2 = '';

  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          let value = button.getAttribute('data-num');
          if (value === '+' || value === '-' || value === '*' || value === '/') {
              operator = value;
              num1 = screen.value;
              screen.value = '';
          } else if (value === '=') {
              num2 = screen.value;
              screen.value = calculate(num1, operator, num2);
          } else if (value === 'C') {
              screen.value = '';
              num1 = '';
              num2 = '';
              operator = '';
          } else {
              screen.value += value;
          }
      });
  });

  function calculate(num1, operator, num2) {
      let result = 0;
      switch (operator) {
          case '+':
              result = parseFloat(num1) + parseFloat(num2);
              break;
          case '-':
              result = parseFloat(num1) - parseFloat(num2);
              break;
          case '*':
              result = parseFloat(num1) * parseFloat(num2);
              break;
          case '/':
              result = parseFloat(num1) / parseFloat(num2);
              break;
      }
      return result;
  }
})();