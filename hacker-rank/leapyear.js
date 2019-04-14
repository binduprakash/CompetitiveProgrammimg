function leapYear(year) {
  if (year % 4 == 0){
    if(year % 100 == 0){
          if (year % 400 == 0){
             return "Yes";
          } else {
              return "No";
          }
        }
        else{
          return "Yes"
        }
  } else {
    return "No";
  }
}

console.log (leapYear(2600));