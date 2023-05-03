// if (navigator.clipboard) {
//     // Testing if the browser supports navigator.clipboard
//     buttonsCopy.forEach((btnCopy) => {
//         btnCopy.addEventListener('click', (e) => {
//             const span = e.target.closest('li').querySelector('span.short-link');
//             const selection = window.getSelection();
//             const range = document.createRange();
    
//             range.selectNodeContents(span);
//             selection.removeAllRanges();
//             selection.addRange(range);
    
//             navigator.clipboard.writeText(span.textContent);
    
//             console.log(span.textContent);
//         });
//     });
// } else {
//     // The navigator.clipboard object is a relatively new API and may not be supported in all browsers.
//     alert("Your browser does not support the navigator.clipboard object!")
// }