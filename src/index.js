// Get the rocket element
const rocket = document.getElementById("rocket");

// Track mouse movement
document.addEventListener("mousemove", (e) => {
    // Set the rocket position to follow the cursor
    rocket.style.left = `${e.pageX - 25}px`;
    rocket.style.top = `${e.pageY - 25}px`;
});
