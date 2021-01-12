import { buttons } from "./buttons"

function menu(){
    content.innerHTML="";
    buttons();
     
    const cont1 = document.createElement('div');
    const cont2 = document.createElement('div');
    const cont3 = document.createElement('div');
    const cont4 = document.createElement('div');
    cont1.classList.add('cont1');
    cont2.classList.add('items');
    cont3.classList.add('items');
    cont4.classList.add('items');
    cont1.appendChild(cont2);
    cont1.appendChild(cont3)
    cont1.appendChild(cont4)
    content.appendChild(cont1)

    const menu1H1 = document.createElement('h1');
    const menu2H1 = document.createElement('h1');
    const menu3H1 = document.createElement('h1');
    const menu1P = document.createElement('IMG');
    const menu2P = document.createElement('IMG');
    const menu3P = document.createElement('IMG');

    

    menu1H1.innerText="Menu 1";
    menu2H1.innerText="Menu 2";
    menu3H1.innerText="Menu 3";
    

    cont2.appendChild(menu1H1)
    menu1P.src="/images/menu1.jpeg";
    cont2.appendChild(menu1P)

    cont3.appendChild(menu2H1)
    menu2P.src="/images/menu2.jpeg";
    cont3.appendChild(menu2P)

    cont4.appendChild(menu3H1)
    menu3P.src="/images/menu3.jpeg";
    cont4.appendChild(menu3P)

}

export { menu }