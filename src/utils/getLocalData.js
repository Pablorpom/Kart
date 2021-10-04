async function getData(source){
    try{
        // Get all the data from the JSON file and convert it so js can read it
        const res = await fetch(`./data/${source}.json`);
        const data = await res.json(); 
        return data 
    } catch{
        return {
            error: 'Somenthing went wrong getting the data'
        } 
    }
}

export default getData;