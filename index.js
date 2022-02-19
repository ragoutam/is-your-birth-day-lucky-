const dateOfBirthday = document.querySelector("#dateOfBirthday");

const luckyNumber=document.querySelector("#luckyNumber");

const checkBtn=document.querySelector("#checkBtn");
const output=document.querySelector("#output")

console.log(dateOfBirthday,luckyNumber,checkBtn);

checkBtn.addEventListener("click",()=>
{
    let replacedDate=replacer(dateOfBirthday.value);

    let sum=0;
    
    for(let i=0;i<replacedDate.length;i++){
        sum=sum + Number(replacedDate.charAt(i))
    
    }
    let luckyNum=luckyNumber.value;
    
    if(sum%luckyNum===0){
       output.innerText="Yay! your birthday is lucky!"
    }
else{
    output.innerText="Nope! your birthday is not lucky!!"
}
   
})

function replacer(dob){
    const replacedDate=dob.replaceAll("-","");
   return replacedDate
    
}
// function devider(sum){
// let devidedNumber=sum/luckyNumber.value;
// return devidedNumber
// }
