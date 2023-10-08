let string="";
let memory="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
        try{
            if(e.target.innerHTML== '='){
                string=eval(string);
                memory=string;
                document.querySelector('input').value=string;
            }
            else if(e.target.innerHTML=='c'){
                string='';
                memory='';
                document.querySelector('input').value=string;
                }
                else if(e.target.innerHTML=='M+'){
                    string=memory +'+'+ string;
                    document.querySelector('input').value=string;
                    }
                    else if(e.target.innerHTML=='M-'){
                        string=memory +'-'+ string;
                        document.querySelector('input').value=string;
                        }
            else{
                    console.log(e.target);
                    string=string+e.target.innerHTML;
                    document.querySelector('input').value=string;
                    }
        }
        catch(err){
            document.querySelector('input').value="ERROR";
        }
        })
    }) 