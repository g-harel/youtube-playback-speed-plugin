document.addEventListener('DOMContentLoaded', () => {
    const number = document.querySelector('.speed');
    const slider = document.querySelector('input');

    const setValue = (value) => {
        number.innerHTML = Number(value).toFixed(1);
        console.log(value, slider);
        slider.value = value;
    }

    chrome.storage.sync.get('youtube-playback-speed', (value) => {
        value = value['youtube-playback-speed'] || 1;

        setValue(value);

        document.querySelector('input').oninput = (e) => {
            setValue(e.target.value);
            chrome.storage.sync.set({'youtube-playback-speed': e.target.value});
        }
    });
});
