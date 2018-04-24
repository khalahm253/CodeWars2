function cubeOdd(arr) {
  arr = arr.filter((num) => {return num % 2 != 0}); //filter through num where it is NOT an even number.
  arr = arr.reduce((acc, ctr) => acc + Math.pow(ctr, 3), 0); //reduce arr to  where the accumilator is added to the counter cubed 
  return isNaN(arr) ? undefined : arr; 
}