function changeColour(){
    var color = document.getElementById("container1")
    var input = document.getElementById("input1")
    color.style.backgroundColor = input.value;
    input.value = null;
}
