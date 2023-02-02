import { getScreeningsList, getScreeningsWithMovies } from '../server/screeningsList.js';
import { mockApiAdapter } from './mockApiAdapter.js'


describe('Control if data recieved has correct format and size', () => {

    

    test('Filters out screenings that are more than 5 days ahead', async () => {
        const data = await getScreeningsList(getScreeningsWithMovies);
        const date = new Date();
        
        expect(data.every(ele => {
            ele.start_time < date.setDate(date.getDate() + 5)
        })).toBeTruthy();
  
    });
    test('Date and time is of correct format', async () =>{
        const data = await getScreeningsList(getScreeningsWithMovies);        
        
        expect(data[5].start_time).not.toBeUndefined();
        expect(Date.parse(`${data[4].start_time}`)).toBeTruthy();
        
    })
    test('Data is an array and does not contain more than 10 entities of data', async () => {
        const data = await getScreeningsList(getScreeningsWithMovies);
        
        expect(Array.isArray(data)).toBeTruthy();
        expect(data.length).not.toBeGreaterThan(10);
        expect(data[3]).toBeTruthy();
           
    });
});