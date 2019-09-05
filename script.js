$.getJSON('http://api.icndb.com/jokes/random', function(data){
let output = ""
$.each(data, function(key, val){
        output = val.joke;
    });
    $(`#chiste`).html(output);
});


$(boton).click(function (e) { 
    e.preventDefault();
    $.getJSON('http://api.icndb.com/jokes/random', function(data){
let output = ""
$.each(data, function(key, val){
        output = val.joke;

    });
    $(`#chiste`).html(output);
});


});


