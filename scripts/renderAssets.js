export default async function renderImages() {
    const imageContainerEl = document.querySelector(".image-collection");

    const imagePromise = await fetch('../assets/images.json');
    const imageNestedObject = await imagePromise.json();
    const images = imageNestedObject.images

    let imgHtmlString = "";

    for (let i = 0; i < images.length; i++) {
        imgHtmlString += `<img 
        src="../assets/${images[i].fileName}"
        class="dog-image"
        />`
    }

    return imageContainerEl.innerHTML += imgHtmlString;
}

