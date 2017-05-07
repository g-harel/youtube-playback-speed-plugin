let player = null

const setPlayback = (value = 1) => {
    if (!player) {
        player = document.getElementsByClassName('html5-main-video')[0];
    }
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

window.addEventListener('click', () => {
    const id = setInterval(() => {
        chrome.storage.sync.get('youtube-playback-speed', (value) => {
            setPlayback(value['youtube-playback-speed']);
        });
        if (player) {
            clearInterval(id);
        }
    }, 100);
});
