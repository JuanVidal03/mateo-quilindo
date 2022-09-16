//Here are the API with some poems
const poemasUrl = '../poemas.json';


//getting data from DOM
const poemasContainer = document.getElementById('poemas__container');


//function gets data
const poemas = async() =>{

    const resp = await fetch(poemasUrl);
    const data = await resp.json();

    data.forEach(poema => {
        
        const div = document.createElement('div');
        div.classList.add('card__poemas');
        console.log(div);
    
        let title = document.createElement('h5')
        title.innerHTML = ` Hola ${poema.poema}`;
        console.log(title);
        poemasContainer.appendChild(div);
        div.appendChild(title);
    });

    /*
    
    */


}


poemas();