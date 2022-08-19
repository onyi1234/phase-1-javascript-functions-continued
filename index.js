function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
let wrapAdjective = function(name = "*") {
   
    return function(activity= "special") {
        return `You are ${name}${activity}${name}!`;
    }
}