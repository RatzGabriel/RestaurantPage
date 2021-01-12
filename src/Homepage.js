

    function homepage(){
        let element = document.getElementById("content");
        while (element.firstChild) {
            console.log(element.firstChild)
          element.removeChild(element.firstChild);
          console.log(element.firstChild)
        }
        console.log('nr2');
        const cont1 = document.createElement('div');
        const image = document.createElement('IMG');
        const para = document.createElement('p');
        content.appendChild(cont1);
        const h1 = document.createElement('h1');
        h1.innerText="Gabriels Steak and Break";
        image.src="./images/steak.jpeg"
        para.innerText="imilique necessitatibus assumenda optio eaque labore fugiat! Eos eius ab alias sunt ipsum ullam similique natus placeat. Corporis vero assumenda explicabo aut deserunt? A ratione at ad ducimus, sequi debit"
        cont1.appendChild(h1);
        cont1.appendChild(image);
        cont1.appendChild(para);
        cont1.classList.add('contain');
        content.appendChild(cont1)
    }

    

    export { homepage }