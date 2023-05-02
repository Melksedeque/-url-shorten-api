form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
        input.classList.add('error')
    }

    form.classList.add('was-validated')
}, false);