let calculation = localStorage.getItem('calculation') || '';
            function backspace() {
                calculation = calculation.slice(0, -1);
                saveCalculation();
                updateDisplay();
}
            function saveCalculation() {
                localStorage.setItem('calculation', calculation)
            }
            function updateDisplay() {
                document.querySelector('.js-calculation').textContent = localStorage.getItem('calculation') || '0'
            }
            document.querySelector('.js-calculation').textContent = localStorage.getItem('calculation') || '0';
            function updateCalculator(value) {
                calculation += value;
                saveCalculation();
                updateDisplay();
            }
            function calculateResult() {
                try {
                    const result = Function('"use strict"; return (' + calculation + ')')();
                    calculation = result.toString();
                } catch (error) {
                    calculation = 'Error';
                    setTimeout(() => {
                        calculation = '';
                        updateDisplay();
                    }, 1000);
                }
                saveCalculation();
                updateDisplay();
            }
            function saveCalculation() {
                localStorage.setItem('calculation', calculation);
            }
            function updateDisplay() {
                const display = document.querySelector('.js-calculation');
                display.textContent = calculation || '0';
                if (calculation.length > 15) {
                    display.style.fontSize = '25px';
                } else {
                    display.style.fontSize = '35px';
                }
            }
            updateDisplay();