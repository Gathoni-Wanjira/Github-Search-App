// Fetch the data from Github API.
// Generate a token and authorize it.

const accessToken = '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'

fetch("https://api.github.com/users/GATHONI-WANJIRA", {
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


