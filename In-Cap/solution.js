function capitalize(s,arr){
    var s = s.split('');
    for (var i = 0; i < arr.length; i++){
      if (s[arr[i]]) {
        s[arr[i]] = s[arr[i]].toUpperCase();
      }
    }
    s = s.join('')
    return s;
   };