import app from "../server/server";
import { describe, expect, test } from "@jest/globals";
import { Router } from "express";

describe("Test review validation", () => {
	test("Author should be at list three characters", async () => {
        //Get reviews for movie with ID=2 and page=1
		const result = router.post("/test",(req,res) =>{
            const review = {
                author: kalle,
                rating: 3,
                comment: "medelmåttigt"
            }
            
            
        })
        //Check so that we don't get more than 5 reviews in response
		expect();
	});

	test("Get different pages", async () => {
        //Get reviews for movie with ID=2 and page=1
		const result1 = await loadReviews(2,1);
        //Get reviews for movie with ID=2 and page=2
		const result2 = await loadReviews(2,2);

        //Check so thet first review of first page is not the same as firsrt review on second page
		expect(result1.reviews.data[0].id).not.toStrictEqual(result2.reviews.data[0].id);
	});
});