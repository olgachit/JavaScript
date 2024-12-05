//Example
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelection = document.getElementById('operation');
const start = document.getElementById('start');
const result = document.getElementById('result');

start.addEventListener('click', function () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelection.value;

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = 'Result: Please enter valid numbers.';
        return;
    }

    let answer;
            switch (operation) {
                case 'add':
                    answer = num1 + num2;
                    break;
                case 'subtract':
                    answer = num1 - num2;
                    break;
                case 'multiply':
                    answer = num1 * num2;
                    break;
                case 'divide':
                    if (num2 === 0) {
                        result.textContent = 'Result: Division by zero is not allowed.';
                        return;
                    }
                    answer = num1 / num2;
                    break;
                default:
                    result.textContent = 'Result: Invalid operation.';
                    return;
            }
            result.textContent = `Result: ${answer}`;
        });