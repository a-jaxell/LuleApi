import app from "../server/server";
import { describe, expect, test } from "@jest/globals";
import { Router } from "express";

describe("Test review validation", () => {
	test("Author should be at least three characters", async () => {
        
		const result = router.post("/test",(req,res) =>{
            const review = {
                author: kalle,
                rating: 3,
                comment: "medelmåttigt"
            }
            
            
        })
        
		expect();
	});

	test("comment should be at least three characters", async () => {
        
		const result = router.post("/test",(req,res) =>{
            const review = {
                author: kalle,
                rating: 3,
                comment: "medelmåttigt"
            }
            
            
        })

        //Check so thet first review of first page is not the same as firsrt review on second page
		expect(result1.reviews.data[0].id).not.toStrictEqual(result2.reviews.data[0].id);
	});

    test("rating should be integer between 0 and 5", async () => {
        
		const result = router.post("/test",(req,res) =>{
            const review = {
                author: kalle,
                rating: 3,
                comment: "medelmåttigt"
            }
            
            
        })
        
		expect();
	});
    test("rating should be integer between 0 and 5_fails", async () => {
        
		const result = router.post("/test",(req,res) =>{
            const review = {
                author: kalle,
                rating: 6,
                comment: "medelmåttigt"
            }
            
            
        })
        
		expect();
	});
});