$( document ).ready(function(){

    var wins = 0;
    var losses = 0;
    var guess = 0;
    var total = Math.floor((Math.random()*100)+19);
    var ruby = Math.floor((Math.random()*12)+1);
    var saphir = Math.floor((Math.random()*12)+1);
    var diamond = Math.floor((Math.random()*12)+1);
    var emerald = Math.floor((Math.random()*12)+1);

    console.log(total);

    function reset(){
        var total = Math.floor((Math.random()*100)+19);
        var ruby = Math.floor((Math.random()*12)+1);
        var saphir = Math.floor((Math.random()*12)+1);
        var diamond = Math.floor((Math.random()*12)+1);
        var emerald = Math.floor((Math.random()*12)+1);
        guess = 0;
        $('.total').text(total);
        $('#current-score').text(guess);
    };

    function game(){
        if (total === guess){
            wins++;
            $('#wins').text(wins);
            $('#current-score').text(guess);
            reset();
        }
        if (total < guess){
            losses++;
            $('#losses').text(losses);
            $('#current-score').text(guess);
            reset();
        }

    };

    $('.total').text(total);

    $('#white').on('click', function(){
        guess = guess + diamond;
        $('#current-score').text(guess);
        game();
    });
    
    $('#red').on('click', function(){
        guess = guess + ruby;
        $('#current-score').text(guess);
        game();
    });
    
    $('#green').on('click', function(){
        guess = guess + emerald;
        $('#current-score').text(guess);
        game();
    });
    
    $('#blue').on('click', function(){
        guess = guess + saphir;
        $('#current-score').text(guess);
        game();
    });
    
});