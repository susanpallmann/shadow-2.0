$(document).ready(function() {
    
    var childPos = $('#character').offset();
    var parentPos = $('#character').parent().offset();
    var childOffset = {
        top: childPos.top - parentPos.top,
        left: childPos.left - parentPos.left
    }

});
