
let result;
let randomword=document.getElementById('quoteDisplay')
 function makeid(length) {
    result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   randomword.innerText=result;
   return result;
   
}

console.log(makeid(1));


document.getElementById('quoteInput').addEventListener('keypress',enter)

function enter(){
    
    let correct=true;
   let a= document.getElementById('quoteInput').value

  if(a==randomword.innerText){
    console.log("complete")
    
    
  }
  else {
   correct=false

    
  }

  if(correct) makeid(1)
  
//   document.getElementById('quoteInput').value=null;
}
let setTimer=document.getElementById("timer")
let startTime;
function timer(){

    setTimer.innerText=0;
      startTime=new Date();
   let id= setInterval(()=>{
      setTimer.innerText=getTimerTime()
    },1000)
}
function getTimerTime(){
    return Math.floor((new Date()-startTime)/1000)
}

document.getElementById('quoteInput').addEventListener('click',timerstart)
function timerstart(){
    timer();

}
