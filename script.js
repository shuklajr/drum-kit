var numberOfButtons = document.querySelectorAll('.button').length;

for(var i=0;i<numberOfButtons;i++)
{
    document.querySelectorAll('.button')[i].addEventListener("click",function(){
        var buttonStyle = this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
});

function sound(key) {
    switch(key){
        case "w":
            var sound1 = new Audio("sounds/tom-1.mp3");
            sound1.play();
            break;
        case "a":
            var sound1 = new Audio("sounds/tom-2.mp3");
            sound1.play();
            break;
        case "s":
            var sound1 = new Audio("sounds/tom-3.mp3");
            sound1.play();
            break;
        case "d":
            var sound1 = new Audio("sounds/tom-4.mp3");
            sound1.play();
            break;
        case "j":
            var sound1 = new Audio("sounds/snare.mp3");
            sound1.play();
            break;
        case "k":
            var sound1 = new Audio("sounds/crash.mp3");
            sound1.play();
            break;
        case "l":
            var sound1 = new Audio("sounds/kick-bass.mp3");
            sound1.play();
            break;
        default:
            console.log(key);
    }
}

function animation(currentKey){
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("animation");

    setTimeout(function(){
        activeButton.classList.remove("animation");
    })
}