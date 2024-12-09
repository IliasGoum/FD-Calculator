function calculateMaturityAmount(){

    //get input value from the forme elements

    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // perform the calculation 

    const maturityAmount = principle + (principle * interestRate * tenure)/100;

    // Display the Result 

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;

}

// Attach the event listener to the calculate Button
document.getElementById('calculatBtn').addEventListener('click' ,calculateMaturityAmount);