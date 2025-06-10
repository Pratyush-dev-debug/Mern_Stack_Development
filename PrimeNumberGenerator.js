function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generatePrimes() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const resultBox = document.getElementById('result');
    resultBox.value = "";

    if (isNaN(start) || isNaN(end) || start > end) {
        alert("Please enter valid start and end values!");
        return;
    }

    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) primes.push(i);
    }

    resultBox.value = primes.join(", ");
}