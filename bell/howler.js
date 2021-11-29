const sound = new Howl({
    src: ['audio/doorbell.mp3']
});

document.querySelector("#div1").addEventListener("click", e => sound.play() );
// HTML側に`<button id="button1" />`がある前提で
/*
const div1 = document.getElementById('div1').addEventListener('div1', (e) => {
    if (sound.playing()) {
        sound.stop();
        console.log('otoganaru')
    } else {
        sound.play();
    }
});
*/