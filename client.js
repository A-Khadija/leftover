
var x;

function ShowHeart(){
    
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
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

var x;

function ShowHeart(){
    
    var y = document.getElementById("hide2");
    var z = document.getElementById("hide1");
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

