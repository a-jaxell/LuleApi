import app from "../server/server";
import { describe, expect, test } from "@jest/globals";
import validateReviews from "../server/validateReviews";                                                           

describe("Test review validation", () => {
    test("rating should be integer between 0 and 5", async () => {
        const review = {
            
            author: 'kalle',
            rating: 3,
            comment: "medelmåttigt"
        }
    })
        const result = validateReviews((review,res) =>{
            
		expect(res.status===200);
	});
});
