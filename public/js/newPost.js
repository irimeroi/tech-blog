document.querySelector('#new-post-form').addEventListener('submit', async () => {

    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();

    if (title && description) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.assign('/dashboard');
        } else {
            alert('Post could not be created')
        }
    }

});