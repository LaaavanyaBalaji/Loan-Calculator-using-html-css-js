function calculateLoan() {
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthlyPayment = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthlyPayment)) {
        document.getElementById('monthly-payment').textContent = `Monthly Payment:Rs. ${monthlyPayment.toFixed(2)}`;
        document.getElementById('total-payment').textContent = `Total Payment:Rs. ${(monthlyPayment * calculatedPayments).toFixed(2)}`;
        document.getElementById('total-interest').textContent = `Total Interest:Rs. ${((monthlyPayment * calculatedPayments) - principal).toFixed(2)}`;
        document.getElementById('Subscribe').innerHTML = ` <a href="#">Click here to decrease the EMI over years</a>`;

        document.getElementById('results').style.display = 'block';
    } else {
        document.getElementById('results').style.display = 'none';
        alert('Please check your input values');
    }
}
