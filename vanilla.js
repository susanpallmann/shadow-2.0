$(document).ready(function() {
    
    // Below focuses view on where character currently is by adjusting the position of the game element within the canvas element
    function updateScroll() {
        
        let charWidth = $('#character')[0].getBoundingClientRect().width;
        let charHeight = $('#character')[0].getBoundingClientRect().height;
        let childPos = $('#character').offset();
        let parentPos = $('#character').parent().offset();
        let childOffset = {
            top: (childPos.top + charHeight/2 - parentPos.top)/$('#game')[0].getBoundingClientRect().height,
            left: (childPos.left + charWidth/2 - parentPos.left)/$('#game')[0].getBoundingClientRect().width
        }
        
        var newLeft = ((childOffset.left*200)-100)*-1;
        var newTop = ((childOffset.top*200)-100)*-1;
        
        $('#game').css('left', newLeft + '%');
        $('#game').css('top', newTop + '%');
        
    }
    
    updateScroll();
    
    $(window).resize(function() {
        updateScroll();
    }
    
});
