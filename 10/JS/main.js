var flag_click=false;
var last_click;
var check;
window.onload=function(){
    var check = document.querySelectorAll("input");
    check.forEach(ch => ch.addEventListener("click",change));
    function change(e){ 
        this.parentNode.classList.toggle('cl'); 
        if(e.shiftKey && this.checked){
            
            check.forEach(che =>{
                if(che==last_click || che==this){
                    flag_click=!flag_click; 
                }
                if(flag_click){
                    che.parentNode.classList.add('cl');
                    che.checked =true;
                }
                else{
                    che.parentNode.classList.remove('cl');
                    che.checked =false;
                }
                if(che==last_click || che==this){
                    che.parentNode.classList.add('cl');
                    che.checked =true;
                }
            });
        }
        last_click = this;
    }
}