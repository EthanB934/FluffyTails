export default function printForm(event) {
    const formFileName = event.target.dataset.form;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = `./formFiles/${formFileName}.pdf`;

    iframe.onload = function () {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    }   

    document.body.appendChild(iframe);
}