document.getElementById('callbackButton').addEventListener('click', function() {
    executeCallbackAfterDelay(5000, fetchDataAndDisplay);
});

function executeCallbackAfterDelay(delay, callback) {
    setTimeout(callback, delay);
}

function fetchDataAndDisplay() {
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<h3>Fetched Posts:</h3>';
            const ul = document.createElement('ul');
            data.posts.forEach(post => {
                const li = document.createElement('li');
                li.innerText = post.title;
                ul.appendChild(li);
            });
            resultDiv.appendChild(ul);
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Error fetching data';
            console.error('Error fetching data:', error);
        });
}
document.getElementById('callbackButton').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    audio.play();
    
    executeCallbackAfterDelay(5000, function() {
        audio.pause();
        audio.currentTime = 0;
        fetchDataAndDisplay();
    });
});
