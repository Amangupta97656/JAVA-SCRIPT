var fibGenerator = function*() {

  let current = 0; 
  let next = 1;

  while (true) {
    yield current; 
    let temp = current + next;
    current = next;
    next = temp;
  }
};