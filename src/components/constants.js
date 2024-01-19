export const BASE_URL = process.env.REACT_APP_URL;
const base_url = `${BASE_URL}`;

    const options = {
        method: 'GET',
        params:{
            maxResults: '50'
        } ,
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }  
    };
    
    export async function getVideosFromApi(url){
        const data=await fetch(`${base_url}/${url}`,options)
        const json=await data.json();
        return json
    }



    