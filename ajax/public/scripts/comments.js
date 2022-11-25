const loadCommentsBtn = document.getElementById('load-comments-btn');
const commentsSection = document.getElementById('comments');

function createCommentsList(comments) {
  const commentsList = document.createElement('ol');
  for (const comment of comments) {
    const commentEl = document.createElement('li');
    commentEl.innerHTML = `
      <article class="comment-item">
        <h2>${comment.title}</h2>
        <p>${comment.text}</p>
      </article>
    `;
    commentsList.appendChild(commentEl);
  }
  return commentsList;
}

async function fetchComments(e) {
  const postId = loadCommentsBtn.dataset.postid;
  const response = await fetch(`/posts/${postId}/comments`);
  const data = await response.json();

  const commentsList = createCommentsList(data);
  commentsSection.innerHTML = '';
  commentsSection.appendChild(commentsList);
}

loadCommentsBtn.addEventListener('click', fetchComments);
