var css = document.querySelector(".cssText");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.querySelector(".top");

var colorPicker = () => {
    body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")",
    
    css.value = body.style.background;

    body.style.backgroundPosition = "center center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundSize = "cover";
}

function myFunction() {
    var copyText = document.querySelector(".cssText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
    
  }

color1.addEventListener("input", colorPicker);

color2.addEventListener("input", colorPicker);