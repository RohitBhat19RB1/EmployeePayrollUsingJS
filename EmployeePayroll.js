//uc3 function for getting working hours
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const Number_Of_Working_Days = 20;
const MAX_HRS_INMONTH=100;
let totalEmpHrs=0;
let totalWorkingDays=0;
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        default:
            return 0;
    }
}
while(totalEmpHrs<MAX_HRS_INMONTH && totalWorkingDays<Number_Of_Working_Days){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs+=getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HR;
console.log("Total Working Days:"+totalWorkingDays+" TotalHours:"+totalEmpHrs+" EmpWage:"+empWage);