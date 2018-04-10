function abbrevName(name) {
  let arrNames = name.split(' ');
  for (let i = 0; i < arrNames.length; i++){
    let firstInitial = arrNames[0].charAt(0).toUpperCase();
    let secondInitial = arrNames[1].charAt(0).toUpperCase();
    let initials = firstInitial + '.' + secondInitial;
    return initials;
  }
}