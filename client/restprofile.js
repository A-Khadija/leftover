var x;
function Showphotos(){
    
    var y = document.getElementById("photos");
    var z = document.getElementById("about");
    if(x==1){
      
        y.style.display="block";
        z.style.display="none";
        return x=0;
    }else{
     
        z.style.display="block";
        y.style.display="none";
        return x=1;
    }
}
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
   }
   function fadeOut(){
    setInterval(loader,500);
   }

   window.onload=fadeOut;