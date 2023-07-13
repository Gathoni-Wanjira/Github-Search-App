const accessToken = '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'
const formUsername = document.getElementById("user-name-form")


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
                showUsers(userInput);
            } else {
                alert("User Not Found!")
            }
            

        })
        .catch(error => {
            console.error(error);
        });
})

function showUsers (userInput) {

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
    repoBtn.href = userInput.repos_url
    repoBtn.addEventListener("click" , fetchRepo)


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



function fetchRepo (e) {
    const link = e.target.href
    // console.log(link);
    fetch(link, {
        method: "GET",
        headers: {
            Authorization: ` ${accessToken}`,
            Accept: "application/vnd.github.v3+json"
        }
    })
        .then(response => response.json())
        .then(userRepository => {
            console.log(userRepository);
            if (userRepository.length !== 0){
                showUserRepositories(userRepository);
               
            }else {
                alert("No Repositories Found.")
            }
            
        })
        .catch(error => {
            console.error(error);
        });

}

function showUserRepositories (userRepository) {
  const manyCards = document.querySelector("#SearchRepo-results");
  manyCards.innerHTML = ""

    userRepository.forEach(repository => {

        // create

        const reposCard = document.createElement("div")
        reposCard.className = "reposResults-card"


    const reposName = document.createElement("h4")
    reposName.id = "Repos-Title"
    reposName.textContent = repository.name

    const reposDescription = document.createElement("p")
    reposDescription.id = "Repo-description"
    reposDescription.textContent = repository.description


    const reposLaunguage = document.createElement("h5")
    reposLaunguage.id = "launguage"
    reposLaunguage.textContent = repository.launguage


    const dateUpdated = document.createElement("span")
    dateUpdated.id = "last-update"
    dateUpdated.textContent = `Last Updated On ${repository.updated_at.slice(0,10)}`


    const openRepository = document.createElement("a")
    openRepository.id = "openRepo"
    openRepository.textContent = "Open Repository"
    openRepository.href = repository.html_url
    openRepository.style.display = "block"
    openRepository.style.marginTop = "10px"



    reposCard.appendChild(reposName)
    reposCard.appendChild(reposDescription)
    reposCard.appendChild(reposLaunguage)
    reposCard.appendChild(dateUpdated)
    reposCard.appendChild(openRepository)


manyCards.appendChild(reposCard);


        
    });
    showRepositoriesOnClick();

}

function showRepositoriesOnClick () {
    document.querySelector("#SearchRepo-results").classList.remove("hideRepos")

}


