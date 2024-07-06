function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject('Operation timed out.');
        }, 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeout);
                resolve(data);
            })
            .catch(error => reject(error));
    });
}

document.getElementById('promiseButton').addEventListener('click', function() {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = 'Into the work loading wait a sec...';

    fetchDataWithPromise()
        .then(data => {
            outputDiv.innerHTML = '';
            data.posts.forEach(post => {
                const postElement = document.createElement('p');
                postElement.textContent = post.title;
                outputDiv.appendChild(postElement);
            });
        })
        .catch(error => {
            outputDiv.textContent = `Not good for you check the 5g ${error}`;
        });
});
