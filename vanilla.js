$(document).ready(function() {
    
    let charWidth = $('#character').width();
    let charHeight = $('#character').height();
    let childPos = $('#character').offset();
    let parentPos = $('#character').parent().offset();
    let childOffset = {
        top: (childPos.top + charWidth/2 - parentPos.top)/$('#game').height()*2,
        left: (childPos.left + charHeight/2 - parentPos.left)/$('#game').width()*2
    }
    console.log(childOffset.top);
    console.log(childOffset.left);

    function updateScroll(positionLeft, positionTop) {
        
        var newLeft = ((positionLeft*200)-100)*-1;
        var newTop = ((positionTop*200)-100)*-1;
        
        $('#game').css('left', newLeft);
        $('#game').css('top', newTop);
        
    }
    
    updateScroll(childOffset.top, childOffset.left);
    
});
