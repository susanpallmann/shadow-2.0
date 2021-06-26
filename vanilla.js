$(document).ready(function() {
    
    let charWidth = $('#character').width();
    let charHeight = $('#character').height();
    let childPos = $('#character').getBoundingClientRect();
    let parentPos = $('#character').parent().getBoundingClientRect();
    let childOffset = {
        top: (childPos.top + charHeight/2 - parentPos.top)/$('#game').height()*2,
        left: (childPos.left + charWidth/2 - parentPos.left)/$('#game').width()*2
    }
    console.log(childPos.top);
    console.log(childPos.left);

    function updateScroll(positionLeft, positionTop) {
        
        var newLeft = ((positionLeft*200)-100)*-1;
        var newTop = ((positionTop*200)-100)*-1;
        
        $('#game').css('left', newLeft + '%');
        $('#game').css('top', newTop + '%');
        
    }
    
    updateScroll(childOffset.top, childOffset.left);
    
});
