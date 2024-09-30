function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(users){
    const ul = document.getElementById('users-list');
    for(const user of users){
        const li = document.createElement('li');
        li.innerText = user.name;
        li.style.listStyleType = "none";
        ul.appendChild(li)
    }
}