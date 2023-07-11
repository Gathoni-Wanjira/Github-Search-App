const accessToken = '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'
const user = document.querySelector("#EnterUserName")
const input = document.querySelector("input");

input.addEventListener("submit", (e) => {
    e.preventDefault()
    
    fetch(`https://api.github.com/users/${user}`, {
    method :"GET",
    headers : {
        Authorization: ` ${accessToken}`,
        Accept: "application/vnd.github.v3+json"
    }
})
.then(response => response.json())
.then(username => {
    console.log(username);
})
.catch(error => {
    console.error(error);
  });
})
