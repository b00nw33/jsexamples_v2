/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/
function ftnSalutation() {
  //  implement your statement(s) here
  // const arrSalutation = new Array("Mr.", "Mrs.", "Ms.");
  // return arrSalutation;

  return new Array("Mr.", "Mrs.", "Ms.", "Dr.");
}

/* 
  ftnSalutation written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/
const ftnGreeting = (salutation, user) => {
  //  implement your statement(s) here
  return `Salutation: ${salutation}\nName: ${user}`;
};

/*
Complete the challenge statement below
Create the function validateInputs below
Hint: 
- validateInputs accepts two arguments (choice, name)
- name should include a default value name=""
- validateInputs returns false if either choice or name is incorrectly filled
- validateInputs returns true if both choice and name are correctly filled
*/


const validateInputs = (choice, name="") => {
  return choice.length>0 && name.length>0;
};
