export const buildUrl = (source)=> `./data/${source}.json`

async function getData(source){
    try{
        // Get all the data from the JSON file and convert it so js can read it
        if(!source){ throw 'Source was not defined' }
        const res = await fetch(buildUrl(source));
        const data = await res.json(); 
        return data 
    } catch{
        return {
            error: 'Something went wrong getting the data'
        } 
    }
}

export default getData;