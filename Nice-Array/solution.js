function isNice(arr){
  if (arr.length === 0) {
    return false;
  } else {
    for (var i = 0; i < arr.length; i++) {
      var flag = false;
      var current = arr[i];
      for (var j = 0; j < arr.length; j++) {
        if (current === arr[j] + 1 || current === arr[j] - 1) {
          flag = true;
        }
      }
      if (flag === false) {
        return false;
      }
    }
    return true;
  }
}