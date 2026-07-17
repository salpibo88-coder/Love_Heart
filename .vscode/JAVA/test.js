const readline = require('readline');

const txt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function getBonus(totalSalary) {
    if (totalSalary >= 1000) return 20;
    if (totalSalary >= 500) return 10;
    return 5;
}
txt.question('Enter Name: ', (name) => {
    txt.question('Enter Position: ', (position) => {
        txt.question('Enter Days Worked: ', (days) => {
            txt.question('Enter Salary Per Day: ', (salaryPerDay) => {
                const dayWorked = Number(days);
                const salaryDay = Number(salaryPerDay);
                const totalSalary = dayWorked * salaryDay;
                const bonusPercent = getBonus(totalSalary);
                const bonusAmount = (totalSalary * bonusPercent) / 100;
                const grandTotal = totalSalary + bonusAmount;           
                console.log("\nDisplay");
                console.log("Name: " + name);
                console.log("Position: " + position);
                console.log("Day Worked: " + dayWorked);
                console.log("Salary Per Day: $" + salaryDay);
                console.log("Total Salary: $" + totalSalary);
                console.log("Bonus (%): " + bonusPercent + "%");
                console.log("Bonus Amount: $" + bonusAmount);
                console.log("Grand Total: $" + grandTotal);
                txt.close();
            });
        });
    });
});