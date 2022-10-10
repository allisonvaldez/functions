console.log("works")

/*
1: Difference: this function takes in two parameters and returns the difference of the two;
*/
console.log(`1. difference();`);

function difference(numOne, numTwo) {
    return numOne - numTwo;
}

console.log(difference(2,2));
console.log(difference(0, 2));

/*
2: Product: this function takes in two parameters and returns the product of the two;
*/
console.log(`2. product();`);

function product(x, y) {
    return x * y;
}

console.log(product(2,2));
console.log(product(0, 2));

/*
3: PrintDay: this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
*/
console.log(`3. printDay();`);

function printDay(num) {
    
    let days = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday",
    };

    return days[num];
}

console.log(printDay(4));
console.log(printDay(41));

/*
4: LastElement: this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
*/
console.log(`4. lastElement();`);

function lastElement(array) {
    
    return array[array.length - 1];

}

console.log(lastElement([1, 2, 3, 4]));
console.log(lastElement([]));

/*
5: NumberCompare: this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”. If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”
*/
console.log(`5. numberCompare();`);

function numberCompare(a, b) {
    if (a > b) {
        return console.log("First is greater");
    }
    else if (a < b) {
        return console.log("Second is greater");
    }
    else {
        return console.log("Numbers are equal");
    }
}

console.log(numberCompare(1, 1));
console.log(numberCompare(2, 1));
console.log(numberCompare(1, 2));

/*
6: SingleLetterCount: this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
*/
console.log(`6. singleLetterCount();`);

function singleLetterCount(word, char) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }
    return count;

}

console.log(singleLetterCount("amazing", "A"));
console.log(singleLetterCount("Rithm School", "o"));

/*
7: MultipleLetterCount: this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
*/
console.log(`7. multipleLetterCount();`);

function multipleLetterCount(string) {
    
}





/*
8: : 
*/
console.log(`8. `);

/*
9: 
*/
console.log(`9. `);