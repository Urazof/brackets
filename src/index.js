module.exports = function check(str, bracketsConfig) {
    let arrayString = str.split('');
    let stack = [];
    let bracketsConf = Object.fromEntries(bracketsConfig);
    console.log(bracketsConf)
    
    for (let i = 0; i < arrayString.length; i++) {
        if (stack[stack.length - 1] === arrayString[i]) {
            stack.pop();
        } else if (bracketsConf[arrayString[i]]) {
            stack.push(bracketsConf[arrayString[i]]);
        } else {
            return false;
        }
    }
    return stack.length == 0;
}

