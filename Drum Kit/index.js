var len = document.querySelectorAll(".drum").length;


//button pressed
function addSound(){
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}
for (var a = 0; a < len; a++){
    document.querySelectorAll(".drum")[a].addEventListener("click", addSound);
}

//key pressed
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


//actual function
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
        break;

        case "j":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
        break;

        case "k":
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
        break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
        break;

        default:console.log(buttonInnerHtml)    
    }
}


function buttonAnimation(keyPressed){
    var buttonPressed = document.querySelector("."+ keyPressed);
    buttonPressed.classList.add("pressed");

    setTimeout(function() {
        buttonPressed.classList.remove("pressed");}, 100);
}
