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
    
    // Stores a level object, using a string like the above as the argument to be read
    class Level {
        constructor(plan) {
            
            // Trims whitespace before/after plan, then splits on new line (\n) to create rows
            // Maps these rows to create arrays of characters
            // Rows then holds an array of arrays of characters; it is all of the rows
            let rows = plan.trim().split('\n').map(l => [...l]);
            
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
    
});
