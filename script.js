/* typewriter effect */

/* text stored */
const words = ['dangerous.', 'terrifying.', 'devastating.'];

/* check which text using and iterate through the entire word*/
let count = 0;
let index = 0;
let currentWord = '';
let letter = '';

/* this is the typewriter effect, invoke function*/
(function type(){

  if(count === words.length){
    count = 0; 
  }
  currentWord = words[count];
  letter = currentWord.slice(0, ++ index);

/* reset and go to next word once it iterates through all the letters*/
  document.querySelector('.typewriter').innerText = letter; 
  if(letter.length === currentWord.length){
    count++; 
    index = 0; 
  }

  setTimeout(type, 350); 

}()); 