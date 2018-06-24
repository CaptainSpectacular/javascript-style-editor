$(document).ready(function(){
    var selector = $("input[name='selector']");
    var property = $("input[name='property']");
    var value    = $("input[name='value']");

    changeStyle(selector, property, value);
});

const changeStyle = (selector, property, value) => {
    $('#style_editor').submit(function() {
        $(selector.val()).css(property.val(), value.val());
        event.preventDefault();
    });
};

