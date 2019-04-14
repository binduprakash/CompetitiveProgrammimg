const employees = {
    1 :  {
      first_name: 'Bindu',
      last_name: 'Prakash',
      cart: [],
    },
    2: {
      first_name: 'Karthik',
      last_name: 'Sampath',
      cart: [],
    }
  }
employees[1].cart.push('chips');
employees[2].cart.push('pops','pickle')
console.log(employees);

employees[1].cart.length = 0;
console.log(employees); 

let length = employees[2].cart.length;
console.log(`The length in Karthik's cart is ${length}`);

function find(value){
    let array = employees[2].cart;
    for(let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        } else {
            return -1;
        }
    } 
}
console.log(find('pops'));

console.log(Object.keys(employees[1]));

console.log(Object.values(employees[2]));





 

