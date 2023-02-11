import { displayRating, roundRating, loadOMDB } from "./rating.js";
import fetch from "node-fetch";
import { mockApiAdapter } from "./mockApiAdapter.js";

jest.mock("node-fetch", () => jest.fn());

/* const mockApiAdapter = {
    loadData: async() => {
        return {
            data: [{
                    attributes: {
                        rating: 3,
                    },
                },
                {
                    attributes: {
                        rating: 4,
                    },
                },
                {
                    attributes: {
                        rating: 5,
                    },
                },
                {
                    attributes: {
                        rating: 2,
                    },
                },
                {
                    attributes: {
                        rating: 1,
                    },
                },
                {
                    attributes: {
                        rating: 3,
                    },
                },
                {
                    attributes: {
                        rating: 4,
                    },
                },
                {
                    attributes: {
                        rating: 2,
                    },
                },
                {
                    attributes: {
                        rating: 5,
                    },
                },
                {
                    attributes: {
                        rating: 3,
                    },
                },
            ],
        };
    },
};
 */
describe("displayRating", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("when there are 5 or more revienpmws for a movie", () => {
        it("calculates the average rating from these reviews", async() => {
            fetch.mockImplementation(() =>
                Promise.resolve({
                    json: () => Promise.resolve(mockApiAdapter.loadData()),
                })
            );
            const req = { params: { id: 1 } };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };

            await displayRating.get("/movies/:id/rating", req, res);
            const averageRating = roundRating([3, 4, 5, 2, 1]);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith({ body: averageRating });
        });
    });

    describe("when there are fewer than 5 reviews for a movie", () => {
        it("retrieves the average rating from IMDB", async() => {
            fetch.mockImplementation(() =>
                Promise.resolve({
                    json: () => Promise.resolve({ imdbRating: "9.0" }),
                })
            );
            const req = { params: { id: 1 } };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };

            await displayRating.get("/movies/:id/rating", req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith({ body: "9.0" });
        });
    });
});