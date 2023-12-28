// Add an event listener to the blackboard
const blackboard = document.getElementById('blackboard');

// Define the sound file path (update with your sound file)
const soundFilePath = 'path/to/your/sound/file.mp3';

// Create an audio element
const audio = new Audio(soundFilePath);

// Function to play the sound
function playSound() {
  audio.play();
}

// Add the mousemove event listener
blackboard.addEventListener('mousemove', playSound);
