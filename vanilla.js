$(document).ready(function() {
    
    // Below focuses view on where character currently is by adjusting the position of the game element within the canvas element
    // TODO: Right now this depends on the #game element being twice the size of the canvas and aligning to the same aspect ratio
    //       We're going to need to refactor this to fit any level size since it's not decided yet how that will look.
    function updateScroll() {
        
        // Get height/width of player (#character)
        let charWidth = $('#character')[0].getBoundingClientRect().width;
        let charHeight = $('#character')[0].getBoundingClientRect().height;
        
        // Get position of player
        let childPos = $('#character').offset();
        
        // Get position of game element (#game)
        let parentPos = $('#character').parent().offset();
        
        // Math to work out precisely how far the center of the player is from the top-left corner of the #game element
        // End result is a fraction (should be less than 1 and more than 0)
        let childOffset = {
            top: (childPos.top + charHeight/2 - parentPos.top)/$('#game')[0].getBoundingClientRect().height,
            left: (childPos.left + charWidth/2 - parentPos.left)/$('#game')[0].getBoundingClientRect().width
        }
        
        // Math to translate fraction from previous step to a scale of 100 to -100 for use translating #game element
        // -100 range is further right/down, 100 is left/up (weird, but it works, so)
        var newLeft = ((childOffset.left*200)-100)*-1;
        var newTop = ((childOffset.top*200)-100)*-1;
        
        // Updates element CSS to reflect the new position, centering the player within the #canvas viewport
        $('#game').css('left', newLeft + '%');
        $('#game').css('top', newTop + '%');
        
    }
    
    // Calling on initial load
    updateScroll();
    
    // Calling again when the screen is resized
    $(window).resize(function() {
        updateScroll();
    });
    
    
    
    
    // Below is an attempt at movement
    
    let playerXSpeed = 7;
    let gravity = 30;
    let jumpSpeed = 17;
    
    // When player presses "D" key
    // Check if this movement would cause a collision
    // If not, step

    $(document).bind('keydown', function(e) {
        console.log('key pressed');
        if (e.keyCode == 68) {
            console.log('D pressed');
            // press the letter D
            let currentLeft = $('#character').css('left');
            $('#character').css('left', (currentLeft + 20) + 'px');
            //updateScroll();

        } else if (e.keyCode == 65) {
            //press the letter A
            let currentLeft = $('#character').css('left');
            $('#character').css('left', (currentLeft - 20) + 'px');
            //updateScroll();
        }
        return false;
    });

});
