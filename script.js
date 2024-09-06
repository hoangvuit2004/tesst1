function moveSquare() {
    var square = document.getElementById("square");
    if (square.style.left === "0px" || square.style.left === "") {
        square.style.left = "calc(100% - 50px)";
    } else {
        square.style.left = "0px";
    }
}
