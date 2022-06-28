module.exports = function reverse (n) {
  
const numberString = String(n);

let reverseNumber='';

if(numberString[0] === "-"){
   for(let i=numberString.length-1; i>0 ; i-=1){
        reverseNumber += numberString[i];
        } 
    }
else{
    for(let i=numberString.length-1; i>=0 ; i-=1){
        reverseNumber += numberString[i];
        }   
    }

return Number(reverseNumber);
}
