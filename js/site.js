//Here are the API with some poems
const poemasMuestraUrl = '../poemasMuestra.json';


//getting data from DOM
const poemasContainer = document.getElementById('poemas__container');


//function gets data
const poemasMuestra = async() =>{

    //getting the api data
    const resp = await fetch(poemasMuestraUrl);
    const data = await resp.json();

    console.log(data.length);

    //foreach loop for every poem
    

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



const poemasRandomUrl = '../poemasRandom.json';

const poemasRandom = async() => {
    const resp = await fetch(poemasRandomUrl);
    const data = await resp.json();

    console.log(data);
}

poemasRandom()


