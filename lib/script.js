//picks random person
let person = Math.floor(Math.random()*10);

//HTML variables
const personImgHtml = document.querySelector("#personsPic");
const infoType = document.querySelector("#infoIdentification");
const infoDisplay = document.querySelector("#info");
const nameTab = document.querySelector("#name");
const emailTab = document.querySelector("#email");
const birthdayTab = document.querySelector("#birthday");
const addressTab = document.querySelector("#address");
const phoneNumTab = document.querySelector("#phoneNum");
const passwordTab = document.querySelector("#password");
const refreshTab = document.querySelector("#refresh");

//variables for persons info
let personImg = data.results[person].picture.large;
let firstName = data.results[person].name.first;
let lastName = data.results[person].name.last;
let name = firstName + " " + lastName;
let emailAddress = data.results[person].email;
let emailPassword = data.results[person].login.password;
let birthdate = data.results[person].dob.date;
let streetAddress = data.results[person].location.street;
let phoneNumber = data.results[person].phone;

//Gets new person
refreshTab.addEventListener("click", newPerson);
function newPerson()
{
    person = Math.floor(Math.random()*10);

    personImg = data.results[person].picture.large;
    firstName = data.results[person].name.first;
    lastName = data.results[person].name.last;
    name = firstName + " " + lastName;
    emailAddress = data.results[person].email;
    emailPassword = data.results[person].login.password;
    streetAddress = data.results[person].location.street;
    phoneNumber = data.results[person].phone;

    //Diplays new Persons Pic
    console.log(personImg);
    personImgHtml.src = personImg;
    console.log(personImgHtml);

    //Displays new Persons Name
    infoType.innerHTML = "Hi, my name is";
    infoDisplay.innerHTML = name;
};

//Diplays Persons Pic
console.log(personImg);
personImgHtml.src = personImg;
console.log(personImgHtml);

//Displays Persons Name
infoType.innerHTML = "Hi, my name is";
infoDisplay.innerHTML = name;

//Makes it display name when nameTab is clicked
nameTab.addEventListener("click", diplayName);
function diplayName()
{ 
console.log(name);
infoType.innerHTML = "Hi, my name is";
infoDisplay.innerHTML = name;
}

//Makes it display emailAddress when emailTab is clicked
//emailTab.addEventListener("onmouseover", changeBackground(emailTab));
// function changeBackground(tab)
// {
//     tab.style.background = "red";
// }

emailTab.addEventListener("click", displayEmail);
function displayEmail()
{
    infoType.innerHTML = "My email address is";
    infoDisplay.innerHTML = emailAddress;
}

//Makes it display birthdate when birthdayTab is clicked
birthdayTab.addEventListener("click", displayBirthday);
function displayBirthday()
{
    infoType.innerHTML = "My birthday is";
    infoDisplay.innerHTML = birthdate.substring(0, 10);
}

//Makes it display streetAddress when addressTab is clicked
addressTab.addEventListener("click", displayAdress);
function displayAdress()
{
    infoType.innerHTML = "My address is";
    infoDisplay.innerHTML = streetAddress;
}

//Makes it display phoneNumber when phoneNumTab is clicked
phoneNumTab.addEventListener("click", displayPhoneNum);
function displayPhoneNum()
{
    infoType.innerHTML = "My phone number is";
    infoDisplay.innerHTML = phoneNumber;
}

//Makes it display emailPassword when passwordTab is clicked
passwordTab.addEventListener("click", displayPassword);
function displayPassword()
{
    infoType.innerHTML = "My password is";
    infoDisplay.innerHTML = emailPassword;
}

