const htmlElements = [];

function printForm(event) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = './README.md';

    iframe.onload = function () {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    }

    document.body.appendChild(iframe);
}

htmlElements.push(
    document.getElementById('formOneButton'),
    document.getElementById('formTwoButton')
);

for(let i = 0; i < htmlElements.length; i++) {
    htmlElements[i].addEventListener("click", printForm)
}