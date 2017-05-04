const player = document.getElementsByClassName('html5-main-video')[0];

const setPlayback = (value = 1) => {
    if (player) {
        player.playbackRate = Number(value).toFixed(1);
    }
}

chrome.storage.sync.get('youtube-playback-speed', (value) => {
   setPlayback(value['youtube-playback-speed']);
});

chrome.storage.onChanged.addListener((changes) => {
    setPlayback(changes['youtube-playback-speed'].newValue)
}); 
