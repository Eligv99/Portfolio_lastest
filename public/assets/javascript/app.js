function color(){

    console.log("hey")

    var name = $(".name");
    var background = $(".fadingAnimation");
    
    setInterval(function(){
        background.css('background-color', 'black');
        name.css('color', 'white');
    }, 900);

    setInterval(function(){
        background.css('background-color', 'white');
        name.css('color', 'black');
    }, 1800);

};

color();

