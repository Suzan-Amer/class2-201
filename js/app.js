'use strict';

 let score= 0; 

let userName = prompt('can you enter your name ,plz?');
console.log ('username : ' +userName);
alert ('hallo ' + userName +' welcome to my page , have fun ');

function question1 (){

let s1=prompt ('do you think i like drawing ?');
switch(s1.toUpperCase()){
    case 'YES' 
       :console.log ('yes , you do');
    case 'Y'
      :console.log ('yes , you do');
    alert('yes , I do');
    score++;
    break;
    
    case'NO'
       :console.log('no , you dont');
    case 'N'
       :console.log ('no , you dont');
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
    case 'YES' 
       :console.log ('yes , you do');
    case 'Y'
       :console.log ('yes , you do');
   alert('yes , I do');
    score++;
    break;
    
    case'NO'
       :console.log('no , you dont');
    case 'N'
       :console.log ('no , you dont');
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
    case 'YES' 
        :console.log ('yes , you do');
    case 'Y'
       :console.log ('yes , you do');
    
    alert('yes , I do');
    score++;
    break;
    
    case'NO':console.log('no , you dont');
    case 'N':console.log ('no , you dont');
    alert ('no ,I dont');
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
    case 'YES' 
         :console.log ('yes , you do');
    case 'Y'
        :console.log ('yes , you do');
   alert('yes , I do');
   score++;
    break;
    
    case'NO'
        :console.log('no , you dont');
    case 'N'
       :console.log ('no , you dont');
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
    case 'YES' 
        :console.log ('yes , you do');
    case 'Y'
       :console.log ('yes , you do');
   alert('yes , I do');
   score++;
    break;
    
    case'NO'
        :console.log('no , you dont');
    case 'N'
        :console.log ('no , you dont');
    alert ('no ,I dont');
    score++;
    break;
    
    default: 
      alert('try agin'); 
      

    }
  }



alert ( userName +  '  lets play together  guessing game  ');

function question6 (){

let s6 =0;
for (let i = 1; i < 4 ; i++) {
  let answer = Number(prompt ('can you guess how old i am ?'));
  if (answer === 24)
  {
     alert ('you answerd correctly ' );
     score++; 
     break;
  }
  else if (answer < 24 ){
 alert('no , it is too low');
 s6++;
  }
  else if (answer > 24){
    alert('no , it is too high');
    s6++
  }
}


if (ansnwer==4){
  alert (' your attempts have ended , the correct answer is 24') ;
}
}
question6();


function question7 (){
let favMovie = ['saw', 'it', 'call', 'final destination' ];

let s7 = 0 ;
for (let i=0 ; i < 6 ; i++ )
{let m1 = prompt('can you guess my fav hrror movie ?' );
m1=m1.toUpperCase();
    if ( m1===favMovie[0] || m1===favMovie[1] || m1===favMovie[2] || m1===favMovie[3] ){
    alert ( ' yes it is my fav movie  ' + ansnwer1 + ' whatcit you will like it ' );
    score++;
    break;
}else { alert('try agin ');
s7++;
} 
}
}
question7();
   
    
if (s7==6){alert (' Your chances of guessing have expired , my favourite foods are : ' + favMovie ) ;}


alert ('your score is ' +  score + ' great job '+ userName );

alert ('Thank you  ' +  userName  +  'have a nice day ' );