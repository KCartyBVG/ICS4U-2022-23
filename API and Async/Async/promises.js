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

function createPost(post) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong')
            }
        }, 2000)
    })
}

// createPost({title: 'Post three', body: 'this is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

//Async / Await
// async function init() {
//     createPost({title:'Post three', body: 'This is post three'});

//     getPosts();
// }

// init();

//Async / Await / Fetch

//f we are using await we need to define the function as asynchronous (async)
// async function fetchUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     // await waits for the asynchronous repeat to be made and then stores the response in res

//     const data = await res.json();

//     console.log(data);
// }
// fetchUsers();


async function fetchUsers() {
    // fetch('https://jsonplaceholder.typicode.com/users').then((res)=> {
    //     console.log(res.json())
    // })
    const res = fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json()
    }).then(body => console.log(body));
}
fetchUsers();

//Promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(resolve, 2000, 'Goodbye'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
// res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
// console.log(values));