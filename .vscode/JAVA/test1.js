
function getBonus(totalSalary) {
    if (totalSalary >= 1000) {
        return 20;
    } else if (totalSalary >= 500) {
        return 10;
    } else {
        return 5;
    }
}
let name = question("Enter Name:");
let position = question("Enter Position:");
let dayWorked = question("Enter Day Worked:");
let salaryPerDay = question("Enter Salary Per Day:");
let totalSalary = dayWorked * salaryPerDay;
let bonusPercent = getBonus(totalSalary);
let bonusAmount = totalSalary * bonusPercent / 100;
let grandTotal = totalSalary + bonusAmount;
console.log("Name: " + name);
console.log("Position: " + position);
console.log("Day Worked: " + dayWorked);
console.log("Salary Per Day: " + salaryPerDay);
console.log("Total Salary: " + totalSalary);
console.log("Bonus (%): " + bonusPercent + "%");
console.log("Bonus Amount: " + bonusAmount);
console.log("Grand Total: " + grandTotal);