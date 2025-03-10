// Фильтрация чисел, оставляя только простые (feature/filter-primes)

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function filterPrimes(numbers) {
    return new Promise((resolve, reject) => {
        try {
            const primes = numbers.filter(isPrime);
            resolve(primes);
        } catch (error) {
            reject('Произошла ошибка при фильтрации чисел');
        }
    });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

filterPrimes(numbers)
    .then(primes => {
        console.log('Простые числа:', primes);
    })
    .catch(error => {
        console.error(error);
    });
