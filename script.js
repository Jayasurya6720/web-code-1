var title = document.createElement("p");
title.innerText = "SEARCH FOR THE NATIONALITY";
title.style.fontSize="25px";
title.style.fontStyle="bold";      
title.style.color="orange";
title.style.marginLeft="40%";
title.style.marginTop="5%";

var title2 = document.createElement("p");
title2.innerText = "Enter your name :-";
title2.style.fontSize="20px";
title2.style.color="black";
title2.style.marginLeft="27%";
document.body.append(title,title2);

document.body.style.background="gray";
var div = document.createElement("div");
div.style.textAlign="center";


var input = document.createElement("input");
input.setAttribute("type","text");
input.style.width="40%";
input.id="name";

var button = document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.style.margin="5px";
button.style.background="lightgreen";
button.addEventListener("click",getdata);



div.append(input,button);
document.body.append(div);



async function getdata(){
  var res = document.getElementById("name").value;
  console.log(res);
    try{
    var res1 = await fetch(`https://api.nationalize.io/?name=${res}`)
    var res2 = await res1.json();
    var res3 = res2.country;
    let para = document.createElement("button");
    para.innerText = ` ${res}`;
    para.style.margin="5px";
    para.style.marginRight="5%";
    para.style.marginLeft="40%";
    para.style.background="pink";
    document.body.append(para);

    for(var i=0;i<res3.length-3;i++){
        console.log(res3[i].country_id,res3[i].probability);
       let para2 = document.createElement("button");
        para2.innerText = ` country:- ${res3[i].country_id}  probability:- ${res3[i].probability}`;
        para2.style.margin="5px";
        para2.style.marginRight="5%";
        para2.style.marginLeft="40%";
        para2.style.background="lightblue";
        document.body.append(para2);
        
      
    
    } 
    
    
   
    
}
catch(error) {
 console.log(error);
}}