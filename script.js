// API URL: https://jsonplaceholder.typicode.com/todos
// Requirements
// 1- Use fetch() to get data from the API.
// 2- Map and display at least 10 TODO items.
// 3- Completed items should have a line-through style.
// 4- Use semantic HTML and clean CSS.

// =======================================================

const getData = async () => {

    try {
        const get = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await get.json()
        console.log("Data => " , data);

        let todosTable = document.getElementById("todosTab")

        data.slice(0 , 10).forEach(todo => {

            let tr = document.createElement("tr")

            if (todo.completed === true) {
                tr.classList.add("completed")
            }

            tr.innerHTML =
            `
            <td>${todo.userId}</td>
            <td>${todo.id}</td>
            <td id ="title">${todo.title}</td>
            <td>${todo.completed ? '✔️' : '❌'}</td>
            `

            todosTable.appendChild(tr)
        })
    }
    catch (error) {
        console.log("Could not find the data: " , error);
    }

}
getData()

// =======================================================

// fetch("https://jsonplaceholder.typicode.com/todos")

// .then((responce) => {

//     if (!responce.ok) {
//         throw new Error("Error")
//     }
//     return responce.json()

// })

// .then((data) => {

//     console.log(data);

//     let todosTable = document.getElementById("todosTab")

//     data.slice(0 , 10).forEach(todo => {

//         let tr = document.createElement("tr")

//         if (todo.completed === true) {
//             tr.classList.add("completed")
//         }
        
//         tr.innerHTML =
//         `
//         <td>${todo.userId}</td>
//         <td>${todo.id}</td>
//         <td id ="title">${todo.title}</td>
//         <td>${todo.completed ? '✔️' : '❌'}</td>
//         `
        
//         todosTable.appendChild(tr)

//     });

// })