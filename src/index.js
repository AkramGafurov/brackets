module.exports = function check(str, bracketsConfig) {
  let memory = str;
for(let j = 0;j<str.length; j++){
  for (let i=0;i<bracketsConfig.length; i++){
    let pattern = bracketsConfig[i].join('');
    if(memory.includes(pattern)){
      memory = memory.replace(pattern,'')
      if (memory.length==0){
        return true
      }
    }
  }
} 

return false;

}

// console.log(check('()', [['(', ')']]));
// console.log(check('((()))()', [['(', ')']]));
// console.log(check('())(', [['(', ')']]));
// console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));
// console.log(check('[(])', [['(', ')'], ['[', ']']]));
// console.log(check('[]()', [['(', ')'], ['[', ']']]));
// console.log(check('[]()(', [['(', ')'], ['[', ']']]));
// // check('[]()', [['(', ')'], ['[', ']']]) // -> true
// // check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// // special case: opening and closing bracket can be the same :)

// // check('||', [['|', '|']]) // -> true
// // check('|()|', [['(', ')'], ['|', '|']]) // -> true
// console.log(check('|(|)', [['(', ')'], ['|', '|']]));
// // check('|(|)', [['(', ')'], ['|', '|']]) // -> false
// // check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true