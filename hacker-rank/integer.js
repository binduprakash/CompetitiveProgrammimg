function integer(n1,n2) {
  if (n1 >= 50 && n1 <= 99 || n2 >= 50 && n2 <= 99) {
    return "true";
  }
  else {
    return "false";
  }
}

console.log (integer(51,65));