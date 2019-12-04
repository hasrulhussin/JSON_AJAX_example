
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");


btn.addEventListener("click", function(){

        var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'json_sero_test.php');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };

    ourRequest.send();
});


function renderHTML(data){
    var htmlString = "";

    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes ";

        for (j = 0; j < data[i].foods.likes.length; j++){
            if (j == 0){
                htmlString += data[i].foods.likes[j]; 
            }else{
            htmlString += " and " + data[i].foods.likes[j]; 
            }
        }

        htmlString += ' and dislikes ';

        for (k = 0; k < data[i].foods.dislikes.length; k++){
            if (k == 0){
                htmlString += data[i].foods.dislikes[k]; 
            }else{
            htmlString += " and " + data[i].foods.dislikes[k]; 
            }
        }

        htmlString += '.</p>';
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}



