$(document).ready(function() {
    
    // Okay fine. We tried doing this from scratch but we don't have the background info we need to do it well.
    // This tutorial guy can code circles around me (and does), so I'm going to take his word for it.
    // The single condition is I must comment his code and be 100% sure I understand everything I am doing.
    // I do not use code I don't understand. Doing that always breaks everything.
    // So without further ado, the tutorial from this URL: https://eloquentjavascript.net/16_game.html
    
    // Example level
    // Levels must be fully rectangular for this to work (all lines must be the same length)
    // . = empty
    // # = wall
    // + = lava
    // @ = character
    // o = coin
    // = = sideways moving lava
    // v = dripping lava
    // | = up/down moving lava
    let simpleLevelPlan = `
        ......................
        ..#................#..
        ..#..............=.#..
        ..#.........o.o....#..
        ..#.@......#####...#..
        ..#####............#..
        ......#++++++++++++#..
        ......##############..
        ......................`;
    
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
        constructor(pos, speed) {
            
            // Has position and speed properties
            // TODO: May want to add more properties down the road with evolution in mind,
            //       if this is the right place to do so?
            this.pos = pos;
            this.speed = speed;
        }
        
        // This answers the level constructor's check for type
        // TODO: I'm guessing this will be in all element class constructors
        get type() { 
            return "player";
        }
        
        // TODO: I think this creates the player when the game is first started and isn't used again
        // Initial position is set to be 1/2 square unit above its starting place because the character 
        // is 1.5 units tall
        static create(pos) {
            return new Player(pos.plus(new Vec(0, -0.5)),
                              new Vec(0, 0));
        }
    }
    
    // Since size isn't changing, we're storing this on the prototype rather than the instance
    // TODO: May need to change this if game mechanics decide to change size
    Player.prototype.size = new Vec(0.8, 1.5);
    
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
        ".": "empty", "#": "wall", "+": "lava",
        "@": Player, "o": Coin,
        "=": Lava, "|": Lava, "v": Lava
    };
    
    // Stores a level object, using a string like the above as the argument to be read
    class Level {
        constructor(plan) {
            
            // Trims whitespace before/after plan, then splits on new line (\n) to create rows
            // Maps these rows to create arrays of characters
            // Rows then holds an array of arrays of characters; it is all of the rows
            let rows = plan.trim().split("\n").map(l => [...l]);
            console.log(rows);
            
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
                    console.log(ch);
                    this.startActors.push(
                        type.create(new Vec(x, y), ch));
                    return "empty";
                });
            });
            
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
    
    // How we create a Level instance (this doesn't display anything, and currently time/motion don't exist)
    let simpleLevel = new Level(simpleLevelPlan);
    console.log(`${simpleLevel.width} by ${simpleLevel.height}`);
    
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
        //TODO: elt is here too
        return elt("div", {}, ...actors.map(actor => {
            let rect = elt("div", {class: `actor ${actor.type}`});
            rect.style.width = `${actor.size.x * scale}px`;
            rect.style.height = `${actor.size.y * scale}px`;
            rect.style.left = `${actor.pos.x * scale}px`;
            rect.style.top = `${actor.pos.y * scale}px`;
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
    
});
