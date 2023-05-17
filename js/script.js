$(document).ready(function() {
    $("#formOne").submit(function(event) {
        const colorInput = $("input#color").val();
        const foodInput = $("input#food").val();
        const clothInput = $("input#cloth").val();
        const shoeInput = $("input#shoe").val();
        const carInput = $("input#car").val();
        const movieInput = $("input#movie").val();
        const songInput = $("input#song").val();

        const favoriteThings = [colorInput, foodInput, clothInput, shoeInput, carInput, movieInput, songInput ];


    //    document.getElementById("user").innerHTML =  favoriteThings;
        const newThings = [ favoriteThings[1], favoriteThings[0], favoriteThings[2] ];
        $("ul#user").append("<li>" + newThings[0] + "</li>");
        $("ul#user").append("<li>" + newThings[1] + "</li>");
        $("ul#user").append("<li>" + newThings[2] + "</li>");

        event.preventDefault();
    });
});