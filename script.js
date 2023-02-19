let image = document.querySelector(".image1");
let name = document.querySelector(".name");
let info=document.querySelector(".info");





//button addEvenetListener()

let age = document.querySelector(".age");
let email = document.querySelector(".email");
let phone = document.querySelector(".phone");
let anotherUser = document.querySelector(".another");

randomUser();
function randomUser()
{
    fetch("https://randomuser.me/api/")
    .then(responce => responce.json())
    .then(data => {
        console.log(data.results[0])
        let item = data.results[0];
        image.src = item.picture.large;
        name.innerText = item.name.first + " " + item.name.last;

        age.addEventListener("click", ()=>displayAge(item));
        email.addEventListener("click", ()=>displayEmail(item));
        phone.addEventListener("click", ()=>displayPhone(item));
        info.innerText="";

    })
}

anotherUser.addEventListener("click", ()=>displayPerson());






//function for addEventListener
function displayAge(e) {
    info.innerText=e.dob["age"]
}

function displayEmail(e) {
    info.innerText=e.email;
}

function displayPhone(e) {
    info.innerText=e.phone;
}

function displayPerson(e) {
    randomUser();
    console.log("shubhankar")
}