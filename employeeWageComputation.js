console.log("Welcome to Employee Wage Computation Program");
const FULL_DAY_WAGE=20;
const FULL_DAY_WORKING_HOURS=8;

function attendence() {
    let employee_Attendence = Math.floor(Math.random() * 2);

    if (employee_Attendence == 0) {
        console.log("Employee is Present \t Daily Wage = "+ FULL_DAY_WAGE*FULL_DAY_WORKING_HOURS);
    }
    else {
        console.log("Employee is Absent");
    }
}

attendence();