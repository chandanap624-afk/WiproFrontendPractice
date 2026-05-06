function getUser() {

    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {

        let user = data.results[0];

        let output = `
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email}</p>
            <img src="${user.picture.large}" width="150">
        `;

        document.getElementById("userData").innerHTML = output;
    })
    .catch(error => {
        console.log("Error:", error);
    });

}