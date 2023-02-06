import { getScreeningsList, getScreeningsWithMovies } from '../server/screeningsList.js';
import { mockApiAdapter } from './mockApiAdapter.js'
import { jest, test, describe, expect } from '@jest/globals';


describe('Control if data recieved has correct format and size', () => {

    beforeEach(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date(2023, 2, 2));
    });

    afterEach(() => {
        jest.clearAllTimers();
    });
    test('Filters out screenings that are older than the current date', async () => {
        const data = await getScreeningsList(mockApiAdapter);
        const now = new Date();

        expect(data.every(ele => {
            ele.start_time >= now;
        })).toBeTruthy();
    })
    
    test('Filters out screenings that are more than 5 days ahead', async () => {
        const data = await getScreeningsList(mockApiAdapter);
        const date = new Date();
        
        expect(data.every(ele => {
            Date.parse(`${ele.start_time}`) < (date.setDate(date.getDate() + 5))
        })).toBeTruthy();
  
    });
    test('Date and time is of correct format', async () =>{
        const data = await getScreeningsList(mockApiAdapter);        
        
        expect(data.every(ele => {
            ele.start_time != undefined;
        })).toBeTruthy();
        expect(data.every(ele => {
            Date.parse(ele.start_time);
        })).toBeTruthy();
        
    });
    test('Data is an array and does not contain more than 10 entities of data', async () => {
        const data = await getScreeningsList(mockApiAdapter);
        
        expect(Array.isArray(data)).toBeTruthy();
        expect(data.every(ele => {
            ele != undefined;
        })).toBeTruthy();
        expect(data.length).not.toBeGreaterThan(10);        
    });
});