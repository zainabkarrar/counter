let count1=0;
let count2=0;
let count3=0;
let count4=0;
const button=["reset","decrease"];
const maximmum={ max:9};
const no1 = document.getElementsByClassName("no1")[0];
const no2 = document.getElementsByClassName("no2")[0];
const no3 = document.getElementsByClassName("no3")[0];
const no4 = document.getElementsByClassName("no4")[0];
const dcrBtn = document.getElementsByClassName("decrease")[0];
const reset = document.getElementsByClassName("reset")[0];

function upcounter(){
    if (count4==maximmum.max){
        count4=0;
        count3++;
    }
    if(count3==maximmum.max){
        count3=0;
        count2++;
    }
    if(count2==maximmum.max){
        count2=0;
        count1++;
    }
    if(count1==maximmum.max){
        alert("the maximmum");
        count1=maximmum.max;
    }
    no1.textContent=count1;
    no2.textContent=count2;
    no3.textContent=count3;
    no4.textContent=count4;
}
dcrBtn.addEventListener("click",function(){
    count4++;
    upcounter();
});
reset.addEventListener("click", function(){
    count1 = count2 = count3 = count4 = 0;
    upcounter();
});
for(let i=0;i<button.length;i++){
    console.log(button[i]);
}
upcounter();