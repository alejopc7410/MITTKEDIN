'use strict';
import {select, selectAll, onEvent} from './utility.js'
import {Suscriber} from './classes.js'

const submitBn = select('.submit-btn');
const postContent = select('textarea');
const fileInput = select('#file-input');
const content = select('.content');
const profileImg = select('.profile-img img');
const imgInfo = select('.img-info')
const userModal = select('.modal');
const userData = select('.user-data');
const account = select('.modal li:nth-child(1)');
const xIcon = select('.exit-icon');
const userInfoModal = select('.user-info-modal');

let groups = [];
let pages = [];

const suscriber1 = new Suscriber(
    '56AFGT67',
    'Mark Salinas',
    'mark3785',
    'mark@gmail.com',
    groups,
    pages,
    true
);

function validation() {
    if (!postContent.value.length > 0) {
        return false;
    } else {
        return true;
    }
};

function createPost() {
    let textContent = postContent.value; 
    let text = document.createElement('p');
    let infoPost = document.createElement('p');
    let date = document.createElement('p');
    let profileImg = document.createElement('div');
    let post = document.createElement('div');
    let postText = document.createElement('section');
    let postInfo = document.createElement('section');
    content.appendChild(post);
    post.className = 'post-design';
    post.appendChild(postInfo);
    postInfo.className = 'post-info';
    post.appendChild(postText);
    postText.className = 'post-text';
    postInfo.appendChild(profileImg);
    postInfo.appendChild(infoPost);
    postInfo.appendChild(date);
    profileImg.className = 'profile-image';
    infoPost.innerText = suscriber1.name;
    date.innerText = new Date().toString().substring(4, 16);

    if (validation()) { 
        postText.appendChild(text);
        text.innerText = textContent;
    };

    let imageURL = URL.createObjectURL(fileInput.files[0]);
    let image = document.createElement('img');
    image.src = imageURL;
    postText.appendChild(image);
}
onEvent('change', fileInput, () => {imgInfo.textContent = `${fileInput.files[0].name}`;})
onEvent('click', submitBn, createPost);
onEvent('click', profileImg, () => {
    if (userModal.style.display === 'none') {
        userModal.style.display = 'grid';
    } else {
        userModal.style.display = 'none';
    }
});

let info = document.createElement('p');
userData.appendChild(info);
info.innerHTML = `<strong>Name</strong>: ${suscriber1.name} <br> 
<strong>ID:</strong> ${suscriber1.id} <br> <strong>Username</strong>: ${suscriber1.userName} 
<br> <strong>Email:</strong> ${suscriber1.email}`;

onEvent('click', account, () => {
    if (userInfoModal.style.display === 'none') {
        userInfoModal.style.display = 'grid'; 
    } else {
        userInfoModal.style.display = 'none';
    }                       
})

onEvent('click', xIcon, () => {
    if (userInfoModal.style.display === 'none') {
        userInfoModal.style.display = 'grid'; 
    } else {
        userInfoModal.style.display = 'none';
    }                       
})