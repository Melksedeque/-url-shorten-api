const form = document.querySelector('form.needs-validation');
const input = document.querySelector('input[name="link"]');
const buttonsCopy = document.querySelectorAll('button.btn-copy');
const btnSubmit = document.querySelector('button[type="submit"]');

let linksList = document.querySelector('ul.links-list');

if (localStorage.getItem('linksList')) {
    linksList.innerHTML = JSON.parse(localStorage.getItem('linksList'));
}

// I used the Clipboard.JS library because my browser does not support the object navigator.clipboard
new ClipboardJS('button.btn-copy');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        e.stopPropagation();
        input.classList.add('error');
    }

    form.classList.add('was-validated');

    shortenUrl();
}, false);