var btn = document.querySelector("#btn");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var img = document.querySelector("#avatar");
var body = document.querySelector("body");
var url = 'https://randomuser.me/api';


function handleErrors(res) {
  if(!res.ok) {
    throw Error(res.status);
  }
  return res;
}

function fetchData() {
  fetch(url)
  .then(handleErrors)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    render(data.results[0]);
    console.log(data.results[0]);
  })
  .catch(function(err) {
    console.log(err);
  })

};
btn.addEventListener('click', fetchData);

function render(userData) {
body.className = "view";
fullname.textContent  = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
username.textContent = `${userData.login.username}`;
img.src = `${userData.picture.large}`;
email.textContent = `${userData.email}`;
city.textContent = `${userData.location.city}`;
};

fetchData();
