function validatePIN (pin) {
  let validPin = (pin.length == 4 || pin.length == 6) && /^\d+$/.test(pin)
  return validPin
}