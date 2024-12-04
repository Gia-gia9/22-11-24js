let passwords = ["pass123", "qazxswedc", "egsedrjdgae"];
passwords.push("passhahha","liheg", "lualgrt");
console.log(passwords);

for (let i = 0 ;  i < passwords.length; i++ ){
    let passw = passwords[i];
    let length1 = passw.length
    console.log(`${passw} contains ${length1}`);
}

for (let i = 0; i < passwords.length ; i++) {
    if (passwords[i].length >=8) {
    passwords[i] = "strong password";
} else {
   passwords[i] = "weak password";
   
}
}
console.log(passwords);


passwords.pop();
passwords.shift();
console.log(passwords);

passwords.unshift("qwerty");
console.log(passwords);