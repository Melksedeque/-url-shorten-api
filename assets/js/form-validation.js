(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
    const input = document.querySelector('input[name="link"]')
  
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                input.classList.add('error')
            }

            form.classList.add('was-validated')
        }, false)
    })
})()