var reading = prompt ('Do you have interest in reading??');
var nmb = prompt ('How many books do you read in the year??');
var type = prompt ('What type of books you like??');

if (nmb > 10 && nmb < 20){
    nmb = "oh that is nice";
} else if (nmb > 20 ){ 
    nmb = "You are a great reader!!";

} else if (nmb < 10){
    nmb = "you can do better ";
} 
document.write(nmb);

confirm("you are in the right path");
alert ("keep going");




 