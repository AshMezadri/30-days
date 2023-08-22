let space = ' '
let firstName = 'Ash'
let lastName = 'Armanini'
let age = 18
let country = 'Brasil'

let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

//Concatenating Using Addition Operator//

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)

//Long Literal Strings//

const paragraph = "My name is Ash Armanini. I live in Blumenau, Brasil. \
I study programming, I enjoy listening to music and watching movies. "

console.log(paragraph)