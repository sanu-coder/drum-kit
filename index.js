// document.querySelector("button").addEventListener("click", handleclic);
// document.getElementsByTagName("button")[0].addEventListener("click", handleclic);
// document.getElementsByTagName("button")[1].addEventListener("click", handleclic);
// document.getElementsByTagName("button")[2].addEventListener("click", handleclic);
// document.getElementsByTagName("button")[3].addEventListener("click", handleclic);
// document.getElementsByTagName("button")[4].addEventListener("click", handleclic);
// document.getElementsByTagName("button")[5].addEventListener("click", handleclic);
// document.getElementsByTagName("button")[6].addEventListener("click", handleclic);

for (var i = 0; i < document.getElementsByTagName("button").length; i++) {
    document.getElementsByTagName("button")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        makesound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}
document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHtml);
            break;
    }
}

function buttonAnimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}