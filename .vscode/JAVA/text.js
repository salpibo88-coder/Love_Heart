function age() {
    if (age < 12) {
        console.log ("Free");
    } else if (age >= 12 && age <= 17) {
        console.log("$5");
    } else {
        console.log("$10");
    }
}
age(23)



const readline = require('readline');
const age = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ticket(age) {
    if (age < 12) {
        return "Free";
    } else if (age >= 12 && age <= 17) {
        return "$5";
    } else {
        return "$10";
    }
}
age.question('Please enter your age: ', (userAge) => {
    const price = ticket(Number(userAge));
    console.log("Your ticket price is: " + price);
    
    rl.close();
});