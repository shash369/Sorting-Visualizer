const n=Number(prompt("enter the size of array you want"))
// const n=30;
let speed=100;
const array=[];
init();
function init(){
    for (let i=0;i<n;i++){
          array[i]=Math.random();
         } 
    showBars();    
} 
// console.log(array);

function play(){
    const copy=[...array];
    const moves=bubbleSort(copy);
    animate(moves);
}

function animate(moves){
    if(moves.length==0){
        showBars();
        return
    }
    else{
        const move=moves.shift();
        const [i,j]=move.indices;
        if(move.type=="swap"){
        [array[i],array[j]]=[array[j],array[i]];
     }
        showBars(move);
        setTimeout(function(){
            animate(moves);
        },speed);
    }
}

function bubbleSort(array){
     const moves=[];
do{
    var swapped=false;
    for(let i=1;i<array.length;i++){
        if(array[i-1]>array[i]){  
            moves.push(
                {indices:[i-1,i],type:"comp"}
                );
            swapped=true;
            moves.push(
                {indices:[i-1,i],type:"swap"}
                );
             [array[i-1],array[i]]=[array[i],array[i-1]]
        }
    }
}while(swapped);
return moves;
}

function showBars(move){
    container.innerHTML="";
for(let i=0;i<array.length;i++){
    const bar=document.createElement("div");
    bar.style.height=array[i]*100+"%";
    bar.classList.add("bar");//take style from css class bar 
   
    if(move && move.indices.includes(i)){
        if (move.type=="swap") {
            bar.style.backgroundColor="red";
        }
        else{
            bar.style.backgroundColor="blue";
        }
    }
    // else{
    //     bar.style.backgroundColor="green";
    // }

    container.appendChild(bar);
}}
// function sorting() {
//     do{
//         var swapped=false;
//         for(let i=1;i<array.length;i++){
//             if(array[i-1]>array[i]){
//                 swapped=true;
//                  [array[i-1],array[i]]=[array[i],array[i-1]]
//             }
//         }
//     }while(swapped);
// }