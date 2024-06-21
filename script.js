// Function to create a promise that resolves with an array after 3 seconds
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to update the output div
function updateOutput(text) {
    document.getElementById('output').textContent = text;
}

// Start the promise chain
getNumbers()
    .then((numbers) => {
        // After 1 second, filter out odd numbers and update the output
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = numbers.filter(num => num % 2 === 0);
                updateOutput(evenNumbers.join(', '));
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // After another 2 seconds, multiply all even numbers by 2 and update the output
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubledNumbers = evenNumbers.map(num => num * 2);
                updateOutput(doubledNumbers.join(', '));
                resolve(doubledNumbers);
            }, 2000);
        });
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });