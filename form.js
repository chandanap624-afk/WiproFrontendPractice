let userName = prompt("Enter user name");
let age = prompt("Enter your age");
let isSubscribed = "true";

function validateForm(userName , age , isSubscribed)
{
    console.log(typeof userName);
    console.log(typeof age);
    console.log(typeof isSubscribed);

    age = Number(age);
    isSubscribed = isSubscribed === "true";

    console.log(typeof age);
    console.log(typeof isSubscribed);
}

validateForm(userName , age , isSubscribed);