$(document).ready(function() {
    
    let charWidth = $('#character').width();
    let charHeight = $('#character').height();
    let childPos = $('#character').offset();
    let parentPos = $('#character').parent().offset();
    let childOffset = {
        top: childPos.top + charWidth/2 - parentPos.top,
        left: childPos.left + charHeight/2 - parentPos.left
    }
    console.log(childOffset.top);
    console.log(childOffset.left);

    function updateScroll(positionLeft, positionTop) {
        
        let charWidth = $('#character').width();
        let charHeight = $('#character').height();
        
        
    }
    
});
