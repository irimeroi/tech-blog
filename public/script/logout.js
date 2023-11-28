document.querySelector('#logout').addEventListener('click', async () => {

    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        console.error('Something went wrong!')
    }
});