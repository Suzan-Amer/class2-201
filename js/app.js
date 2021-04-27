'use strict';

 /*let userName = prompt('can you enter your name ,plz?');
console.log ('username : ' +userName);
alert ('hallo ' + userName +' welcome to my page , have fun ');



let s1=prompt ('do you think i like drawing ?');
switch(s1.toUpperCase()){
    case 'YES' :console.log ('yes , you do');
    case 'Y':console.log ('yes , you do');
    alert('yes , I do');
    break;
    
    case'NO':console.log('no , you dont');
    case 'N':console.log ('no , you dont');
    alert ('no ,I dont');
    break;
    
    default: 
      console.log('plz ask me agin');
      alert('plz ask me agin');
      
}


let s2=prompt ('do I speak spanish ?');
switch(s2.toUpperCase()){
    case 'YES' :console.log ('yes , you do');
    case 'Y':console.log ('yes , you do');
   alert('yes , I do');
    break;
    
    case'NO':console.log('no , you dont');
    case 'N':console.log ('no , you dont');
   alert ('no ,I dont');
    break;
    
    default: 
      console.log('plz ask me agin');
      alert('plz ask me agin');
      
}


let s3=prompt ('AM I traind as carpentry?');
switch(s3.toUpperCase()){
    case 'YES' :console.log ('yes , you do');
    case 'Y':console.log ('yes , you do');
    
    alert('yes , I do');
    break;
    
    case'NO':console.log('no , you dont');
    case 'N':console.log ('no , you dont');
    alert ('no ,I dont');
    break;
    
    default: 
      console.log('plz ask me agin');
      alert('plz ask me agin');
      
}


let s4=prompt ('AM I good at crafts ?');
switch(s4.toUpperCase()){
    case 'YES' :console.log ('yes , you do');
    case 'Y':console.log ('yes , you do');
   alert('yes , I do');
    break;
    
    case'NO':console.log('no , you dont');
    case 'N':console.log ('no , you dont');
    alert ('no ,I dont');
    break;
    
    default: 
      console.log('plz ask me agin');
      alert('plz ask me agin');
      
}


let s5=prompt ('did i study at aabu unversity ?');
switch(s5.toUpperCase()){
    case 'YES' :console.log ('yes , you do');
    case 'Y':console.log ('yes , you do');
   alert('yes , I do');
    break;
    
    case'NO':console.log('no , you dont');
    case 'N':console.log ('no , you dont');
    alert ('no ,I dont');
    break;
    
    default: 
      console.log('plz ask me agin');
      alert('plz ask me agin'); 
      
}
*/
let score = 0;
let answer = prompt ('guess how old i am', 'answer with numbers' );

console.log(answer);
for (let i = 1; i < 4 ; i++) {
if (answer  === '24'){
  alert('you answerd correctly ');
  score++;
  alert ('your score' + score );
break;
} else if (answer > 24) {
  alert('no , it is too high');
  answer=  prompt ('guess again' , 'answer with numbers' );
   
} else if (answer < 24){
  alert('no , it is too low');
  answer=  prompt ('guess again' , 'answer with numbers' );
 alert ('you finish your attempt my age is 24 ')

}
}


function qSeven() {
var favMovie = ['it', 'saw', 'call', 'final  destination'];

for (var i = 0; i < 6; i++) {
var answerd = prompt('Can you guess my fav horror movie ?');
 var guess = answerd.toLowerCase();

for (var j = 0; j < favMovie.length; j++){
if (guess === favMovie[j]) {
alert('you answerd correctly , good job');
score++;
break;
}
} if (i !==6){
alert('Sorry wrong answer, try again');
}

alert('you finish your attempt my,the right answer is: the call- saw- final destination -it')

}
}

qSeven();

