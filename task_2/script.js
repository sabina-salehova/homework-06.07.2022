
var btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
    var text=document.querySelector('.input').value.trim();
    var print=document.querySelector('h1');    
    if(text.length>0){
        print.innerHTML=text[0].toUpperCase()+text.substring(1,text.length);
    }
    else
    {
        print.innerHTML="Deyer daxil edin";        
    }
})


