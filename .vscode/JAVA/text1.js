function login(username, password) {
    if (username === "admin" && password === "123") {
        return "Login successful";
    } else {
        return "Login failed";
    }
}
console.log(login("admin", "123"));  
console.log(login("user1", "abc"));   



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function login(username, password) {
    if (username === "admin" && password === "123") {
        return "Login successful";
    } else {
        return "Login failed";
    }
}
rl.question('Enter your username: ', (inputUser) => {
    // Then ask for the password
    rl.question('Enter your password: ', (inputPass) => {
        const result = login(inputUser, inputPass);
        console.log(result);
        rl.close();
    });
});