const display=document.getElementById("display");
function deletelast(){
    display.value=display.value.slice(0,-1);
    if(display.value=="syntax error"){
        display.value='';
    }
}
function result(){
   try{
     const res=eval(display.value);
    display.value=res;
       localStorage.setItem("resu",res);

   }
   catch(exception){
    display.value="syntax error";

    if(display.value=="syntax error"){
        display.value="";
    }
    
   }
   
   
}

   window.onload=function(){
   const saved= localStorage.getItem("resu");
    if(saved!=null){
        display.value=saved;
    }
   }
