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
const idFromLocalStorage = JSON.parse(localStorage.getItem('id'))
// get modal
const modal = document.getElementById('modal');
const signInBtn = document.getElementById('sign-in');
const username = document.getElementById('username');
// get main
const main = document.querySelector('main');
const header = document.querySelector('header');
// get username name
const usernameName = document.getElementById('username-name');
// setting up firebase 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://oldgram-dd94a-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const oldgramInDB = ref(database, "oldgram")
// sign in send username to localStorage
signInBtn.addEventListener('click', () => {
    localStorage.setItem('username', JSON.stringify(username.value))
    const random = Math.floor(Math.random() * 10000 )
    localStorage.setItem('id', JSON.stringify(random))
})
// logic when user created account
if (nameFromLocalStorage){
    modal.style.display = 'none'
    header.style.display = 'block'
    main.style.display = 'block'
    usernameName.textContent = nameFromLocalStorage
}




// logic for each post
sendCommentBtn.addEventListener('click', () =>{
    //object of what we want to send
    let myObj = {
        id: idFromLocalStorage,
        name: nameFromLocalStorage,
        comment: inputComment.value,
        html: "commentSection"
    }
    if (!inputComment.value === ''){
        push(oldgramInDB, myObj)
    }
    inputComment.value = '';
})

sendCommentBtn2.addEventListener('click', () =>{
    //object
    let myObj2 = {
        id: idFromLocalStorage,
        name: nameFromLocalStorage,
        comment: inputComment2.value,
        html: "commentSection2"
    }
    if (!inputComment2.value === ''){
    push(oldgramInDB, myObj2)
    }
    inputComment2.value = '';
})

sendCommentBtn3.addEventListener('click', () =>{
    // object
    let myObj3 = {
        id: idFromLocalStorage,
        name: nameFromLocalStorage,
        comment: inputComment3.value,
        html: "commentSection3"
    }
    if (!inputComment3.value === ''){
    push(oldgramInDB, myObj3)
    }
    inputComment3.value = '';
})


// logic to get data from DB
onValue(oldgramInDB, function(snapshot){
    if (snapshot.exists()){
        let itemsArray = Object.entries(snapshot.val())
        clearCommentSections(commentSection, commentSection2, commentSection3)
        
        for (let i = 0; i < itemsArray.length; i++){
            console.log(itemsArray[i][1].comment)
            let currentItem = itemsArray[i]
            // let currentItemComment = itemsArray[i][1].comment
            // let currentItemName = itemsArray[i][1].name
            // let currentItemID = itemsArray[i][0]
            let currentItemHTML = itemsArray[i][1].html
            if (currentItemHTML === 'commentSection'){
                appendComments(currentItem, commentSection)
            } else if (currentItemHTML === 'commentSection2'){
                appendComments(currentItem, commentSection2)
            } else if (currentItemHTML === 'commentSection3'){
                appendComments(currentItem, commentSection3)
        }}
        // console.log(itemsArray[1][1])
        // let arrayValues = []
        // for (let i = 0; i < itemsArray.length; i++){
        //     arrayValues.push(itemsArray[i][1].comment)
        // }
        // console.log(arrayValues)
    }
})

function clearCommentSections(one, two, tree){
    one.innerHTML = ''
    two.innerHTML = ''
    tree.innerHTML = ''
}

function appendComments(item, commentSectionEl){
    let itemID = item[0]
    let itemComment = item[1].comment
    let itemName = item[1].name
    let itemUserID = item[1].id

    let newEl = document.createElement('div')
    newEl.className = 'flex-comment'
    newEl.innerHTML = `
    <p><span class="bold">${itemName}</span> ${itemComment}</p>`
    if (itemUserID === idFromLocalStorage){
        newEl.innerHTML += `<button id="delete-btn">Delete</button>
        </div>`
    }
    commentSectionEl.append(newEl)
}