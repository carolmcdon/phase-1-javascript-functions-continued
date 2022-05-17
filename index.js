function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun('bathe my dog');

function mondayWork(activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`);
}
mondayWork('work from home');

function wrapAdjective(visualFlair = "*") {
    return function encouragingPromptFunction(parameter = "special") {
        return `You are ${visualFlair}${parameter}${visualFlair}!`;
    }
}
wrapAdjective("%")("a dedicated programmer");