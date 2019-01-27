var recipeDiv = document.getElementById('recipe');

function randomTaco() {

    var request = new XMLHttpRequest();
    request.responseType = 'json';
    request.open("GET", "http://taco-randomizer.herokuapp.com/random/", true);
    request.onload = function () {
        var json = request.response;
        recipeDiv.innerHTML = "<p><strong>Seasoning</strong> " + json.seasoning.name + "</p>" + 
        "<p><strong>Base layer</strong> " + json.base_layer.name + "</p>" +
        "<p><strong>Mixin</strong> " + json.mixin.name + "</p>" +
        "<p><strong>Condiment</strong> " + json.condiment.name + "</p>" +
        "<p><strong>Shell</strong> " + json.shell.name + "</p>";
        console.log(json);
    };
    request.send(null);

}