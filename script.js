function initialize(){
    var resultText = document.getElementById("resultText");
    var resultDescription = document.getElementById("resultDescription");
    var textInput = document.getElementById("textInput");
}

function retrieveAndFormat(){
    let input = textInput.value.replace(/\D/g,'');
    let result = getNumberInfo(input)
    let resultString = ""
    resultString = "E" + result.number + " "
    if(result.vegan == -1) resultString += "is NOT vegan"
    if(result.vegan == 0) resultString += "might not be vegan"
    if(result.vegan == 1) resultString += "is vegan"
    resultText.innerHTML = resultString;
    resultDescription.innerHTML = reesult.resultDescription;
}

window.addEventListener('load', function () {
    initialize();
    textInput.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          retrieveAndFormat();
        }
      }); 
})