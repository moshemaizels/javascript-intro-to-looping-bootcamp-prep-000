
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 0) {
      array.unshift("I am 1 strange loop.")
    } else {
      array.unshift("${i} strange loops.")
    }

  }
  return array
}

function whileLoop(n) {
  while (n >= 0) {
    console.log(--n)
  } return ("done")

}
