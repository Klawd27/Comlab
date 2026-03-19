let currentIndex = 0;
const slides = document.querySelectorAll("#slideTrack img");
const totalSlides = slides.length;

// Function to move to a specific slide
function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateDisplay();
  resetTimer(); // Stop and restart the auto-timer on click
}

function updateDisplay() {
  const offset = -currentIndex * 100;
  document.getElementById("slideTrack").style.transform = `translateX(${offset}%)`;
}

// Automatic Sliding Logic
let autoScroll = setInterval(() => moveSlide(1), 5000); // Switches every 5 seconds

function resetTimer() {
  clearInterval(autoScroll);
  autoScroll = setInterval(() => moveSlide(1), 5000);
}