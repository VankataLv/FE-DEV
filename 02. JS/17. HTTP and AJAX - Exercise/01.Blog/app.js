// function attachEvents() {
//     const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
//     const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

//     const loadPostsBtnEl = document.getElementById('btnLoadPosts');
//     const viewPostsBtnEl = document.getElementById('btnViewPost');
//     const selectPostEl = document.getElementById('posts');
//     const postBodyEl = document.getElementById('post-body');
//     const commentListEl = document.getElementById('post-comments');
//     const postTitleEl = document.getElementById('post-title');

//     loadPostsBtnEl.addEventListener('click', () => {
//         selectPostEl.innerHTML = "";
//         fetch(postsUrl)
//             .then(response => response.json())
//             .then(posts => {
//                 Object.values(posts)
//                     .forEach(post => {
//                         const optionEl = document.createElement('option');
//                         optionEl.value = post.id;
//                         optionEl.textContent = post.title;

//                         selectPostEl.appendChild(optionEl)

//                     })
//             })

//     });

//     viewPostsBtnEl.addEventListener('click', async () => {
//         const selectedPostID = selectPostEl.value

//         const response = await fetch(`${postsUrl}/${selectedPostID}`)
//         const selectedPost = await response.json();

//         postBodyEl.textContent = selectedPost.body;
//         postTitleEl.textContent = selectedPost.title;

//         const commentsResponse = await fetch(commentsUrl);
//         const comments = await commentsResponse.json();
//         const commentsFragment = document.createDocumentFragment();

//         Object.values(comments)
//             .filter(comment => comment.postId === selectedPostID)
//             .forEach(comment => {
//                 const liElement = document.createElement('li');
//                 liElement.id = comment.id;
//                 liElement.textContent = comment.text;
//                 commentsFragment.appendChild(liElement)
//             });

//         commentListEl.innerHTML = "";
//         commentListEl.appendChild(commentsFragment)

//     });
// }

// attachEvents();

function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts'
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments'

    let loadPostsButton = document.getElementById('btnLoadPosts')
    loadPostsButton.addEventListener('click', loadPostsEvent)

    let postsSelect = document.getElementById('posts')

    let viewPostButton = document.getElementById('btnViewPost')
    viewPostButton.addEventListener('click', viewPostEvent)

    allPosts = {}

    async function loadPostsEvent(event) {
        postsSelect.innerHTML = ''
        let allPostsResponse = await fetch(postsURL)
        allPosts = await allPostsResponse.json()

        for (let postArr of Object.entries(allPosts)) {
            let option = document.createElement('option')
            option.textContent = postArr[1].title
            option.value = postArr[0]
            postsSelect.appendChild(option)
        }
    }

    async function viewPostEvent(event) {
        let currentPostObject = document.getElementById('posts')
        let currentPostComments = []

        let allCommentsResponse = await fetch(commentsURL)
        let allComments = await allCommentsResponse.json()

        for (let commentArr of Object.entries(allComments)) {
            if (commentArr[1].postId === currentPostObject.value) {
                currentPostComments.push(commentArr[1].text)
            }
        }

        let chosenPost = allPosts[currentPostObject.value]

        let titleElement = document.getElementById('post-title')
        titleElement.textContent = chosenPost.title

        let postContentElement = document.getElementById('post-body')
        postContentElement.textContent = chosenPost.body

        let ul = document.getElementById('post-comments')
        ul.innerHTML = ''
        for (let comment of currentPostComments) {
            let li = document.createElement('li')
            li.textContent = comment
            ul.appendChild(li)
        }
    }
}

attachEvents();

// function attachEvents() {
//     const postsAPI = 'http://localhost:3030/jsonstore/blog/posts'
//     const commentsAPI = 'http://localhost:3030/jsonstore/blog/comments'
//     const selectedPosts = document.querySelector('#posts')
//     const postTitle = document.querySelector('#post-title')
//     const postBody = document.querySelector('#post-body')
//     const postComments = document.querySelector('#post-comments')
//     const postData = {}

//     const btnLoadPosts = async () => {
//         const response = await fetch(postsAPI)
//         const dataPost = await response.json()
//         selectedPosts.innerHTML = ''
//         Object.keys(dataPost).forEach(x => {
//             postData[x] = dataPost[x]
//             selectedPosts.innerHTML += `<option value="${x}">${dataPost[x].title}</option>>`
//         })
//     }

//     const btnViewPost = async () => {
//         const response = await fetch(commentsAPI)
//         const dataComments = await response.json()
//         postComments.innerHTML = ''
//         postTitle.textContent = postData[selectedPosts.value].title
//         postBody.textContent = postData[selectedPosts.value].body
//         Object.keys(dataComments).forEach(x => {
//             const currentElement = dataComments[x]
//             if (selectedPosts.value === currentElement.postId) {
//                 postComments.innerHTML += `<li id="${currentElement.id}">${currentElement.text}</li>`
//             }
//         })
//     }

//     return {
//         btnLoadPosts,
//         btnViewPost
//     }
// }

// const funcJs = attachEvents()