import printForm from "./printFiles.js";
import renderImages from "./renderAssets.js";

const formButton = document.querySelector(".form-button");

formButton.addEventListener("click", printForm)

// Used for rendering images from ./assets/manifest.json
// renderImages();