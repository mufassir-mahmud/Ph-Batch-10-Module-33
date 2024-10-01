function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postSection = document.getElementById('post-section')
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h1>User - ${post.id} </h1>
        <h2></h2>
        <h5>User Title -${post.title}</h5>
        <p>User description -${post.body}</p> 
        `
    postSection.appendChild(div)    
        console.log(post);
    }
}

loadPosts()