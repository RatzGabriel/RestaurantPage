import { homepage } from "./Homepage";
import { menu } from "./menu";
import { contact } from "./contact"


const clsBtn = ['button','is-round'];

function buttons(){
    const contBtn = document.getElementById('contBtn');
    contBtn.innerHTML=""
    function createButton(container,btnCls1,btnCls2,id,innerText){
        const content = document.getElementById(container);
        const button = document.createElement('button');
        button.id=id;
        button.classList.add(btnCls1);
        button.classList.add(btnCls2);
        button.innerText=innerText;
        content.appendChild(button)
    }
        const create = function(){
        createButton('contBtn',...clsBtn,'btn1','Home');
        createButton('contBtn',...clsBtn,'btn2','Menu');
        createButton('contBtn',...clsBtn,'btn3','Contact Details');
    
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        const btn3 = document.getElementById('btn3');
    
        btn1.addEventListener('click',function(){
            homepage()
        })
    
        btn2.addEventListener('click',function(){
            
            menu()
            
        })
        
        btn3.addEventListener('click',function(){
            contact()
        })
    
        
    };



create()
};

export { buttons }