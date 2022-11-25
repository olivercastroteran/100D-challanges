const loadCommentsBtn = document.getElementById('load-comments-btn');
const commentsSection = document.getElementById('comments');
const commentsForm = document.querySelector('#comments-form form');
const commentTitle = document.getElementById('title');
const commentText = document.getElementById('text');

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
  try {
    const response = await fetch(`/posts/${postId}/comments`);

    if (!res.ok) {
      alert('Fetching comments failed');
      return;
    }

    const data = await response.json();

    if (data && data.length > 0) {
      const commentsList = createCommentsList(data);
      commentsSection.innerHTML = '';
      commentsSection.appendChild(commentsList);
    } else {
      commentsSection.firstElementChild.textContent =
        'We cold not find any comments, add one!';
    }
  } catch (error) {
    alert('Geting comments failed');
  }
}

async function saveComment(e) {
  e.preventDefault();
  const postId = commentsForm.dataset.postid;

  const title = commentTitle.value;
  const text = commentText.value;

  const comment = { title, text };
  try {
    const res = await fetch(`/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      fetchComments();
    } else {
      alert('Could not send comment');
    }
  } catch (error) {
    alert('Could not send request, try again');
  }
}

loadCommentsBtn.addEventListener('click', fetchComments);
commentsForm.addEventListener('submit', saveComment);
