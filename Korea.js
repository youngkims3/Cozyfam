function disappearSquare() {
    var square = document.getElementById("square");
    var displayText = document.getElementById("displayText");

    // Add the "wipeEnter" class to trigger the animation
    square.classList.add("wipeEnter");

    // Add an event listener for the "transitionend" event
    square.addEventListener("transitionend", function () {
        // Hide the square
        square.style.display = "none";

        // Show the text
        displayText.style.display = "block";

        // Remove the "wipeEnter" class to reset the animation for potential replay
        square.classList.remove("wipeEnter");

        // Remove the event listener to avoid potential issues
        square.removeEventListener("transitionend", arguments.callee);
    });
}