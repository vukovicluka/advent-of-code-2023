import {syncReadFile} from "../utils/syncReadFile.js";

function program() {
    const inputArray = syncReadFile('./input.txt');

    // const possibleGameIds = []
    let minCubeSetSum = 0

    for (let i = 0; i < inputArray.length; i++) {
        const entry = inputArray[i];
        // let isValid = true
        let red = 0
        let green = 0
        let blue = 0

        const [game, set] = entry.split(":")
        // const [,gameId] = game.split(" ")

        const subsets = set.split(";")
        for (let j = 0; j < subsets.length; j++) {
            const subset = subsets[j]
            const cubeValues = subset.split(",")
            for (let n = 0; n < cubeValues.length; n++) {
                const cubeValue = cubeValues[n].trim();
                const [value, cube] = cubeValue.split(" ");

                const valueInt = parseInt(value);

                if (cube.trim() === "red" && valueInt > red) {
                    red = valueInt
                } else if (cube.trim() === "green" && valueInt > green) {
                    green = valueInt
                } else if (cube.trim() === "blue" && valueInt > blue) {
                    blue = valueInt
                }
                // check valid game
                // if (parseInt(value) > 12 && cube.trim() === "red" || parseInt(value) > 13 && cube.trim() === "green" || parseInt(value) > 14 && cube.trim() === "blue") {
                //     isValid = false
                // }
            }
        }
        const sum = red * green * blue
        minCubeSetSum += sum
        // if (isValid) {
        //     possibleGameIds.push(gameId)
        // }
    }
    // const sum = possibleGameIds.reduce((acc, id) => acc + parseInt(id), 0)
    console.log(minCubeSetSum);
}

program();