const commentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = this.id;
    const description = document.getElementById(`comment-textarea[data-description="${post_id}"]`);
    const commentText = description.value;
   
    // const description = document.querySelector(`[data-description='${event.target.id}']`).value;
    // const post_id = event.target.id;

    if (commentText && post_id) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ post_id, commentText }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Please try again');
        }
    }
};

document.querySelector('.comment-button').addEventListener('click', commentFormHandler)