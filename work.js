console.log("JAVASCRIPT SECTION");

let count=0;

let mylife=document.getElementById('mylife');

let previous=document.getElementById("previous");

function increment()
{
    count=count+1;
    mylife.textContent=count;
    if(count==9)
    {
        alert("You have reached limit of 9 persons");
    }
    
}



function save()
{
    previous.innerHTML+=" - "+count;
    console.log(count);
}

let Welcome=document.getElementById('welcome');

let name="himanshu"
let second="bedi"

Welcome.innerText="Hello welcome back " +second+"😃";





