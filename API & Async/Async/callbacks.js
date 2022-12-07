const post = [
    {title: 'Post One', body: 'This is Post One'},
    {title: 'Post two', body: 'This is Post two'}
]

function getPost() {
    setTimeout(() => {
        let output = '';
        postMessage.forEach((post, index) => {
            output+= `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getPost();

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);