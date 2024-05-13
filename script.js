const commentSection = document.getElementById('comment-section');
const sendCommentBtn = document.getElementById('send-comment');
const inputComment = document.getElementById('input-comment');
// input and buttons for other posts
const commentSection2 = document.getElementById('comment-section2');
const sendCommentBtn2 = document.getElementById('send-comment2');
const inputComment2 = document.getElementById('input-comment2');
// input and buttons for other posts
const commentSection3 = document.getElementById('comment-section3');
const sendCommentBtn3 = document.getElementById('send-comment3');
const inputComment3 = document.getElementById('input-comment3');
// get localstorage item
const nameFromLocalStorage = JSON.parse(localStorage.getItem('username'))
// get modal
const modal = document.getElementById('modal');
const signInBtn = document.getElementById('sign-in');
const username = document.getElementById('username');
// get main
const main = document.querySelector('main');
const header = document.querySelector('header');
// get username name
const usernameName = document.getElementById('username-name');

signInBtn.addEventListener('click', () => {
    localStorage.setItem('username', JSON.stringify(username.value))
})
// logic when user created account
if (nameFromLocalStorage){
    modal.style.display = 'none'
    header.style.display = 'block'
    main.style.display = 'block'
    usernameName.textContent = nameFromLocalStorage
}

console.log(nameFromLocalStorage) 
sendCommentBtn.addEventListener('click', () =>{
    commentSection.innerHTML += `
    <p>${inputComment.value}</p>`
    localStorage.setItem('username', JSON.stringify(inputComment.value))
    inputComment.value = '';
    console.log(nameFromLocalStorage); 
})

sendCommentBtn2.addEventListener('click', () =>{
    commentSection2.innerHTML += `
    <p>${inputComment2.value}</p>`
    inputComment2.value = '';
})

sendCommentBtn3.addEventListener('click', () =>{
    commentSection3.innerHTML += `
    <p>${inputComment3.value}</p>`
    inputComment3.value = '';
})


