let menu=document.getElementById("menu")
let list=document.querySelector(".sec-header")
menu.onclick=function(){
    if(list.style.display==="none"){
        list.style.display="block"
    }
    else{
        list.style.display="none"
    }
}