import { Client } from '@petfinder/petfinder-js'

const client = new Client({
    apiKey: process.env.API_KEY, 
    secret: process.env.API_SECRET
})

export async function getAllChows(){
    client.authenticate();
    const response = await client.animal.search({type: "Dog", breed: "Chow Chow"});    
    return response.data.animals;
}

export async function getAllChowIds() {
    const chowIDs = await getAllChows()
    
    return response = chowIDs.map(chow => {
        return {
            params: {
                id: chow.id.toString()
            }
        }
    })
}

export async function getChowData(id){
    client.authenticate();
    const response = await client.animal.show(id);    
    return {id, ...response.data.animal};

}