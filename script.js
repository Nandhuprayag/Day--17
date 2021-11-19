var myOuter=document.getElementById("outerbox");
var  currentplayer="X";
 for(let i=1;i<=9;i++)
 {
     var myInnerbox=document.createElement("div");
     myInnerbox.style.width="30%";myInnerbox.style.height="100px";myInnerbox.style.backgroundColor="pink";
     myInnerbox.style.border="2px solid white";
     myInnerbox.setAttribute("id",i);
    myInnerbox.addEventListener('click',function()
    {
        if(currentplayer=="X")
        {
            this.innerText="X";
            currentplayer="O";
        }
        else
        {
            this.innerText="O";
            currentplayer="X"
        }


    })

     myOuter.appendChild(myInnerbox);

 }
 document.body.appendChild(myOuter);