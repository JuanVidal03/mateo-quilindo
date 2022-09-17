//Here are the API with some poems
const poemasMuestraUrl = '../poemasMuestra.json';


//getting data from DOM
const poemasContainer = document.getElementById('poemas__container');


//function gets data
const poemasMuestra = async() =>{

    //getting the api data
    const resp = await fetch(poemasMuestraUrl);
    const data = await resp.json();

    //foreach access for every poem
    
        data.forEach(poema => {
    
            //create a div element with a class
            const div = document.createElement('div');
            div.classList.add('card__poemas');
        
            //create a h5 element, here goes the poem with a class
            let text = document.createElement('h5');
            text.classList.add('card__text')
            text.innerHTML = `${poema.poema}`;
    
            //append child to all elements
            poemasContainer.appendChild(div);
            div.appendChild(text);
        });

}

poemasMuestra();



/*======
RANDOM POEMS
========*/

//getting random poems api
const poemasRandomUrl = '../poemasRandom.json';

//get DOM
const btnRandom = document.getElementById('btnRandom');
const imgRandom = document.getElementById('random__img-container');

const poemasRandom = async() => {

    //obtain api data
    const resp = await fetch(poemasRandomUrl);
    const data = await resp.json();


   //create poem text estructure
   const divRandom = document.createElement('div');
   divRandom.classList.add('card__random');
   const poemText = document.createElement('h5');
   poemText.classList.add('card__random-text');    
   
   
   btnRandom.addEventListener('click', () =>{
       
       const random = Math.floor(Math.random() * 6);
       console.log(data[random].poema);
       
        poemText.innerHTML = `
            <h5>${data[random].poema}</h5>
        `;

        divRandom.appendChild(poemText);
        imgRandom.replaceWith(divRandom);

    
    });

}

poemasRandom()