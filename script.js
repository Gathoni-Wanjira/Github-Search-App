const accessToken = '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'
const formUsername = document.getElementById("user-name-form")
// const formRepo = document.getElementById("repo-form")

formUsername.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = e.target.EnterUserName.value
   
    fetch(`https://api.github.com/users/${user}`, {
        method: "GET",
        headers: {
            Authorization: ` ${accessToken}`,
            Accept: "application/vnd.github.v3+json"
        }
    })
        .then(response => response.json())
        .then(userInput => {
            console.log(userInput);
            if (userInput.login !== undefined ){
                fetchUsers(userInput);
            } else {
                alert("User Not Found!")
            }
            

        })
        .catch(error => {
            console.error(error);
        });
})

function fetchUsers (userInput) {

const userDetails = document.createElement("div")
userDetails.className = "user-card"


// Create & Assign


    const userImg = document.createElement("img")
    userImg.id = "user-img"
    userImg.src = userInput.avatar_url

    const userName = document.createElement("p")
    userName.id = "user-name"
    userName.textContent = userInput.login
    
    const userBio = document.createElement("p")
    userBio.id = "user-bio"
    userBio.textContent = userInput.bio

    const followersDiv = document.createElement("div")
    followersDiv.id = "followers-count"
    
    
    const followingNo = document.createElement("p") 
    followingNo.id = "following"
    followingNo.textContent = `${userInput.following} Following` 

    const followersNo = document.createElement("p")
    followersNo.id = "followers"
    followersNo.textContent = `${userInput.followers} Followers`

    
    followersDiv.appendChild(followersNo);
    followersDiv.appendChild(followingNo);

    const repoBtn = document.createElement("button")
    repoBtn.id = "repo-btn"
    repoBtn.textContent = "See Repositories"


    // Append

    userDetails.appendChild(userImg);
    userDetails.appendChild(userName);
    userDetails.appendChild(userBio);
    userDetails.appendChild(followersDiv);
    userDetails.appendChild(repoBtn);

    
    const searchNameCard = document.querySelector("#searchName-results")
    searchNameCard.innerHTML= ""
    searchNameCard.appendChild(userDetails);


    showUserDetailsCard ();

}


function showUserDetailsCard () {
    document.querySelector("#search-results-Container").classList.remove("hideResults")
    document.querySelector("#userInput").style.display = "none"


}

// formRepo.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const user = e.target.EnterRepoName.value
    

//     fetch(`https://api.github.com/users/${user}/repos`, {
//         method: "GET",
//         headers: {
//             Authorization: ` ${accessToken}`,
//             Accept: "application/vnd.github.v3+json"
//         }
//     })
//         .then(response => response.json())
//         .then(userRepository => {
//             console.log(userRepository);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// })

// https://api.github.com/users/Gathoni-Wanjira
