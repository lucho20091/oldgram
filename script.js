const commentSection = document.getElementById('comment-section');
const sendCommentBtn = document.getElementById('send-comment');
const inputComment = document.getElementById('input-comment');

sendCommentBtn.addEventListener('click', () =>{
    commentSection.innerHTML += `
    <p>${inputComment.value}</p>`
    inputComment.value = '';
})
