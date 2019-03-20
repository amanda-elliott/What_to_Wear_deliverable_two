// JavaScript source code


var eventType = prompt("What type of event are you attending?");
var tempFahr = prompt("What temperature is it outside in Fahrenheit?");


if (eventType === "casual") {
    answerA = ("something comfy");
} else if (eventType === "semi-formal") {
    answerA = ("a polo")
} else if (eventType === "formal") {
    answerA = ("a suit")
}


if (tempFahr < "54") {
    answerB = ("a coat");
} else if (tempFahr > "70") {
    answerB = ("no jacket");
} else {
    answerB = ("a jacket");
}


var result = ("Since you are attending a " + eventType + " event and the temperature is " + tempFahr + " degrees Fahrenheit, you should wear " + answerA + " and " + answerB + ".");

alert(result);
console.log(result);

// should I have default values in the question box?