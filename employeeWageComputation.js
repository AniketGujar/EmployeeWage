console.log("Welcome to Employee Wage Computation Program");

const HOUR_WAGE = 20;
const FULL_DAY_WORKING_HOURS = 8;
const PART_TIME_WORKING_HOURS = 4;
const MAX_WORKING_HOURS = 100;
const MAX_WORKING_DAYS = 20
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let totalWage = 0;

function attendence() {

    for (totalWorkingDays = 1; totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHours <= MAX_WORKING_HOURS; totalWorkingDays++) {

        let employee_Attendence = Math.floor(Math.random() * 3);

        switch (employee_Attendence) {
            case 0:
                console.log("Day " + totalWorkingDays + "\t\tEmployee is Present \t\t Daily Wage = " + HOUR_WAGE * FULL_DAY_WORKING_HOURS);
                totalWorkingHours += FULL_DAY_WORKING_HOURS;
                totalWage += HOUR_WAGE * FULL_DAY_WORKING_HOURS;
                break;
            case 1:
                console.log("Day " + totalWorkingDays + "\t\tEmployee is Present Part Time \t Daily Wage = " + HOUR_WAGE * PART_TIME_WORKING_HOURS);
                totalWorkingHours += PART_TIME_WORKING_HOURS;
                totalWage += HOUR_WAGE * PART_TIME_WORKING_HOURS;
                break;
            case 2:
                console.log("Day " + totalWorkingDays + "\t\tEmployee is Absent \t\t Daily Wage = 0");
                break;
        }
    }
}

attendence();

console.log("Total Working Hours = " + totalWorkingHours);
console.log("Total Working Days = " + totalWorkingDays);
console.log("Total Monthly Wage = " + totalWage);