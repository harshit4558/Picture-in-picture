const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass it to video element then play
async function selectMediaStream() {
    try {
        const media = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = media;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log("whoops error");
    }

}

button.addEventListener("click", async () => {
    // disable button on click
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});



selectMediaStream();