console.log("Welcome to Employee Wage Computation Program");
const FULL_DAY_WAGE = 20;
const FULL_DAY_WORKING_HOURS = 8;
const PART_TIME_WORKING_HOURS = 4;

function attendence() {
    let employee_Attendence = Math.floor(Math.random() * 3);

    if (employee_Attendence == 0) {
        console.log("Employee is Present \t Daily Wage = " + FULL_DAY_WAGE * FULL_DAY_WORKING_HOURS);
    }
    else if (employee_Attendence == 1) {
        console.log("Employee is Present Part Time \t Daily Wage = " + FULL_DAY_WAGE * PART_TIME_WORKING_HOURS);
    }
    else {
        console.log("Employee is Absent \t Daily Wage = 0");
    }
}

attendence();