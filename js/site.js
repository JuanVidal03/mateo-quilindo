//Here are the API with some poems
const poemasUrl = '../poemas.json';

//getting DOM

//function gets data
const poemas = async() =>{

    const resp = await fetch(poemasUrl);
    const data = await resp.json();



}


poemas();