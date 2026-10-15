/* =================================
   ELLE'S BIRTHDAY WEBSITE
   FIRST SCREEN INTERACTIONS
================================= */

const openGiftButton = document.getElementById("open-gift");

openGiftButton.addEventListener("click", function () {

    // Change the button text when clicked
    openGiftButton.innerHTML = 'your gift awaits ♥';

    // Prevent repeated clicks for now
    openGiftButton.disabled = true;

    // Give the button a softer appearance
    openGiftButton.style.cursor = "default";
    openGiftButton.style.opacity = "0.8";

});
