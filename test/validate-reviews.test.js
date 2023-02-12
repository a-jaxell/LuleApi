import app from "../server/server";
import { describe, expect, test } from "@jest/globals";
import validateReviews from "../server/validateReviews";                                                           

describe("Test review validation", () => {
    test("rating should be integer between 0 and 5", async () => {
        const result = await validateReviews((req,res) =>{
            const review = {
                author: kalle,
                rating: 6,
                comment: "medelmåttigt"
            }
            
        })
		expect(res.status===200);
	});
});
