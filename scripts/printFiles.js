function removePreviousIframe () {
    const previousIframeEl = document.body.querySelector("iframe")

    if(previousIframeEl) {
        document.body.removeChild(previousIframeEl);
    }
}

export default function printForm(event) {
    const formFileName = event.target.dataset.form;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    removePreviousIframe();
    
    const pdfPath = `./formFiles/${formFileName}.pdf`;


    if(isMobile) {
        const link = document.createElement('a');
        link.href = pdfPath;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();

    } else {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = pdfPath;

        iframe.onload = function () {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
        }   

        document.body.appendChild(iframe);
    };
}