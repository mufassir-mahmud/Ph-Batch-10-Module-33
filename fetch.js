// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

const url = 'https://jsonplaceholder.typicode.com/todos/1';



function loadData(){
    fetch(url)
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error('Error happened', error));

}

const loadData2 = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    console.log(data);
}

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 
