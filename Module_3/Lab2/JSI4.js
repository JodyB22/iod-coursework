function camelCase(cssProp) {
    return cssProp
        .split('-')
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

console.log(camelCase('margin-left')); // marginLeft
console.log(camelCase('background-image')); // backgroundImage
console.log(camelCase('display')); // display


function camelCaseForLoop(cssProp) {
    let result = '';
    let words = cssProp.split('-');
    
    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            result += words[i];
        } else {
            result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }
    
    return result;
}

console.log(camelCaseForLoop('margin-left')); // marginLeft
console.log(camelCaseForLoop('background-image')); // backgroundImage
console.log(camelCaseForLoop('display')); // display


function camelCaseForIn(cssProp) {
    let result = '';
    let words = cssProp.split('-');
    
    for (let index in words) {
        if (index == 0) {
            result += words[index];
        } else {
            result += words[index].charAt(0).toUpperCase() + words[index].slice(1);
        }
    }
    
    return result;
}

console.log(camelCaseForIn('margin-left')); // marginLeft
console.log(camelCaseForIn('background-image')); // backgroundImage
console.log(camelCaseForIn('display')); // display