
let valueDisplays = document.querySelectorAll(".counter_discount");

let interval = 2500; // Increased interval for slower transition


valueDisplays.forEach((valueDisplay) => {
let startValue = 50;
let endValue = parseInt(valueDisplay.getAttribute("data-val"));
let duration = Math.floor(interval / endValue);

let zoom = 1;
let counter = setInterval(function () {
startValue += 1;
// zoom = zoom * 1.02;
// valueDisplay.style.zoom = zoom;
if(startValue == 100){
    valueDisplay.textContent = 99;
}else{
    valueDisplay.textContent = startValue.toString().padStart(2, '0');
}

if (startValue >= endValue) {
  clearInterval(counter);
  var elements = document.querySelectorAll(".counter_discount");

    // Iterate through each element and add the "pulse" class
    elements.forEach(function(element) {
        
        //document.querySelector(".fc-primary").style.color("#ff6c00");
        element.classList.add("expandOpen");
        //element.classList.add("pulse");
    });
}
}, duration);

});

