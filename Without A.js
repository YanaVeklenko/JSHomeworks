const regex = /^[^aA]{6,}$/;
console.log(regex.test("Wonderful")); 
console.log(regex.test("Joyful"));    
console.log(regex.test("Happiness")); 
console.log(regex.test("Time"));      
console.log(regex.test("Task"));      
console.log(regex.test("Apple"));  
console.log(regex.test("CActus"));  
console.log(regex.test("cat"));  
console.log(regex.test("kitten"));  