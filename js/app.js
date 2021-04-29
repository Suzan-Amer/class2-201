'use strict';

 let score= 0; 

let userName = prompt('can you enter your name ,plz?');

alert ('hallo ' + userName +' welcome to my page , have fun ');

function question1 (){

let s1=prompt ('do you think i like drawing ?');
switch(s1.toUpperCase()){
    case 'YES' :
       
    case 'Y':
  
    alert('yes , I do');
    score++;
    break;
    
    case'NO':
     
    case 'N':
       
    alert ('no ,I dont');
    break;
    
    default: 
      alert('try agin');
      
}
}
question1();


function question2 (){
let s2=prompt ('do I speak spanish ?');
switch(s2.toUpperCase()){
    case 'YES' :
    case 'Y':
       
   alert('yes , I do');
    score++;
    break;
    
    case'NO':
    
    case 'N':
       
   alert ('no ,I dont');
    break;
    
    default: 
      alert('try agin');
      
}
}
question2();

function question3 (){
let s3=prompt ('AM I traind as carpentry?');
switch(s3.toUpperCase()){
    case 'YES': 
        
    case 'Y':
      
    
    alert('yes , I do');
    score++;
    break;
    
    case'NO':
    case 'N':
    break;
    
    default: 
      alert('try agin');
      
}
}
question3();


question4();
function question4 (){

let s4=prompt ('AM I good at crafts ?');
switch(s4.toUpperCase()){
    case 'YES' :
         
    case 'Y':
        
   alert('yes , I do');
   score++;
    break;
    
    case'NO':
       
    case 'N':
       
    alert ('no ,I dont');
    break;
    
    default: 
      
      alert('try agin');
      
}
}


question5();
function question5 (){
let s5=prompt ('did i study at aabu unversity ?');
switch(s5.toUpperCase()){
    case 'YES' :
    case 'Y':
   alert('yes , I do');
   score++;
    break;
    
    case'NO':  
    case 'N':
       
    alert ('no ,I dont');
    score++;
    break;
    
    default: 
      alert('try agin'); 
      

    }
  }



alert ( userName +  '  lets play together  guessing game  ');

function question6() {
var myAge;
var age = 0;

while (age < 4) {
 myAge = prompt('can you guess how old i am ? (answer with number)');
if (myAge == 24) {
alert('you answer correctly');
score++;
break;

} else {


if (myAge > 24 ) { alert('too high'); } 
else if (myAge < 24 ) { alert('too low'); }
 else { alert('try agein'); }
   }
  }

 alert ('  the correct answer is 24') ;
}


question6();



  



function question7 (){

  var movie = ['it', 'saw', 'call', 'final destinatin'];
  var favMovie;
  var movies = 0;


  while (movies < 6) {

 favMovie = prompt('can you Guess my hrror movies ');
favMovie = favMovie.toLocaleLowerCase();
if (favMovie === movie[0] || favMovie === movie[1] || favMovie === movie[2] || favMovie === movie[3]) {
 alert('you answerd correctly');
 score++;

 break;

} else {
 
alert('try again');


 }
}




  alert(`my fav movie is ${movie}`);
     
      
  
  }
 
  question7 ();


alert ('your score is ' +  score + 'of  7 great job '+ userName );

alert ('Thank you  ' +  userName  +  ' have a nice day ' );