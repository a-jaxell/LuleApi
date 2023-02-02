import screeningsList from '../server/screeningsList.js';
import mockApiAdapter from './mockApiAdapter.js'


describe('Control if data recieved has correct format and size', () => {

    test('Filters out screenings that are more than 5 days ahead', async () => {
        const data = await getScreeningsList();
        const date = new Date();
        
        expect(data.every(ele => {
            ele.start_time < date.setDate(date.getDate() + 5)
        })).toBeTruthy();
  
    });
    test('Date and time is of correct format', async () =>{
        const data = await getScreeningsList();        
        
        expect(Date.parse(`${data[4].start_time}`)).toBeTruthy();
        expect(data[5].start_time).not.toBeUndefined();
        
    })
    test('Data is an array and does not contain more than 10 entities of data', async () => {
        const data = await getScreeningsList();
        
        expect(Array.isArray(data)).toBeTruthty();
        expect(data.length).not.toBeGreaterThan(10);
        expect(data[3]).toBeTruthy();
           
    });
});