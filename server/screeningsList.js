import apiAdapter from './apiAdapter.js';

export const getScreeningsWithMovies = async () => {

    const res = await fetch("https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie");
    const data = await res.json();

    return data;
}   

// formatting data as I want it. with Each screening as top tier and containing move
export const getScreeningsList = async (apiHandler) => {
        
    const data = await apiHandler;

    const sortedData = data.map( array => {
        return { id: array.id, 
                 ...array.attributes,
                 movie: {
                     id: array.attributes.movie.data.id,
                     ...array.attributes.movie.data.attributes
                 }
                }
            });


    return sortedData;
}