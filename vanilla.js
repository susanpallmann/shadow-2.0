$(document).ready(function() {
    
    // Below focuses view on where character currently is by adjusting the position of the game element within the canvas element
    function updateScroll(positionLeft, positionTop) {
        
        let charWidth = $('#character')[0].getBoundingClientRect().width;
        let charHeight = $('#character')[0].getBoundingClientRect().height;
        let childPos = $('#character').offset();
        let parentPos = $('#character').parent().offset();
        let childOffset = {
            top: (childPos.top + charHeight/2 - parentPos.top)/$('#game')[0].getBoundingClientRect().height,
            left: (childPos.left + charWidth/2 - parentPos.left)/$('#game')[0].getBoundingClientRect().width
        }
        
        var newLeft = ((positionLeft*200)-100)*-1;
        var newTop = ((positionTop*200)-100)*-1;
        
        $('#game').css('left', newLeft + '%');
        $('#game').css('top', newTop + '%');
        
    }
    
    updateScroll(childOffset.left, childOffset.top);
    
    $(window).resize(function() {
        updateScroll(childOffset.left, childOffset.top);
    }
    
});
