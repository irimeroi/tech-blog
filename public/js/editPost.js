// const editPostHandler = async (event) => {
//     event.preventDefault();

//     const post_id = event.target.id;
//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;

//     const response = await fetch(`/api/posts/${post_id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ title, description }),
//         headers: { 'Content-Type': 'application/json' },
//     })

//     if (response.ok) {
//         document.location.replace('/dashboard');
//     } else {
//         alert('Please try again');
//     }
// };

// document.querySelector('#edit-post-form').addEventListener('submit', editPostHandler)
