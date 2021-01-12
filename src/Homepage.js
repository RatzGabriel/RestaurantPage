import { buttons } from "./buttons"

    function homepage(){
        let myObj = {
            name:"Domenic",
            age:56
        };

        let myObj_serialized = JSON.stringify(myObj)

        localStorage.setItem("myObj",myObj_serialized);
        console.log(myObj_serialized);


        let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));
        console.log(myObj_deserialized)
        content.innerHTML="";
        buttons()
        const cont1 = document.createElement('div');
        const image = document.createElement('IMG');
        const para = document.createElement('p');
        content.appendChild(cont1);
        const h1 = document.createElement('h1');
        h1.innerText="Gabriels Steak and Break";
        image.src="../images/steak.jpeg"
        para.innerText="imilique necessitatibus assumenda optio eaque labore fugiat! Eos eius ab alias sunt ipsum ullam similique natus placeat. Corporis vero assumenda explicabo aut deserunt? A ratione at ad ducimus, sequi debit"
        cont1.appendChild(h1);
        cont1.appendChild(image);
        cont1.appendChild(para);
        cont1.classList.add('contain');
        content.appendChild(cont1)
    }

    

    export { homepage }