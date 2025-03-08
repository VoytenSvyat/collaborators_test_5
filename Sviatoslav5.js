// 5. Сортировка массива по количеству делителей числа (feature/sort-by-divisors)

// Функция для подсчета количества делителей числа
function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    return count;
}

// Функция для сортировки массива по количеству делителей
function sortByDivisors(numbers) {
    return numbers.sort((a, b) => countDivisors(a) - countDivisors(b));
}

// Пример использования
const numbers = [10, 15, 8, 3, 6];
const sortedNumbers = sortByDivisors(numbers);

function compare(a, b) {
    return a - b;
  }
  
sortedNumbers.sort(compare);
  
console.log(sortedNumbers);
