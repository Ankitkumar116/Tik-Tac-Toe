let btn=document.querySelectorAll(".btn");
let num='0';let k=0;
let h2=document.getElementsByTagName("h2")[0];
const wincombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
]
let reset=document.querySelector("#reset");
reset.addEventListener('click',()=>{
    for(let i=0;i<9;i++){
        btn[i].disabled=false;
        btn[i].innerText='';
    }
    h2.innerText='';k=0;
})
btn.forEach((e)=>{
    e.addEventListener('click',()=>{
     if(num=='0'){
        e.innerHTML=num;
        num="X";
     }
     else if(num=='X'){
        e.innerHTML=num;
        num="0";
     }
     wincombo.forEach((i)=>{
let a=btn[i[0]].innerText; 
let b=btn[i[1]].innerText; 
let c=btn[i[2]].innerText;
if(a!=''&& b!=''&& c!=''){
    if(a===b && b===c){
        h2.innerText=`Winner is ${a}` 
        for(let i=0;i<9;i++){
            btn[i].disabled=true;k=0;
        }
    }
}
     })
     e.disabled=true;
     k++;
     if(k==9){
        h2.innerText='Draw'
     }
       })
})


