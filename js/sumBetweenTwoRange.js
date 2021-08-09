const total = (start, end) => (end > start ? end + total(start, end - 1) : end);

// const total = (start, end) =>
// end - 1 > start ? end -1 + total(start, end - 1) : 0;


  console.log(total(2, 6));