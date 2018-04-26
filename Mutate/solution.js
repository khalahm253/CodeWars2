function mutateMyStrings(stringOne, stringTwo){

    var masterString = stringOne;
    var tempString = stringOne;
    
    for(var i = 0; i < stringOne.length; i++){
    
      let tempStringArray=tempString.split('');
      
      tempStringArray.splice(i,1,stringTwo.charAt(i));
      tempString = tempStringArray.join('');
      masterString = masterString + '\n' + tempString;
    }
    
    let masterStringArray = masterString.split('\n');
    
    let uniqueArray = masterStringArray.filter(function(item, pos) {
        return masterStringArray.indexOf(item) == pos;
    })
    
    return uniqueArray.join('\n') + '\n';
    
    }