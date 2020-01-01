// *** .charAt() ***
const str = 'I am learning JavaScript'
console.log(str)
const charSix = str.charAt(5)
console.log(charSix)
// or
console.log(str[5])

// *** .charCodeAt() ***
const charSixCode = str.charCodeAt(5)
console.log(charSixCode)

// *** .concat() ***

const str2 = '!!!'
const strConcat = str.concat(str2)
console.log(strConcat)
// or more productive
const strConcatPlusOperator = str + str2
console.log(strConcatPlusOperator)

// *** .endsWith() ***
console.log(str.endsWith('ipt', 24))
console.log(str.endsWith('ip', 23))

// *** .startsWith() ***
console.log(str.startsWith('I am', 0))
console.log(str.startsWith('I am', 1))
console.log(str.startsWith(' am', 1))

// *** Sring.fromCharCode() ***
const charFromCode = String.fromCharCode(114)
console.log(charFromCode)

// *** .includes() *** 
console.log(str.includes('I am', 0))
console.log(str.includes('I am', 1))

// *** .repeat() *** 
let e = 'e'
let excMark = '!'
e = e.repeat(5)
excMark = excMark.repeat(10)
console.log('I am learning JS Y' + e + 's' + excMark)

// *** .match() ***
console.log(str.match(/am/g))
console.log(str.match(/am/))

// *** .replace() ***

const strReplace = str.replace('am', 'AM')
console.log(strReplace)

// *** .indexOf() *** 
console.log(str.indexOf('a', 0))
console.log(str.indexOf('a', 3))
console.log(str.indexOf('q'))

// *** .lastIndexOf() *** 
console.log(str.lastIndexOf('a'))
console.log(str.lastIndexOf('a', 8))
console.log(str.lastIndexOf('a', 6))

// *** .search() ***
console.log(str.search(/t/))

// *** .slice() ***
console.log(str.slice(2, 4))

// *** .split() ***
console.log(str.split(''))
console.log(str.split(' '))
console.log(str.split(' ', 2))
console.log(str.split(/a/))

// *** .substring() ***
console.log(str.substring(2, 4))

// *** .substr() ***
console.log(str.substr(2, 4))

// *** .toLowerCase() ***
console.log(str.toLowerCase())

// *** .toUpperCase() ***
console.log(str.toUpperCase())

// *** .trim() ***
const strTrim = '        Js         '
console.log(strTrim)
console.log(strTrim.trim())

function stringMethods() {
    const str = 'I am learning JavaScript!';
    const strr = 'I am learning am JavaScript!';
    const str2 = ' and React';
    const str3 = '!';
    const trim = '   Js   ';
    const reg = /learn/;
    const regExp = new RegExp(/Java/g);
    console.log(typeof regExp)
    const strLength = str.length;
    console.log(strLength);
    console.log(str.charAt(0));
    console.log(str.charAt(1)); // space is also a character
    console.log(str.charAt(5));
    console.log(str.charAt(50));
    console.log(str.charCodeAt(8)) // letter 'r'
    console.log(str.charCodeAt(1)) // space
    console.log(str.startsWith('I'))
    console.log(str.startsWith('a'))
    console.log(str.startsWith('I', 0))
    console.log(str.startsWith('I', 1))
    console.log(str.startsWith('a', 0))
    console.log(str.startsWith('a', 2))
    console.log(str.endsWith('pt!'))
    console.log(str.endsWith('a'))
    console.log(str.endsWith('pt!', strLength))
    console.log(str.startsWith('pt!', 24))
    console.log(str.startsWith('a', 0))
    console.log(str.startsWith('a', 2))
    console.log(str.concat(str2, ));
    console.log(str.concat(str2, str3));
    console.log(str + str2 + str3 + '!!');
    console.log(str.toLowerCase());
    console.log(str.toUpperCase());
    console.log(trim.trim());
    console.log(str.match('am'));
    console.log(str.match(/am/));
    console.log(str.match(/am/g));
    console.log(str.match(/q/g));
    console.log(strr.match(/am/g));
    console.log(str.match(reg));
    console.log(regExp);
    console.log(str.match(regExp));
    console.log(str.search(/am/));
    console.log(str.search(/q/));
    console.log(strr.search(/am/g)); // only first match
    console.log(str3.repeat(10));
    console.log(str.indexOf('a'));
    console.log(str.indexOf('q'));
    console.log(str.indexOf('a', 3));
    console.log(str.lastIndexOf('a'))
    console.log(str.lastIndexOf('a', 7))
    console.log(str.lastIndexOf('a', 5))
    console.log(str.lastIndexOf('!', 7))
    console.log(str.lastIndexOf('!', strLength))
    console.log(str.slice(2, 4));
    console.log(str.split(''));
    console.log(str.split(' '));
    console.log(str.split('a'));
    console.log(str.split('a', 2));
    console.log(str.substr(2, 4));
    console.log(str.substr(0, ));
    console.log(str.substr(0, strLength));
    console.log(str.substr(strLength, ));
    console.log(str.substring(2, 4));
    console.log(str.includes('I am', 0));
    console.log(str.includes('I am', 1));
    console.log(str.replace('I am', 'We are'))
}

stringMethods();