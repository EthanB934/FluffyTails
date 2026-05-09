import printForm from "./printFiles.js";
import renderImages from "./renderAssets.js";

const formButtons = document.querySelectorAll(".form-button");

for (let i = 0; i < formButtons.length; i++) {
    formButtons[i].addEventListener("click", printForm)
}

renderImages();