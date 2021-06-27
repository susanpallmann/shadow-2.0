$(document).ready(function() {
    
    let charWidth = $('#character').getBoundingClientRect().width;
    let charHeight = $('#character').getBoundingClientRect().height;
    let childPos = $('#character').offset();
    let parentPos = $('#character').parent().offset();
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
