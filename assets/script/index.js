'use strict';
import {select, selectAll, onEvent} from './utility.js'

const submitBn = select('.submit-btn')
const postContent = select('textarea')
const icon = select('.fa-image')
const fileInput = select('#file-input')
const content = select('.content')

function createPost() {
    let textContent = postContent.value; 
    let text = document.createElement('p')
    let infoPost = document.createElement('p')
    let date = document.createElement('p')
    let profileImg = document.createElement('div')
    let post = document.createElement('div')
    let postText = document.createElement('section')
    let postInfo = document.createElement('section')

    content.appendChild(post)
    post.className = 'post-design'
    post.appendChild(postInfo)
    postInfo.className = 'post-info'
    post.appendChild(postText)
    postText.className = 'post-text'
    postInfo.appendChild(profileImg)
    postInfo.appendChild(infoPost)
    postInfo.appendChild(date)
    profileImg.className = 'profile-image'
    infoPost.innerText = 'Alejandro Pedraza'
    date.innerText = new Date().toString().substring(4, 16);
    postText.appendChild(text)
    text.innerText = textContent
}

onEvent('click', submitBn, createPost)
console.log()