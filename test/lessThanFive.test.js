import { describe, expect, test, jest } from "@jest/globals";
/* import { loadOMDB as omdbTest } from "../server/rating.js";
 */
const movie = {
    id: 123,
    title: "The Matrix",
    reviews: [
        { rating: 4 },
        { rating: 5 },
        { rating: 3 },
        { rating: 4 },
        { rating: 5 },
    ],
};

const omdbTest = jest.fn().mockResolvedValue(4.5);

test("calculates average rating from reviews if there are 5 or more", async() => {
    const average = calculateAverageRating(movie);
    expect(average).toBe(4.2);
    expect(omdbTest).not.toHaveBeenCalled();
});

test("retrieves OMDB rating if there are fewer than 5 reviews", async() => {
    movie.reviews.pop();
    const average = calculateAverageRating(movie);
    expect(average).toBe(4.5);
    expect(omdbTest).toHaveBeenCalledWith(movie.id);
});

function calculateAverageRating(movie) {
    if (movie.reviews.length >= 5) {
        let total = 0;
        movie.reviews.forEach((review) => {
            total += review.rating;
        });
        return total / movie.reviews.length;
    } else {
        return omdbTest(movie.id);
    }
}