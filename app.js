var reading = prompt ('Do you have interest in reading??');
var number = prompt ('How many books do you read in the year??');
var nmb;

if (number >= 10 && number <= 20){
    nmb= "oh that is nice";
} else if (number >= 20 ){ 
    nmb= "You are a great reader!!";

} else if (number <= 10){
    nmb= "you can do better ";
} 
document.write(nmb);
document.getElementById("good").innerText=number;

confirm("you are in the right path");
alert("keep going");





 