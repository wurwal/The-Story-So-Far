let searchIndex = [];

// Load the search index JSON file
fetch('search_index.json')
    .then(response => response.json())
    .then(data => searchIndex = data);

function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    searchIndex.forEach(page => {
        if (page.title.toLowerCase().includes(query) || page.snippet.toLowerCase().includes(query)) {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result', 'animate__fadeInDown', 'animate__animated');

            const link = document.createElement('a');
            link.href = page.permalink;
            link.textContent = page.title;

            const snippet = document.createElement('p');
            snippet.textContent = page.snippet;

            resultItem.appendChild(link);
            resultItem.appendChild(snippet);
            resultsDiv.appendChild(resultItem);
        }
    });
}
