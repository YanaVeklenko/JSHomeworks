
var originalArray = [
  {
      userName:"Test",
      lastName:"Test",
      email:"test.test@gmail.com"
  },
  {
      userName:"Dmitro",
      lastName:"Porohov",
      email:"dmitro.porohov@yahoo.com"
  },
  {
      userName:"Andrii",
      lastName:"",
      email:"andrii@mail.ru" // Нам такі не підходять
  },
];
const regExp = /^[\w._%+-]+@(gmail\.com|yahoo\.com)$/;
function filterOutInvalidEmails() { 
  var validEmails = [];
  for (let i = 0; i < originalArray.length; i++) {
    var email = originalArray[i].email;
    if (regExp.test(email)) { 
      validEmails.push(email);
    }
  }
  return validEmails;
}

console.log(filterOutInvalidEmails());