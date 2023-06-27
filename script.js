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
    
    // Getting nodes from the html
    const avatar = document.querySelector("#avatar")
    avatar.innerHTML = ''
    const name = document.querySelector("#name")
    const about = document.querySelector("#about")
    const linkRepo = document.querySelector("#link_repo")
    // Looping data
   console.log(details)
    details.forEach((details) => {
     // Creating elements dynamically

        const p1 = document.createElement("p")
         p1.textContent = details.name 
       const p2 = document.createElement("p")
         p2.textContent = details.about
         const image = document.createElement("img")
        image.src = details.avatar_url
        const repolink = document.createElement("a")
        repolink.textContent = "Repositories>>"
         repolink.href = details.repos_url

        //  append child element
         avatar.appendChild(image)
         name.appendChild(p1)
       about.appendChild(p2)
        linkRepo.appendChild(repolink)
 console.log(avator.appendChild(image))
   });

}



