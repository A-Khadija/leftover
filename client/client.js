
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


/*n=document.getElementById("cart-btn");
let cartt = document.querySelector('.dashboard-order');

document.querySelector('cart-btn').onclick = () =>{
  
    cartt.classList.toggle('active');
}
let cartt = document.querySelector('.Notification-poop');

document.querySelector('cart-btn').onclick = () =>{
  
    cartt.classList.toggle('active');
}
*/


var btnvar3 = document.getElementById('btnh3');

       function Toggle3(){
                if (btnvar3.style.color =="red") {
                    btnvar3.style.color = "grey"
                }
                else{
                    btnvar3.style.color = "red"
                }
       }

/*
  function loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
       }
       function fadeOut(){
        setInterval(loader,500);
       }
    
       window.onload=fadeOut;   
*/ 

const menuItems=document.querySelectorAll('.bx bx-bell icon');
const changeActiveItem =() => {
    menuItems.forEach(item =>{item.classList.remove('active');
})
}

menuItems.forEach(item =>{item.addEventListener('click',()=>{changeActiveItem();
item.classList.add('active');
if(item.id != 'notifications'){
    document.querySelector('.Notification-poop').
    style.display='none';
}else{
    document.querySelector('.Notification-poop').
    style.display='block';
    document.querySelector('#notifications .notification-count').style.display='none';
}

})
}
)



menuItems.forEach(item =>{item.addEventListener('click',()=>{changeActiveItem();
item.classList.add('active');
if(item.id != 'order'){
    document.querySelector('.dashboard-order').
    style.display='none';
}else{
    document.querySelector('.dashboard-order').
    style.display='block';
   
}

})
}
)








