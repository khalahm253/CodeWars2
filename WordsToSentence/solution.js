function formatWords(words){

  // let lastWord = newArray ? :

  let newArray = [];
  let j = 0;

  if (words){
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== '') {
        newArray[j] = words[i];
        j++;
      }
    }

    if (newArray) {
      var lastWord = newArray[newArray.length - 1];
    }

    const regex1 = new RegExp (`,(?= ${lastWord})`);
    let wordStr = newArray.join(', ');
    let rtnstr = wordStr.replace(regex1, ' and');
    return rtnstr;
  }
  return '';
}