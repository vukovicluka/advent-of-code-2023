import {syncReadFile} from "../utils/syncReadFile.js";

const letterDigits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function program() {
    const inputArray = syncReadFile('./input.txt');
    const numberValues = []

    for (let i = 0; i < inputArray.length; i++) {
        const element = inputArray[i];
        const chars = [...element]

        const numbers = []
        for (let j = 0; j < chars.length; j++) {
            const char = chars[j];
            const isNumber = !isNaN(parseInt(char))
            if (isNumber) {
                numbers.push(char);
            } else {
                const threeLetterChar = char + chars[j + 1] + chars[j + 2];
                const letterDigit = letterDigits.find(digit => digit.startsWith(threeLetterChar));
                if (letterDigit) {
                    const letterDigitValue = letterDigits.indexOf(letterDigit) + 1;
                    numbers.push(letterDigitValue);
                }
            }
        }

        const twoDigitNumber = [numbers.at(0), numbers.at(-1)].join("")
        numberValues.push(parseInt(twoDigitNumber));
    }

    const sum = numberValues.reduce((accum, number) => accum + number, 0)
    console.log(sum);
}

program();