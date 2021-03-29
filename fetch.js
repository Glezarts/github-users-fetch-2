// Your code here
var buttonSearch = document.querySelector("#search");
var gitUser = document.querySelector("#githubuser");
var myTable = document.querySelector("#myTable");
let form = document.querySelector('form')


buttonSearch.addEventListener("click", (event) => {
    console.log(gitUser.value);

    // Hem d'utilitzar el preventdefault sobre l'esdeveniment ja que és un botó submit dins un form. Si és un div enlloc del form, no faria falta.
    event.preventDefault();

    const username = gitUser.value;
    fetchUser(username);
})

function fetchUser(username) {
    const fetchUsersUrl = "https://api.github.com/users/";

    fetch(`${fetchUsersUrl}${username}`).then((response) => {
        return response.json();
    }).then((responseJson) => {
        console.log(responseJson);
        addUserRow(responseJson);
    })
}

function addUserRow(userInfo) {
    myTable.innerHTML += `<tr>
                                <td>${userInfo.login}</td>
                                <td><img src="${userInfo.avatar_url}" alt="avatar"></td>
                                <td>${userInfo.bio}</td>
                                <td>${userInfo.html_url}</td>
                            </tr>`;
}
