const accessToken = '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'
const form = document.querySelector("form")
form.addEventListener("submit" ,handleSubmit)

function handleSubmit (e){
    e.preventDefault();
    const user = e.target.username.value

    fetch(`https://api.github.com/users/${user}`, {
    method: "GET",
    headers: {
        Authorization: ` Bearer ${accessToken}`
    }
})
    .then(function (res) {
        return(res.json())
    })
    .then(function (data) {
        console.log(data)
    })
}
handleSubmit();

// Fetch the data from Github API.
// Generate a token and authorize it.




// fetch("https://api.github.com/users/GATHONI-WANJIRA", {
//     method: "GET",
//     headers: {
//         Authorization: ` Bearer ${accessToken}`
//     }
// })
//     .then(function (res) {
//         return(res.json())
//     })
//     .then(function (data) {
//         console.log(data)
//     })


