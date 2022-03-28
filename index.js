// Add your code here
// let submitData = (name,email) => {
//     return fetch('http://localhost:3000/users', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name: name,
//             email: email
//         })
//     })
//     .then( (res) => {
//         return res.json()
//     })
//     .then((data) => {
//         let h2 = document.createElement("h2")
//         h2.innerHTML = data.id
//         document.body.appendChild(h2)
//     })
//     .catch((error) => {
//         let h2 = document.createElement("h2")
//         h2.innerHTML = error.message
//         document.body.append(h2)
//         console.log(error.message)
//     })
// }


let postRequest = async (name, email) => {
    let req = await fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })

    let res = req.json()
    let h2 = document.createElement('h2')
    h2.innerText = res.id
    document.body.append(h2)
    
    res.catch((error) => {
        let h2 = document.createElement('h2')
        h2.innerText = error.message
        document.body.append(h2)
    })

}