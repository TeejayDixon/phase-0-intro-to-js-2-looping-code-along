



/*function writeCards(object, key) {
    let myVar = [];

    for (i = 0; i < myVar.length; i++){
      let obj = (`Thank you, ${myVar[i]}, for the wonderful ${key} gift!`);
       
  };
  return console.log(obj);
}; 


writeCards(['Guadalupe', 'Aki', 'Ollie'], 'birthday'); */
let time = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function countDown() {
  
  for (let i = 0; i < time.length; time--){
    
    console.log(time[i]);
  }

};

countDown();