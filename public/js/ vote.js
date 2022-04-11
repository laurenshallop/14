// upvote button functionality 
async function voteClickHandler(event) {
    event.preventDefault();

  // taking id from http://localhost:3001/post/1
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch('/api/posts/vote', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.vote-btn').addEventListener('click', voteClickHandler);