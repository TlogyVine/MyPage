
// Loading comments on the blog
async function loadComments() {
    try {
        const response = await fetch('comments.db');
        const text = await response.text();
        document.getElementById('comments-list').innerHTML = text;

        const loadButton = document.querySelector('button.square-1');
        if (loadButton) {
            loadButton.parentNode.removeChild(loadButton);
        }
    } catch (error) {
        console.error('Error loading comments:', error);
    }
}

// Press the button to submit a comment
function saveComment() {
    const name = 'visitor';
    const message = document.getElementById('comment-message').value;
    const date = new Date().toLocaleString();

    console.log("debug");
    if (message.length > 5) {
            // Create comment content string
    const commentContent = 
    `<li  class="comment">
        <article>
            <img src="./images/empty.png" alt="Image" class="avatar">
            <div class="comment-meta">
                <h4 class="author">${name}</h4>
                <div class="date">${date}</div>
                <div class="reply"><a class="button-style-1 small" href="#">Reply</a></div>
            </div>
            <div class="comment-body">
                <p>${message}</p>
            </div>
        </article>
    </li>\n`;

    // Create a download task
    const blob = new Blob([commentContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'comments.txt';
    a.click();

    URL.revokeObjectURL(url);
    }else{
        alert('message must be greater than 5 characters');
    }
}

