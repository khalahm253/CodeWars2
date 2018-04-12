function insertDash(num) {
  var n = num.toString().split('');
  for (var i = 0; i < n.length; i++) {
    if (n[i] % 2 === 1 && n[i + 1] % 2 === 1){
      n.splice(i + 1, 0, '-');
    }
  }
  n = n.join('');
  return n;
}