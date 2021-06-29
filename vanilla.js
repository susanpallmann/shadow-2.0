// Okay fine. We tried doing this from scratch but we don't have the background info we need to do it well.
// This tutorial guy can code circles around me (and does), so I'm going to take his word for it.
// The single condition is I must comment his code and be 100% sure I understand everything I am doing.
// I do not use code I don't understand. Doing that always breaks everything.
// So without further ado, the tutorial from this URL: https://eloquentjavascript.net/16_game.html

// Example level
// Levels must be fully rectangular for this to work (all lines must be the same length)
// DO NOT indent this in GitHub's editor, it counts the spaces when the map is read lol
// . = empty
// # = wall
// * = grass
// + = lava
// @ = character
// o = coin
// = = sideways moving lava
// v = dripping lava
// | = up/down moving lava
// ~ = water
let gameLevels = [`                                                    
..................................................................###...........
...................................................##......##....##+##..........
....................................o.o......##..................#+++#..........
.................................................................##+##..........
...................................#####..........................#v#...........
............................................................................##..
..##......................................o.o................................#..
..#.....................o....................................................#..
..#..........****........................#####.............................o.#..
..#..........####.......o...***..............................................#..
..#..@..***..#..#~~~~~~~~~~~###..................................#####.......#..
..############..###############...####################.....#######...#########..
..............................#...#..................#.....#....................
..............................#+++#..................#+++++#....................
..............................#+++#..................#+++++#....................
..............................#####..................#######....................
................................................................................
................................................................................
`,`                                                                     
................................................................................
................................................................................
....###############################.............................................
...##.............................##########################################....
...#.......................................................................##...
...#....o...................................................................#...
...#................................................=.......................#...
...#.o........################...................o..o...........|........o..#...
...#.........................#..............................................#...
...#....o....................##########.....###################....##########...
...#..................................#+++++#.................#....#............
...###############....oo......=o.o.o..#######.###############.#....#............
.....#...............o..o.............#.......#......#........#....#............
.....#....................#############..######.####.#.########....########.....
.....#.............########..............#...........#.#..................#.....
.....#..........####......####...#####################.#..................#.....
.....#........###............###.......................########....########.....
.....#.......##................#########################......#....#............
.....#.......#................................................#....#............
.....###......................................................#....#............
.......#...............o...........................................#............
.......#...............................................o...........#............
.......#########......###.....############.........................##...........
.............#..................#........#####....#######.o.........########....
.............#++++++++++++++++++#............#....#.....#..................#....
.............#++++++++++++++++++#..........###....###...####.o.............#....
.............####################..........#........#......#.....|.........#....
...........................................#++++++++#......####............#....
...........................................#++++++++#.........#........@...#....
...........................................#++++++++#.........##############....
...........................................##########...........................
................................................................................
`,`
......................................#++#........................#######....................................#+#..
......................................#++#.....................####.....####.................................#+#..
......................................#++##########...........##...........##................................#+#..
......................................##++++++++++##.........##.............##...............................#+#..
.......................................##########++#.........#....................................o...o...o..#+#..
................................................##+#.........#.....o...o....................................##+#..
.................................................#+#.........#................................###############++#..
.................................................#v#.........#.....#...#........................++++++++++++++##..
.............................................................##..|...|...|..##............#####################...
..............................................................##+++++++++++##............v........................
...............................................................####+++++####......................................
...............................................#.....#............#######........###.........###..................
...............................................#.....#...........................#.#.........#.#..................
...............................................#.....#.............................#.........#....................
...............................................#.....#.............................##........#....................
...............................................##....#.............................#.........#....................
...............................................#.....#......o..o.....#...#.........#.........#....................
...............#######........###...###........#.....#...............#...#.........#.........#....................
..............##.....##.........#...#..........#.....#.....######....#...#...#########.......#....................
.............##.......##........#.o.#..........#....##...............#...#...#...............#....................
.....@.......#.........#........#...#..........#.....#...............#...#...#...............#....................
....###......#.........#........#...#..........#.....#...............#...#####...######......#....................
....#.#......#.........#.......##.o.##.........#.....#...............#.....o.....#.#.........#....................
++++#.#++++++#.........#++++++##.....##++++++++##....#++++++++++.....#.....=.....#.#.........#....................
++++#.#++++++#.........#+++++##.......##########.....#+++++++##+.....#############.##..o.o..##....................
++++#.#++++++#.........#+++++#....o.................##++++++##.+....................##.....##.....................
++++#.#++++++#.........#+++++#.....................##++++++##..+.....................#######......................
++++#.#++++++#.........#+++++##.......##############++++++##...+..................................................
++++#.#++++++#.........#++++++#########++++++++++++++++++##....+..................................................
++++#.#++++++#.........#++++++++++++++++++++++++++++++++##.....+..................................................
`,`
..............................................................................................................
..............................................................................................................
..............................................................................................................
..............................................................................................................
..............................................................................................................
........................................o.....................................................................
..............................................................................................................
........................................#.....................................................................
........................................#.....................................................................
........................................#.....................................................................
........................................#.....................................................................
.......................................###....................................................................
.......................................#.#.................+++........+++..###................................
.......................................#.#.................+#+........+#+.....................................
.....................................###.###................#..........#......................................
......................................#...#.................#...oooo...#.......###............................
......................................#...#.................#..........#......#+++#...........................
......................................#...#.................############.......###............................
.....................................##...##......#...#......#................................................
......................................#...#########...########..............#.#...............................
......................................#...#...........#....................#+++#..............................
......................................#...#...........#.....................###...............................
.....................................##...##..........#.......................................................
......................................#...#=.=.=.=....#............###........................................
......................................#...#...........#...........#+++#.......................................
......................................#...#....=.=.=.=#.....o......###.......###..............................
.....................................##...##..........#.....................#+++#.............................
..............................o...o...#...#...........#.....#................##v........###...................
......................................#...#...........#..............#.................#+++#..................
.............................###.###.###.###.....o.o..#++++++++++++++#...................v#...................
.............................#.###.#.#.###.#..........#++++++++++++++#........................................
.............................#.............#...#######################........................................
.............................##...........##.........................................###......................
..###.........................#.....#.....#.........................................#+++#................###..
..#.#.........................#....###....#..........................................###.................#.#..
..#...........................#....###....#######........................#####.............................#..
..#...........................#...........#..............................#...#.............................#..
..#...........................##..........#..............................#.#.#.............................#..
..#.......................................#.......|####|....|####|.....###.###.............................#..
..#................###.............o.o....#..............................#.........###.....................#..
..#...............#####.......##..........#.............................###.......#+++#..........#.........#..
..#...............o###o.......#....###....#.............................#.#........###..........###........#..
..#................###........#############..#.oo.#....#.oo.#....#.oo..##.##....................###........#..
..#......@..........#.........#...........#++#....#++++#....#++++#....##...##....................#.........#..
..#############################...........#############################.....################################..
..............................................................................................................
..............................................................................................................
`,`
..................................................................................................###.#.......
......................................................................................................#.......
..................................................................................................#####.......
..................................................................................................#...........
..................................................................................................#.###.......
..........................o.......................................................................#.#.#.......
.............................................................................................o.o.o###.#.......
...................###................................................................................#.......
.......+..o..+................................................#####.#####.#####.#####.#####.#####.#####.......
.......#.....#................................................#...#.#...#.#...#.#...#.#...#.#...#.#...........
.......#=.o..#............#...................................###.#.###.#.###.#.###.#.###.#.###.#.#####.......
.......#.....#..................................................#.#...#.#...#.#...#.#...#.#...#.#.....#.......
.......+..o..+............o..................................####.#####.#####.#####.#####.#####.#######.......
..............................................................................................................
..........o..............###..............................##..................................................
..............................................................................................................
..............................................................................................................
......................................................##......................................................
...................###.........###............................................................................
..............................................................................................................
..........................o.....................................................#......#......................
..........................................................##.....##...........................................
.............###.........###.........###.................................#..................#.................
..............................................................................................................
.................................................................||...........................................
..###########.................................................................................................
..#.........#.o.#########.o.#########.o.##................................................#...................
..#.........#...#.......#...#.......#...#.................||..................#.....#.........................
..#..@......#####...o...#####...o...#####.....................................................................
..#######.....................................#####.......##.....##.....###...................................
........#=..................=................=#...#.....................###...................................
........#######################################...#+++++++++++++++++++++###+++++++++++++++++++++++++++++++++++
..................................................############################################################
..............................................................................................................
`];

// Class to store 2-dimensional values, position and size of actors
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Method to add new x/y values to the current ones to reuse as needed
    // TODO: I'm guessing this method requires an object as its argument?
    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }

    // Method to multiply a factor value to the current ones to reuse as needed
    // Note this applies the same factor to both x and y
    times(factor) {
        return new Vec(this.x * factor, this.y * factor);
    }
}

// Class to store player actor
class Player {
    constructor(pos, speed, direction) {

        // Has position and speed properties
        // TODO: May want to add more properties down the road with evolution in mind,
        //       if this is the right place to do so?
        this.pos = pos;
        this.speed = speed;
        this.direction = direction;
    }

    // This answers the level constructor's check for type
    // TODO: I'm guessing this will be in all element class constructors
    get type() { 
        return "player";
    }

    // TODO: I think this creates the player when the game is first started and isn't used again
    // Initial position is set to be 1/2 square unit above its starting place because the character 
    // is 1.5 units tall
    static create(pos, direction) {
        return new Player(pos.plus(new Vec(0, -0.5)),
                          new Vec(0, 0), direction);
    }
}

// Since size isn't changing, we're storing this on the prototype rather than the instance
// TODO: May need to change this if game mechanics decide to change size
Player.prototype.size = new Vec(0.6, 1.5);

// Class to store lava actors (keeping in mind they can behave in three different ways
class Lava {
    constructor(pos, speed, reset) {
        this.pos = pos;
        this.speed = speed;
        this.reset = reset;
    }

    get type() {
        return "lava";
    }

    // Create sends parameters to constructor differently depending on which type of lava we're creating
    static create(pos, ch) {

        // Horizontally moving lava
        if (ch == "=") {

            // Horizontal speed (2, 0)
            return new Lava(pos, new Vec(2, 0));

        // Vertically moving lava that bounces
        } else if (ch == "|") {

            // Vertical speed (0, 2)
            return new Lava(pos, new Vec(0, 2));

        // Vertically moving lava that resets when it hits a solid block
        } else if (ch == "v") {

            // This lava has a reset point, pos
            // Vertical speed (0, 3)
            return new Lava(pos, new Vec(0, 3), pos);
        }
    }
}

// Like the player, size doesn't need to be stored on the instance since it shouldn't be changing
Lava.prototype.size = new Vec(1,1);

// Class to store grass actors
class Grass {
    constructor(pos) {
        this.pos = pos;
    }
    
    get type() {
        return "grass";
    }
    
    static create(pos) {
        return new Grass(pos);
    }
}

Grass.prototype.size = new Vec(1, 1);

// Class to store coin actors, now with more math!
class Coin {

    // Constructor has a basePos to aid with wobbling
    constructor(pos, basePos, wobble) {
        this.pos = pos;
        this.basePos = basePos;
        this.wobble = wobble;
    }

    get type() {
        return "coin";
    }

    static create(pos) {

        let basePos = pos.plus(new Vec(0.2, 0.1));

        // Okay I want to comment this one, but I just trust the dude's math
        // Random is to avoid coins moving in sync
        return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
    }
}

// Size doesn't change, storing in prototype rather than instance
Coin.prototype.size = new Vec(0.6, 0.6);

// levelChars object maps plan characters to their respective roles
// It's important that background items are strings, and actors are not
const levelChars = {
    ".": "empty", "#": "wall", "+": "lava", "~": "water",
    "@": Player, "o": Coin, "*": Grass,
    "=": Lava, "|": Lava, "v": Lava
};

// Stores a level object, using a string like the above as the argument to be read
class Level {
    constructor(plan) {

        // Trims whitespace before/after plan, then splits on new line (\n) to create rows
        // Maps these rows to create arrays of characters
        // Rows then holds an array of arrays of characters; it is all of the rows
        let rows = plan.trim().split("\n").map(l => [...l]);

        // Calculate height of the map by determining how many individual row arrays were stored in the rows variable
        this.height = rows.length;

        // Calculate width of the map by getting the length of one of those row arrays
        this.width = rows[0].length;

        // Initializing an array for actors (non-background items)
        this.startActors = [];

        // Next we're separating our moving, non-background items (actors) from the background
        // TODO: This code refers to some things that aren't implemented yet, revisit later to properly comment
        this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {

                // TODO: I think this runs a function to determine the type of background block the stored character is
                // It should return the name if it is a background block, and maybe otherwise returns null?
                let type = levelChars[ch];

                // TODO: If the type of the name returned above is a string, we put its name in the array we're mapping to
                if (typeof type == "string") return type;

                // TODO: If the type was not a string, we're assuming it's an actor and constructing the actor to push to our 
                //       startActors array
                // TODO: And since we know an actor is in that position, we determine the block it occupies to be empty and 
                //       put that in the mapping array
                this.startActors.push(
                    type.create(new Vec(x, y), ch, "right"));
                return "empty";
            });
        });

    }
}

// Check if position/size combination provided overlaps any element of provided type
Level.prototype.touches = function(pos, size, type) {
    
    // Gets all squares overlapped by the position (pos) provided
    let xStart = Math.floor(pos.x);
    let xEnd = Math.ceil(pos.x + size.x);
    let yStart = Math.floor(pos.y);
    let yEnd = Math.ceil(pos.y + size.y);
    
    // Loops through these squares by coordinates
    for (let y = yStart; y < yEnd; y++) {
        for (let x = xStart; x < xEnd; x++) {
            
            // Returns true if the pos overlaps any elements of the provided type (type)
            let isOutside = x < 0 || x >= this.width ||
                            y < 0 || y >= this.height;
            let here = isOutside ? "wall" : this.rows[y][x];
            if (here == type) return true;
        }
    }
}

// Stores an object to track the state of the game
// Given a Level object (from the above class), gets actors list from this object's property
// Status is starting as "playing", and will switch to "lost" or "won" when the game has ended
class State {
    constructor(level, actors, status) {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }

    static start(level) {
        return new State(level, level.startActors, "playing");
    }

    get player() {
        return this.actors.find(a => a.type == "player");
    }
}

// Overlap function to detect if two actors overlap (note that this is different from the touches function)
// This function deals with two actors instead of (presumably) an actor and a background block
function overlap(actor1, actor2) {
    
    // Evaluates to true if the actors touch each other
    return actor1.pos.x + actor1.size.x > actor2.pos.x &&
           actor1.pos.x < actor2.pos.x + actor2.size.x &&
           actor1.pos.y + actor1.size.y > actor2.pos.y &&
           actor1.pos.y < actor2.pos.y + actor2.size.y;
}

/* -------------------------------------------------------------------------------------------------- */
// Keeping collision methods together since this will be a very important place I add on to later
// Previously tried to keep prototype methods near their respective classes and constructors
// BEGIN COLLISIONS
/* -------------------------------------------------------------------------------------------------- */

// If player collides with lava, this method is called
Lava.prototype.collide = function(state) {
    
    // Updates game state to "lost"
    return new State(state.level, state.actors, "lost");
}

// If player collides with a coin, it removes the coin and possibly ends the game
Coin.prototype.collide = function(state) {
    let filtered = state.actors.filter(a => a != this);
    let status = state.status;
    
    // Updates game state to "won" if that was the last coin
    if (!filtered.some(a => a.type === "coin")) status = "won";
    return new State(state.level, filtered, status);
}

// If player walks through grass, console log for now TODO: change this
Grass.prototype.collide = function(state) {
    return new State(state.level, state.actors, state.status);
}

/* -------------------------------------------------------------------------------------------------- */
// Keeping actor update methods together because they depend on code that currently comes after their classes
// BEGIN ACTOR UPDATES
/* -------------------------------------------------------------------------------------------------- */

// Update Lava
Lava.prototype.update = function(time, state) {
    
    // Calculates new position based on time and speed
    let newPos = this.pos.plus(this.speed.times(time));
    
    // If the lava won't collide with a wall, moves to the new position
    if (!state.level.touches(newPos, this.size, "wall")) {
        return new Lava(newPos, this.speed, this.reset);
        
    // If the lava does collide and has a reset, it resets
    } else if (this.reset) {
        return new Lava(this.reset, this.speed, this.reset);
        
    // If neither of the above are true, lava inverts its speed to go the other way
    } else {
        return new Lava(this.pos, this.speed.times(-1));
    }
}

// Set constants for speed and distance of wobble
const wobbleSpeed = 8, wobbleDist = 0.07;

// Update Coin (used to wobble)
Coin.prototype.update = function(time) {
    
    // Calculates new position
    let wobble = this.wobble + time * wobbleSpeed;
    let wobblePos = Math.sin(wobble) * wobbleDist;

    // Updates Coin with new position
    return new Coin(this.basePos.plus(new Vec(0, wobblePos)),
                    this.basePos, wobble);
};

// Update Grass
Grass.prototype.update = function(time) {
    let newCount;
    if (this.interacting < 10 && this.interacting > 0) {
        newCount = this.interacting + 1;
    } else if (this.interacting == 10) {
        newCount = 0;
    } else {
        newCount = this.interacting;
    }
    return new Grass(this.pos, newCount);
}

/* -------------------------------------------------------------------------------------------------- */
// This is still an update, but it's the player update so it's getting its own fancy header
// BEGIN PLAYER UPDATES/MOVEMENT
/* -------------------------------------------------------------------------------------------------- */

// Starting with some constants for player speed/gravity/etc.
// TODO: We might want to change these later so they aren't constants given planned game mechanics
const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;

// Updates player based on key presses currently registered
Player.prototype.update = function(time, state, keys) {
    
    // Starts speed at 0
    let xSpeed = 0;
    
    // Stores new direction
    let direction = this.direction;
    
    // Current position
    let pos = this.pos;
    
    // Adds or subtracts speed based on which key was pressed
    if (keys.ArrowLeft) {
        let movedXTemp = xSpeed -= 0.2*playerXSpeed;
        if (state.level.touches(movedXTemp, this.size, "water")) {
            xSpeed -= 0.2*playerXSpeed;
            console.log(xSpeed + ' touched water');
        } else {
            xSpeed -= playerXSpeed;
            console.log(xSpeed + ' didnt touch water');
        }
        direction = "left";
    }
    if (keys.ArrowRight) {
        let movedXTemp = xSpeed += 0.2*playerXSpeed;
        if (state.level.touches(movedXTemp, this.size, "water")) {
            xSpeed += 0.2*playerXSpeed;
            console.log(xSpeed + ' touched water');
        } else {
            xSpeed += playerXSpeed;
            console.log(xSpeed + ' didnt touched water');
        }
        direction = "right";
    }

    // New position if move is successful
    let movedX = pos.plus(new Vec(xSpeed * time, 0));
    
    // Checks if new position would collide with a wall
    if (!state.level.touches(movedX, this.size, "wall")) {
        // If it does not, changes position to new position
        pos = movedX;
    }
    
    // Speed does not start at 0 due to gravity
    let ySpeed = this.speed.y + time * gravity;
    
    // New position if move is successful
    let movedY;
    movedY= pos.plus(new Vec(0, ySpeed * time * 0.5));
    
    if (state.level.touches(movedY, this.size, "water")) {
        movedY= pos.plus(new Vec(0, ySpeed * time * 0.5));
    } else {
        movedY= pos.plus(new Vec(0, ySpeed * time));
    }
    
    // Checks if new position would collide with a wall
    if (!state.level.touches(movedY, this.size, "wall")) {
        // If it does not, changes position to new position
        pos = movedY;
        
    // Otherwise, checks if up arrow is being pressed and we are moving down
    } else if (keys.ArrowUp && ySpeed > 0) {
        
        // Causes the player to jump
        ySpeed = -jumpSpeed;
        
    // If neither of the above, sets speed to 0 (so it collided with a wall)
    } else {
        ySpeed = 0;
    }
    return new Player(pos, new Vec(xSpeed, ySpeed), direction);
}

/* -------------------------------------------------------------------------------------------------- */
// Key tracking for player movement
// BEGIN KEY TRACKING
/* -------------------------------------------------------------------------------------------------- */

// Given array of keys, registers keyup/keydown listeners, this lets us change controls later I think
// TODO: Probably should document this more thoroughly but I'm getting really tired here
function trackKeys(keys) {
    let down = Object.create(null);
    function track(event) {
        if (keys.includes(event.key)) {
            down[event.key] = event.type == "keydown";
            event.preventDefault();
        }
    }
    window.addEventListener("keydown", track);
    window.addEventListener("keyup", track);
    return down;
}


const arrowKeys =
    trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);


// Updates state if player touches lava 
// TODO: May want to expand this to do other things later since lava isn't an endgame goal
State.prototype.update = function(time, keys) {
    
    // Regenerating our list of actors, getting current state, getting current level
    let actors = this.actors
        .map(actor => actor.update(time, this, keys));
    let newState = new State(this.level, actors, this.status);
    
    // If we're not playing, return whatever our current status is
    if (newState.status != "playing") return newState;
    
    let player =  newState.player;
    
    // Checks if player is touching lava
    if (this.level.touches(player.pos, player.size, "lava")) {
        // If so, new State is "lost"
        return new State(this.level, actors, "lost");
    }
    
    // For each actor
    for (let actor of actors) {
        
        // If a non-actor player overlaps player
        if (actor != player && overlap(actor, player)) {
            
            // Runs primary actor (non-player actor)'s collide method
            newState = actor.collide(newState);
        }
    }
    return newState;
}

// Helper function to create element with some given parameters
// TODO: Rename this, don't like "elt"
function elt(name, attrs, ...children) {

    let dom = document.createElement(name);

    // Loops through attributes provided and adds them as DOM attributes
    for (let attr of Object.keys(attrs)) {
        dom.setAttribute(attr, attrs[attr]);
    }

    // Loops through children and appends them to the element we're creating
    for (let child of children) {
        dom.appendChild(child);
    }

    // Returns created and customized HTML element
    return dom;
}

// Scale of one in-game unit in pixels
const scale = 64;

// Creating the background grid from level object
// We're drawing a table since our maps are grid-based
function drawGrid(level) {

    // TODO: elt is here
    // The table is given a background class and width is set to the width of the level times our 
    // scale from earlier
    // I would normally avoid inline styles at all costs, but I'd like game scale to stay centralized,
    // so it can live in javaScript in this case only
    return elt("table", {
        class: "background",
        style: `width: ${level.width * scale}px`

    // Its children are the rows, mapped to be table row elements (makes sense, right?), with heights 
    // of the scale
    }, ...level.rows.map(row =>
       elt("tr", {style: `height: ${scale}px`},

           // The children of the row arrays are mapped to td elements
           // TODO: I assume these will have the correct width automatically
           // Each is given a class that matches their type, easy styling for CSS :)
           ...row.map(type => elt("td", {class: type})))
    ));
}

// Creating DOM elements for each actor in the game
function drawActors(actors) {

    // TODO: elt is here too
    // Creates elements based on each actor's object properties, multiplied by game scale
    // Elements have their actor types as classes in addition to an "actor" class
    return elt("div", {}, ...actors.map(actor => {
        let actorType = actor.type;
        let rect;
        if (actorType == "player") {
            rect = elt("div", {class: `actor ${actor.type} ${actor.direction}`});
        } else {
            rect = elt("div", {class: `actor ${actor.type}`});
        }
        rect.style.width = `${actor.size.x * scale}px`;
        rect.style.height = `${actor.size.y * scale}px`;
        rect.style.left = `${actor.pos.x * scale}px`;
        rect.style.top = `${actor.pos.y * scale}px`;

        // Returns DOM element for each actor
        return rect;
    }));
}


// Creates display, when given an element to be appended to and a level object]
class DOMDisplay {
    constructor(parent, level) {

        // Calls method to draw grid, this is only generated once since it doesn't change
        // TODO: elt is here too, whenever you change it
        this.dom =  elt("div", {class: "game"}, drawGrid(level));

        // Used to track element holding actors so they can be removed/replaced
        this.actorLayer = null;
        parent.appendChild(this.dom);
    }

    // Removes display
    clear() { 
        this.dom.remove();
     }
}

// Moves the game so the player is in view
// Rather than always moving when the player moves, there's a margin of non-moving area
// and if the player goes beyond this, the game is scrolled to center on the player
DOMDisplay.prototype.scrollPlayerIntoView = function(state) {
    // Getting dimensions of the game
    let width = this.dom.clientWidth;
    let height = this.dom.clientHeight;
    // Margin for scrolling, changeable if we want more/less sensitivity to movement
    let margin = width / 6;

    // Getting viewport dimensions
    let left = this.dom.scrollLeft, right = left + width;
    let top = this.dom.scrollTop, bottom = top + height;

    // Getting center of player using our Vec object math methods
    let player = state.player;
    let center = player.pos.plus(player.size.times(0.5))
                         .times(scale);

    // Actual logic to determine if the game needs scrolled or not for x axis
    if (center.x < left + margin) {
    this.dom.scrollLeft = center.x - margin;
    } else if (center.x > right - margin) {
    this.dom.scrollLeft = center.x + margin - width;
    }
    
    // Actual logic to determine if the game needs scrolled or not for y axis
    if (center.y < top + margin) {
    this.dom.scrollTop = center.y - margin;
    } else if (center.y > bottom - margin) {
    this.dom.scrollTop = center.y + margin - height;
    }
};

// Makes display show a given state
DOMDisplay.prototype.syncState = function(state) {

    // Removes existing actor layer if there is one
    if (this.actorLayer) this.actorLayer.remove();

    // Redraws updated actor layer
    this.actorLayer = drawActors(state.actors);
    this.dom.appendChild(this.actorLayer);

    // Updates status class on wrapper div
    this.dom.className = `game ${state.status}`;

    // Scrolls player into view
    this.scrollPlayerIntoView(state);
}

/* -------------------------------------------------------------------------------------------------- */
// Running the game
// BEGIN GAME RUNNING
// TODO: Fix this commenting too; goodness I'm tired; I'm just going to paste these all in for now and
// comment tomorrow; good thing is it's not my code so I'm not going to forget what I already don't know
/* -------------------------------------------------------------------------------------------------- */

function runAnimation(frameFunc) {
    let lastTime = null;
    function frame(time) {
        if (lastTime != null) {
            let timeStep = Math.min(time - lastTime, 100) / 1000;
            if (frameFunc(timeStep) === false) return;
        }
        lastTime = time;
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

function runLevel(level, Display) {
    let display = new Display(document.body, level);
    let state = State.start(level);
    let ending = 1;
    return new Promise(resolve => {
        runAnimation(time => {
            state = state.update(time, arrowKeys);
            display.syncState(state);
            if (state.status == "playing") {
            return true;
            } else if (ending > 0) {
            ending -= time;
            return true;
            } else {
            display.clear();
            resolve(state.status);
            return false;
            }
        });
    });
}

async function runGame(plans, Display) {
    for (let level = 0; level < plans.length;) {
        let status = await runLevel(new Level(plans[level]),
                                    Display);
        if (status == "won") level++;
    }
    console.log("You've won!");
}
