//location from appirance

var map = document.getElementById("map");
var from = document.getElementById("location-from");

map.addEventListener("click",()=>{
    from.classList.toggle('visible')
});

//dropdown card style

function toggleBorder() {
    var divElement = document.getElementById("dropdown-menu-item");

    // Check if the div has a border
    var hasBorder = divElement.style.border !== "";

    if (!hasBorder) {
        // If no border is set, add a border
        divElement.style.border = "4px solid #f3a847";
        // Add event listener to remove border when clicking anywhere on the document
        document.addEventListener("click", removeBorder);
    } else {
        // If the div has a border, remove it
        divElement.style.border = "";
        // Remove the event listener to stop further border removals
        document.removeEventListener("click", removeBorder);
    }
}

function removeBorder(event) {
    var divElement = document.getElementById("dropdown-menu-item");

    // Check if the click event occurred within the div
    if (!divElement.contains(event.target)) {
        // If click occurred outside the div, remove the border
        divElement.style.border = "";
        // Remove the event listener to stop further border removals
        document.removeEventListener("click", removeBorder);
    }
}

//search input style

function toggleBorderniput() {
    var divElement = document.getElementById("search-input");
    var Mybox = document.getElementById("search");

    // Check if the div has a border
    var hasBorder = Mybox.style.border !== "";

    if (!hasBorder) {
        // If no border is set, add a border
        Mybox.style.border = "4px solid #f3a847";
        // Add event listener to remove border when clicking anywhere on the document
        document.addEventListener("click", removeBorderall);
    } else {
        // If the div has a border, remove it
        Mybox.style.border = "";
        // Remove the event listener to stop further border removals
        document.removeEventListener("click", removeBorderall);
    }
}

function removeBorderall(event) {
    var divElement = document.getElementById("search");

    // Check if the click event occurred within the div
    if (!divElement.contains(event.target)) {
        // If click occurred outside the div, remove the border
        divElement.style.border = "";
        // Remove the event listener to stop further border removals
        document.removeEventListener("click", removeBorderall);
    }
}

//search button style
var hasBorder = false;

function toggleBorderbtn() {
    var divElement = document.querySelector(".serch-btn");

    if (!hasBorder) {
        // If no border is set, add a border to the div with the class "search-btn"
        divElement.style.border = "4px solid #f3a847";
        hasBorder = true;
    } else {
        // If a border is set, remove the border from the div with the class "search-btn"
        divElement.style.border = "";
        hasBorder = false;
    }
}

// Add event listener to remove border when clicking anywhere on the document
document.addEventListener("click", function (event) {
    var divElement = document.querySelector(".serch-btn");
    // Check if the click event occurred within the div
    if (!divElement.contains(event.target)) {
        // If click occurred outside the div, remove the border
        divElement.style.border = "";
        hasBorder = false;
    }
});

//slider main image

let sliderBtnLeft = document.getElementById("btn1")
let sliderBtnRight = document.getElementById("btn2")
var imgItem = document.querySelectorAll(".image-item");

console.log(imgItem.length - 1);

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100;

sliderBtnLeft.addEventListener("click", ()=>{
    if(startSlider < 0){
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
});

sliderBtnRight.addEventListener("click", ()=>{
    if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
});
// console.log(imageSlider)