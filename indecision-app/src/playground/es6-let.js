//block scoping

var fullName = 'Vinay Sing';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    var surName = fullName.split(' ')[1];
    console.log(firstName);
}

console.log(surName);