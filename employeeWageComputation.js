console.log("Welcome to Employee Wage Computation Program");
const FULL_DAY_WAGE = 20;
const FULL_DAY_WORKING_HOURS = 8;
const PART_TIME_WORKING_HOURS = 4;

function attendence() {
    let employee_Attendence = Math.floor(Math.random() * 3);

    switch (employee_Attendence) {
        case 0:
            console.log("Employee is Present \t Daily Wage = " + FULL_DAY_WAGE * FULL_DAY_WORKING_HOURS);
            break;
        case 1:
            console.log("Employee is Present Part Time \t Daily Wage = " + FULL_DAY_WAGE * PART_TIME_WORKING_HOURS);
            break;
        case 2:
            console.log("Employee is Absent \t Daily Wage = 0");
            break;
    }
}

attendence();