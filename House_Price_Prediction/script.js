function calculatePrice() {
    const squareFeet = document.getElementById('squareFeet').value.trim();
    const rooms = document.getElementById('rooms').value.trim();
    const age = document.getElementById('age').value.trim();
    const resultElement = document.getElementById('result');
    const loader = document.getElementById('loader');

    // Validation
    if (!squareFeet || !rooms || !age) {
        resultElement.textContent = 'Please fill in all fields';
        resultElement.style.color = 'red';
        applyFadeIn(resultElement);
        return;
    }

    if (isNaN(squareFeet) || isNaN(rooms) || isNaN(age)) {
        resultElement.textContent = 'Please enter valid numeric values';
        resultElement.style.color = 'red';
        applyFadeIn(resultElement);
        return;
    }

    if (squareFeet <= 0 || rooms <= 0 || age < 0) {
        resultElement.textContent = 'Values must be positive and age cannot be negative!';
        resultElement.style.color = 'red';
        applyFadeIn(resultElement);
        return;
    }

    // Show Loader
    resultElement.textContent = '';
    loader.style.display = 'block';

    // Simulate Calculation Delay
    setTimeout(() => {
        // Calculation
        const predictedPrice = (squareFeet * 3000) + (rooms * 50000) - (age * 1000);
        resultElement.textContent = 'Predicted House Price: INR ' + predictedPrice.toLocaleString();
        resultElement.style.color = '#ffd700';

        // Hide Loader
        loader.style.display = 'none';
        applyFadeIn(resultElement);
    }, 1500); // Simulating a 1.5-second delay
}

// Function to apply fade-in animation
function applyFadeIn(element) {
    element.style.opacity = 0;
    element.style.transition = 'opacity 0.8s ease-in-out';
    setTimeout(() => {
        element.style.opacity = 1;
    }, 50);
}

// Function to clear form fields and result
function resetForm() {
    document.getElementById('squareFeet').value = '';
    document.getElementById('rooms').value = '';
    document.getElementById('age').value = '';
    const resultElement = document.getElementById('result');
    const loader = document.getElementById('loader');

    resultElement.textContent = '';
    loader.style.display = 'none';
}
