function initialize(){
    var resultText = document.getElementById("resultText");
    var resultDescription = document.getElementById("resultDescription");
    var textInput = document.getElementById("textInput");
}

function retrieveAndFormat(){
    let input = textInput.value.replace(/\D/g,'');
    let result = getNumberInfo(input)
    if(result == null) return
    let resultString = ""
    resultString = "E" + result.number + " "
    if(result.vegan == -1) resultString += "is NOT vegan"
    if(result.vegan == 0) resultString += "might not be vegan"
    if(result.vegan == 1) resultString += "is vegan"
    resultText.innerHTML = resultString;
    resultDescription.innerHTML = result.description;
}

function clearText(){
    resultText.innerHTML = "";
    resultDescription.innerHTML = "";
}

window.addEventListener('load', function () {
    initialize();
    textInput.addEventListener("keyup", function(event) {
        clearText();
        retrieveAndFormat();
      }); 
      
})
