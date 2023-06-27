const accessToken = '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'
const form = document.querySelector("form")
form.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    const user = e.target.username.value

    fetch(`https://api.github.com/users/${user}`, {
    method: "GET",
    headers: {
        Authorization: ` ${accessToken}`,
        Accept: "application/vnd.github.v3+json"

    }
})
    .then(function (res) {
        return(res.json())
    })
    .then(function (data) {
       const details = data;
       displayUsers(details);

    })
})

function displayUsers (details){
    

}





