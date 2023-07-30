
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