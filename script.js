const audio = document.getElementById('background-audio');
const toggleButton = document.getElementById('play-button');

toggleButton.addEventListener('change', () => {
		if (audio.paused) {
				audio.volume = 0.1; // Set volume
				audio.play(); // Play audio
		} else {
				audio.pause(); // Pause audio
		}
});
