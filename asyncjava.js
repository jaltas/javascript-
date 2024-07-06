document.getElementById('fetchButton').addEventListener('click', async function() {
    const audio = document.getElementById('audio');
    const resultDiv = document.getElementById('result');

    audio.play();
    resultDiv.innerText = 'Loading...';

    try {
        const data = await fetchData();
        audio.pause();
        audio.currentTime = 0;

        resultDiv.innerHTML = '<h3>Fetched Posts:</h3>';
        const ul = document.createElement('ul');
        data.posts.forEach(post => {
            const li = document.createElement('li');
            li.innerText = post.title;
            ul.appendChild(li);
        });
        resultDiv.appendChild(ul);
    } catch (error) {
        audio.pause();
        audio.currentTime = 0;
        resultDiv.innerText = 'Error fetching data';
        console.error('Error fetching data:', error);
    }
});

async function fetchData() {
    const response = await fetch('https://dummyjson.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}
