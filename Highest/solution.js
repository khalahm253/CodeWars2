function high(x){
  let highestWord = 0; 
  let lastWord; 
  x = x.split(' '); 
  for (let i = x.length - 1; i >= 0; i --) {
    let total = 0; 
    for (let l = 0; l < x[i].length; l ++) { 
      total += x[i].charCodeAt(l) - 96; 
    } 
    if (total >= highestWord) {
      highestWord = total;
      lastWord= x[i]; 
    }
  } 
  return lastWord; 
 }