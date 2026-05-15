import printForm from "./printFiles.js";
import renderImages from "./renderAssets.js";

const formButton = document.querySelector(".form-button");

formButton.addEventListener("click", printForm)

renderImages();