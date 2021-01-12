import { buttons } from "./buttons"

function contact(){
    content.innerHTML="";
    buttons();
    const cont1 = document.createElement('div');
    const h2 = document.createElement('h2');
    const text = document.createElement('p');
    h2.innerText="Contact Details";
    text.innerText="Tel Nr : 0660 454456333\nText2";
    cont1.appendChild(h2);
    cont1.appendChild(text);
    content.appendChild(cont1)
}

export { contact }