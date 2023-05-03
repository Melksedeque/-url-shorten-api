function shortenUrl() {
    const url = input.value;
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${url}`;
  
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const { full_short_link: shortLink } = data.result;
            const newLinkItem = document.createElement('li');

            newLinkItem.innerHTML += `
                <span class="destination-link">${url}</span>
                <span class="short-link"><a href="${shortLink}" target="_blank">${shortLink}</a></span>
                <button class="btn btn-copy" data-clipboard-text="${shortLink}">Copy</button>
            `;

            linksList.appendChild(newLinkItem);

            const newButtonCopy = newLinkItem.querySelector('button.btn-copy');
            newButtonCopy.addEventListener('click', (e) => {
                e.currentTarget.classList.add('copied');
                e.currentTarget.textContent = "Copied!";

                setTimeout(function() {
                    e.currentTarget.textContent = 'Copy';
                    e.currentTarget.classList.remove('copied');
                }, 3000);
            });

            localStorage.setItem('linksList', JSON.stringify(linksList.innerHTML));
        })
        .catch(error => {
            console.error(error);
            alert('API Failed. Can`t shorten URL!');
        });
}