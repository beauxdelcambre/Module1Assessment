// Create a new file called password.js. Write a program that does the following:
// // Welcome the user to the password validator tool
// // Prompt the user for a password to validate
// // Check if the user’s password meets the following constraint: At least 10 characters long
// // If the user’s password meets the constraint, show a success message to the user
// // If the user’s password fails the constraint, show a failure message to the user

const welcomeMsg = ("Welcome user!")
console.log(welcomeMsg)

let password = "Password123"


if (password.length >= 10){
    console.log("Success!")
}else{ console.log("Failure")

}