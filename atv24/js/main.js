// <!-- Matheus Arcangelo Pestana -->

const audioUpload = document.getElementById('audio-upload');
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

audioUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        audio.src = url;
    }
});

playButton.addEventListener('click', function() {
    audio.play();
});

pauseButton.addEventListener('click', function() {
    audio.pause();
});

stopButton.addEventListener('click', function() {
    audio.pause();
    audio.currentTime = 0;
});