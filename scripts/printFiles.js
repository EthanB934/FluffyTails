function removePreviousIframe () {
    const previousIframeEl = document.body.querySelector("iframe")

    if(previousIframeEl) {
        document.body.removeChild(previousIframeEl);
    }
}

export default function printForm(event) {
    const formFileName = event.target.dataset.form;

    removePreviousIframe();

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = `./formFiles/${formFileName}.pdf`;

    iframe.onload = function () {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    }   

    document.body.appendChild(iframe);
}