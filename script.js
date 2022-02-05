var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.querySelector(".top");

var colorPicker = () => {
    body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")",
    
    css.textContent = body.style.background;

    body.style.backgroundPosition = "center center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundSize = "cover";
}

color1.addEventListener("input", colorPicker);

color2.addEventListener("input", colorPicker);