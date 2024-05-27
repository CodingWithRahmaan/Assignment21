document.getElementById('financeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get values from input fields
    var income = parseFloat(document.getElementById('income').value);
    var expenses = parseFloat(document.getElementById('expenses').value);

    // Calculate total
    var total = income - expenses;

    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // Clear previous result
    if (!isNaN(total)) {
        if (total > 0) {
            resultElement.innerHTML = 'You saved $' + total.toFixed(2) + ' this month.';
        } else if (total < 0) {
            resultElement.innerHTML = 'You overspent by $' + Math.abs(total).toFixed(2) + ' this month.';
        } else {
            resultElement.innerHTML = 'You broke even this month.';
        }
    } else {
        resultElement.innerHTML = 'Please enter valid numbers.';
    }
});
