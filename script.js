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
            fetchUsers(userInput);
        })
        .catch(error => {
            console.error(error);
        });
})

function fetchUsers (userInput) {

    const userDetails = document.createElement("div")


    const userImg = document.querySelector("#user-img");
    const userName = document.querySelector("#user-name");
    const userBio = document.querySelector("#user-bio");
    const followingLink = document.querySelector("#following");
    const followersLink = document.querySelector("#followers");
    const repoBtn = document.querySelector("#repo-btn");


    userImg.src = userInput.avatar_url;
    userName.textContent = userInput.login;
    userBio.textContent = userInput.bio;
    followingLink.textContent = userInput.following_url
    followersLink.textContent = userInput.followers_url  
    

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