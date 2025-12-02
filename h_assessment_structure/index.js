// const Field = require("./Field.js");
const prompt = require("prompt-sync")({ sigint: true });

// DONE: Game elements/assets constants
const GRASS = '░';
const HOLE = 'O';
const HAT = '^';
const PLAYER = '*';

// DONE: UP / DOWN / LEFT / RIGHT / QUIT keyboard constants
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

// DONE: MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_ QUIT / MSG_INVALID message constants
const MSG_UP = "You moved up.";
const MSG_DOWN = "You moved down.";
const MSG_LEFT = "You moved left.";
const MSG_RIGHT = "You moved right.";
const MSG_QUIT = "You quit the game.";
const MSG_INVALID = "Invalid entry";
const MSG_WELCOME = "\n\n  **************************\n   Welcome to Find your Hat\n  **************************\n";

// DONE: WIN / LOSE / OUT / QUIT messages constants
const WIN = "Congratulations. You won!";
const LOSE = "You fell into a hole. You lost!";
const OUT = "You went out-of-bounds. You lost!";

// DONE: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;
const COLS = 20;
const PERCENT = 0.2;


class Field {
  /**
   * 
   * DONE: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
   * @param {Array} field - field is passed in as an Array to populate the property field of this class' instance
   */
  constructor(field = null) {
    this.field = field;
    this.gamePlay = false;
    this.playerPosition = { x: 0, y: 0 };

  }

  // DONE: generateField is a static method, returning a 2D array of the fields
  /**
   * 
   * @param {Number} rows    - rows for the field
   * @param {Number} cols    - cols for the field
   * @param {Number} percent - percentage of field occupied randomly by holes
   * @returns {Array}        - 2D array to be used by the instance of the game
   */
  static generateField(rows = 8, cols = 8, percent = 0.1) {
    const map = new Array();

    for (let row = 0; row < rows; row++) {
      map[row] = new Array();

      for (let col = 0; col < cols; col++) {
        map[row][col] = Math.random() > percent ? GRASS : HOLE;
      }
    }
    return map;
  }

  /**
   * DONE: welcomeMessage is a static method, displays a string
   * 
   * @param {String} msg 
   */
  static welcomeMessage(msg = "") {
    console.log(msg);
  }

  // DONE: setHat positions the hat along a random x and y position within field array
  setHat() {
    const xHat = Math.floor(Math.random() * (ROWS - 1)) + 1;
    const yHat = Math.floor(Math.random() * (COLS - 1)) + 1;
    this.field[xHat][yHat] = HAT;
  }
  // DONE: printField displays the updated status of the field position
  printField() {
    this.field.forEach(row => {
      console.log(row.join(""));
    })
  }
  
  // TODO: updateMove displays the move (key) entered by the user
  updateMove(m = "") {
    if (m === UP) return console.log(MSG_UP);            // Tell user he move up
    if (m === DOWN) return console.log(MSG_DOWN);        // Tell user he move down
    if (m === LEFT) return console.log(MSG_LEFT);         // Tell user he move left
    if (m === RIGHT) return console.log(MSG_RIGHT);       // Tell user he move right
    if (m === QUIT) return console.log(MSG_QUIT);         // Tell user he quit the game
    return console.log(MSG_INVALID);                  // Tell user he entered an invalid value
  }

  /**
   * !! TODO: updateGame Assessment Challenge
   * @param {String} m accept the value of player's move (UP|DOWN|LEFT|RIGHT)
  */
  updateGame(m = "") {
    // capture the player's currX and currY postion first
    // update the field to show the player's new position
    // if the player x and y position is a HOLE
    //     LOSE
    //     process.exit();
    // if player x and y postion is out of the map
    //     LOSE
    //     process.exit();
    // if the player x and y position === x and y of the HAT (^)
    //     WIN
    //     process.exit();
    // otherwise, move the player to the new x and y position based on move
  }


  //  DONE: start() a public method of the class to start the game
  start() {
    this.gamePlay = true;
    this.field[0][0] = PLAYER;
    this.setHat();
    // this.printField();

    // track player's moves and update
    do {
      this.printField();
      const input = prompt("\n[W]up [S]down [A]left [D]right [Q]exit: ");

      switch (input.toLowerCase()) {
        case UP:
          this.updateMove(UP);
          break;
        case DOWN:
          this.updateMove(DOWN);
          break;
        case LEFT:
          this.updateMove(LEFT);
          break;
        case RIGHT:
          this.updateMove(RIGHT);
          break;
        case QUIT:
          this.updateMove(QUIT);
          break;
        default:
          this.updateMove();
          break;
      }

      if (input === QUIT) {
        this.gamePlay = false;
      }
    } while (this.gamePlay);
  }
}

// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);

// DONE: Generate a welcome message
Field.welcomeMessage(MSG_WELCOME);

// DONE: Create a new instance of the game
const game = new Field(gameField);

// DONE: Invoke method start(...) from the instance of game object
game.start()