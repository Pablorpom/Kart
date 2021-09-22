async function getData(source){
    try{
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