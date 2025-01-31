// JavaScript to make the rocket follow the cursor
document.addEventListener('mousemove', function (e) {
    const rocket = document.getElementById('rocket');
    const cursorX = e.clientX;
    const cursorY = e.clientY;
    
    // Move the rocket to the mouse position with an offset for better alignment
    rocket.style.left = `${cursorX - 15}px`;
    rocket.style.top = `${cursorY - 30}px`;
  });
  