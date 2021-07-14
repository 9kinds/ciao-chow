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


