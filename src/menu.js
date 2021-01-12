

function menu(){
    
    let element = document.getElementById("content");
    
    while (element.firstChild) {
        console.log(element.firstChild)
      element.removeChild(element.firstChild);
      console.log(element.firstChild)
    }

    const cont1 = document.createElement('div');
    cont1.classList.add('cont1');
    for(let i= 1;i<4;i++){
        const cont = document.createElement('div');
        cont.classList.add('items');
        cont1.appendChild(cont);
        const menu1H1 = document.createElement('h1');
        const menu1P = document.createElement('IMG')
        menu1H1.innerText=`Menu${i}`;
        cont.appendChild(menu1H1);
        menu1P.src=`./images/menu${i}.jpeg`;
        cont.appendChild(menu1P)
    }
    
    content.appendChild(cont1)
}

export { menu }