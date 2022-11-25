const loadCommentsBtn = document.getElementById('load-comments-btn');

async function fetchComments(e) {
  const postId = loadCommentsBtn.dataset.postid;
  console.log(loadCommentsBtn.data);
  const response = await fetch(`/posts/${postId}/comments`);
  const data = await response.json();
  console.log(data);
}

loadCommentsBtn.addEventListener('click', fetchComments);
