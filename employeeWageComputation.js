console.log("Welcome to Employee Wage Computation Program");

const HOUR_WAGE = 20;
const FULL_DAY_WORKING_HOURS = 8;
const PART_TIME_WORKING_HOURS = 4;
const MAX_WORKING_HOURS = 100;
const MAX_WORKING_DAYS = 20
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let totalWage = 0;

attendence = () => {
    for (totalWorkingDays = 1; totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHours <= MAX_WORKING_HOURS; totalWorkingDays++) {
        let employeeAttendence = Math.floor(Math.random() * 4);
        switch (employeeAttendence) {
            case 0:
                console.log("Employee is Absent \t\t Daily Wage = 0");
                break;
            default:
                checkWorkingTime();
        }
    }
}

checkWorkingTime = () => {

    let employeeWorkingTime = Math.floor(Math.random() * 2);

    switch (employeeWorkingTime) {
        case 0:
            console.log("Employee is Present Full Time \t Daily Wage = " + FULL_DAY_WAGE * FULL_DAY_WORKING_HOURS);
            getWorkingHours(FULL_DAY_WORKING_HOURS);
            break;
        case 1:
            console.log("Employee is Present Part Time \t Daily Wage = " + FULL_DAY_WAGE * PART_TIME_WORKING_HOURS);
            getWorkingHours(PART_TIME_WORKING_HOURS);
            break;
    }
}

getWorkingHours = (workingHours) => {
    totalWorkingHours += workingHours;
}

attendence();

console.log("Total Working Hours = " + totalWorkingHours);
console.log("Total Working Days = " + totalWorkingDays);
console.log("Total Monthly Wage = " + totalWage);