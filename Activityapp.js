// Taking input
let empName = prompt("Enter Employee Name:");
let basicSalary = Number(prompt("Enter Basic Monthly Salary:"));
let workingDays = Number(prompt("Enter Number of Working Days:"));
let bonus = Number(prompt("Enter Bonus Amount:"));

// Datatypes
let totalDays = 30;
let grossSalary = 0;
let tax = 0;
let netSalary = 0;

// Function to calculate Gross Salary
function calculateGrossSalary() {
    let perDaySalary = basicSalary / totalDays;
    let earnedSalary = perDaySalary * workingDays;
    grossSalary = earnedSalary + bonus;
}

// Function to calculate Tax
function calculateTax() {
    if (grossSalary <= 25000) {
        tax = grossSalary * 0.05;
    } else {
        tax = grossSalary * 0.10;
    }
}

// Function to calculate Net Salary
function calculateNetSalary() {
    netSalary = grossSalary - tax;
}

// Calling functions
calculateGrossSalary();
calculateTax();
calculateNetSalary();

// Output
document.writeln("Employee Name : " + empName + "<br>");
document.writeln("Gross Salary  : ₹" + grossSalary + "<br>");
document.writeln("Tax Deduction : ₹" + tax + "<br>");
document.writeln("Net Salary    : ₹" + netSalary);