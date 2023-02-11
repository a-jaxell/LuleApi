import app from "../server/server";
import { describe, expect, test } from "@jest/globals";
import { Router } from "express";
import validateReviews from "../server/validateReviews";                                                            

describe("Test review validation", () => {
	test("Author should be at least three characters", async () => {
        
		const result = validateReviews((req,res) =>{
            const review = {
                author: kalle,
                rating: 3,
                comment: "medelmåttigt"
            }

        })
        
		expect(result.reviews.data[0].author.length>3);
        expect(result.reviews.data[0].rating <5 && result.reviews.data[0].rating>0)
        expect(result.reviews.data[0].comment.length > 3)
	});

	test("comment should be at least three characters", async () => {
        
		const result = validateReviews((req,res) =>{
            const review = {
                author: kalle,
                rating: 3,
                comment: "medelmåttigt"
            }
            
        })
		expect(result.reviews.data[0].id).not.toStrictEqual(result2.reviews.data[0].id);
	});

    test("rating should be integer between 0 and 5", async () => {
		const result = validateReviews((req,res) =>{             const review = {
                author: kalle,
                rating: 3,
                comment: "medelmåttigt"
            }
        })
        
		expect(result.reviews.data[0].author.length>3);
        expect(result.reviews.data[0].rating <5 && result.reviews.data[0].rating>0)
        expect(result.reviews.data[0].comment.length > 3)
	});
    test("rating should be integer between 0 and 5_fails", async () => {
        
		const result = router.post("/test",(req,res) =>{
            const review = {
                author: kalle,
                rating: 6,
                comment: "medelmåttigt"
            }
    
            
        })
    
		expect(result.reviews.data[0].author.length>3);
        expect(result.reviews.data[0].rating <5 && result.reviews.data[0].rating>0)
        expect(result.reviews.data[0].comment.length > 3)
	});
});