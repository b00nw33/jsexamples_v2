// Example of a 2D array

const array2D = [
    [3, 2, 7],
    [2, 9, 5],
    [5, 1, 5]
];

// console.log(array2D);

// accessing elements of a 2D array
const element = array2D[1][1];
// console.log("Element selected:", element);


// Create a 2D array of game tiles
const myField = [
    ['░', '░', 'O', '░'],
    ['*', 'O', '░', 'O'],
    ['░', '^', '░', '░'],
];

// console.log(myField);


const tileMap = [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1]
];

function genMap(rows=10, cols=20) {
    const array = [];

    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < cols; j++) {
            const element = '░';
            array[i][j] = element;
        }
    }

    array[5][10] = 'O';
    array[2][4] = '^';
    array[1][17] = '*';

    return array;
    return array;
}


function displayMap(map, shifter = 20) {
    const title = "--- Map of the World ---\n";

    console.log(" ".repeat(shifter), title);
    for (const row of map) {
        console.log(" ".repeat(shifter + 10), row.join(""));
    };
}

displayMap(myField);
displayMap(genMap())