let arr = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

let output = arr.map( item => {
    
  if (item.trim().length === 0) {
    return "empty string"
  } else {
    return item;
  }
});

console.log(output)