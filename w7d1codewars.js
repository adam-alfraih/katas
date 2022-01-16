

// // this is a solution! 
// function validParentheses(parens){
//     var result = 0;
    
//     for (var i = 0 ; i < parens.length && result>= 0; i++) {
//       result+= (parens[i] == '(') ? 1 : -1;    
//     }
    
//     return (result == 0);
//   }

testStr = "(())((()())())"

function validParentheses(parens) {
    while (parens.includes('()')) {
        // remove the pair
    parens = parens.replace('()', '')
    }
return parens === ''
  }



  // validParentheses(testStr)