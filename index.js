// Code your solutions in this file
function writeCards(array, name) {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
  }
  return newArray;
}