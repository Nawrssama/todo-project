'use strict';


let name1 = prompt("please enter your name : ");
console.log(name1);


let gender = prompt("please enter your gender : ( male ) ore ( female )");
console.log(gender);



let age = prompt("please enter your age : ");
console.log(age);

if (age <= 0){
    alert("you are under the age");
};

let conres = confirm("do you want to skip the welcoming message : ");
console.log(confirm);

if (conres == false){
    switch(gender){
        case "male" :
            alert("welcome Mr. " + name1 + " you are soo amazing by the way ;)");
            break;
        case "female" :
            alert("welcome Ms. " + name1 + " you are soo amazing by the way ;)")
            break;
        default :
            alert("welcome " + name1 + " you are soo amazing by the way ;)")
    }
    
} 





// if (gender === "male"){
//     alert("wellcome Mr. " + name1 + " you are soo amazing by the way ;)")
// } else if (gender === "female"){
//     alert("wellcome Ms. " + name1 + " you are soo amazing by the way ;)")
// } else {
//     alert("wellcome " + name1 + " you are soo amazing by the way ;)")
// }


