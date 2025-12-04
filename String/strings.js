//string templates
let hello="Hello"

console.log(hello+" Monowar")

//string can be defined in 3 ways
// let str1='This is single quote string'
// let str2="This is double quote string"
// let str3=`This is backtick string`


let a=`Monowar`
let b=`Husain`
console.log(`${a} ${b}`)  //template string
console.log(a+" "+b)    //normal concatenation
console.log(a,b)      //console.log can take multiple arguments

console.log(`${a}
${b}`)  //multiline string in template literals

console.log(a+"\n"+b) //multiline string using \n

console.log(`The sum of 5 and 10 is ${5+10}`) //expression in template literals

//string methods