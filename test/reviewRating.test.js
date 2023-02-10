import { describe, expect, jest, test } from "@jest/globals";
import { roundRating } from "../server/rating.js";
import reviewData from "../server/sendReview.js";

describe("reviewData()", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2023, 2, 11));
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test("check to see if rating is are matching same review", () => {
    const result = reviewData(mockReviews);

    expect(result[2].rating).toEqual(1);
    expect(result[3].rating).toEqual(4);
  });

  test("more than or equal to 5 reviews", () => {
    const result = reviewData(mockReviews);
    expect(result.length).toBe(23);
    expect(result.length).toBeGreaterThanOrEqual(5);
    expect(result.length).not.toBe(3);
    expect(Array.isArray(result)).toBeTruthy();
  });

  test("check to see if average rating is correct to movie with id 2", () => {
    const result = reviewData(mockReviews);

    let allRating = result.map((rating) => {
      return rating.rating;
    });

    const roundedRating = roundRating(allRating);

    expect(roundedRating).toBe(2.6);
    expect(roundedRating).not.toEqual(2.5);
  });
});

const mockReviews = {
  data: [
    {
      id: 95,
      attributes: {
        comment: "Trevlig disney!",
        rating: 4,
        author: "Nils Holgersson",
        verified: true,
        createdAt: "2023-02-08T21:36:38.188Z",
        updatedAt: "2023-02-08T21:36:38.188Z",
      },
    },
    {
      id: 63,
      attributes: {
        comment: "Worth watching!",
        rating: 4,
        author: "Lisa",
        verified: false,
        createdAt: "2023-02-06T19:40:13.851Z",
        updatedAt: "2023-02-06T19:40:13.851Z",
      },
    },
    {
      id: 55,
      attributes: {
        comment: "Not appropriate for kids",
        rating: 1,
        author: "yve",
        verified: false,
        createdAt: "2023-02-06T06:53:53.235Z",
        updatedAt: "2023-02-06T06:53:53.235Z",
      },
    },
    {
      id: 3,
      attributes: {
        comment: "i love the movie",
        rating: 4,
        author: "yve",
        verified: true,
        createdAt: "2023-01-31T09:01:56.535Z",
        updatedAt: "2023-01-31T09:01:56.535Z",
      },
    },
    {
      id: 74,
      attributes: {
        comment: "För lite prutt humor",
        rating: 2,
        author: "Ankan",
        verified: false,
        createdAt: "2023-02-07T10:40:40.546Z",
        updatedAt: "2023-02-07T10:40:40.546Z",
      },
    },
    {
      id: 27,
      attributes: {
        comment: "Test av cookies",
        rating: 0,
        author: "Richard",
        verified: null,
        createdAt: "2023-02-02T13:21:39.914Z",
        updatedAt: "2023-02-02T13:21:39.914Z",
      },
    },
    {
      id: 4,
      attributes: {
        comment: "Bra film, men för låga tonarter för sångarens röst!",
        rating: 3,
        author: "Alice",
        verified: true,
        createdAt: "2023-02-01T01:57:53.261Z",
        updatedAt: "2023-02-01T01:57:53.261Z",
      },
    },
    {
      id: 19,
      attributes: {
        comment: "Jättebra film!",
        rating: 0,
        author: "Richard",
        verified: null,
        createdAt: "2023-02-02T12:24:12.887Z",
        updatedAt: "2023-02-02T12:24:12.887Z",
      },
    },
    {
      id: 1,
      attributes: {
        comment: "I don't like this!",
        rating: 0,
        author: "Richard",
        verified: false,
        createdAt: "2023-01-31T08:32:50.177Z",
        updatedAt: "2023-01-31T08:32:58.231Z",
      },
    },
    {
      id: 28,
      attributes: {
        comment: "Review utan namn",
        rating: 0,
        author: "Richard",
        verified: null,
        createdAt: "2023-02-02T13:25:22.837Z",
        updatedAt: "2023-02-02T13:25:22.837Z",
      },
    },
    {
      id: 103,
      attributes: {
        comment: "",
        rating: 1,
        author: "John Doe",
        verified: true,
        createdAt: "2023-02-09T10:21:21.198Z",
        updatedAt: "2023-02-09T10:21:21.198Z",
      },
    },
    {
      id: 45,
      attributes: {
        comment: "Toppen",
        rating: 2,
        author: "George Mandela",
        verified: true,
        createdAt: "2023-02-04T11:49:46.180Z",
        updatedAt: "2023-02-04T11:49:46.180Z",
      },
    },
    {
      id: 98,
      attributes: {
        comment: "Not bad. Would watch it again.",
        rating: 4,
        author: "Stefan Lindgren",
        verified: false,
        createdAt: "2023-02-08T22:32:58.782Z",
        updatedAt: "2023-02-08T22:32:58.782Z",
      },
    },
    {
      id: 93,
      attributes: {
        comment: "Trevlig disney!",
        rating: 4,
        author: "Nils Holgersson",
        verified: true,
        createdAt: "2023-02-08T21:35:55.528Z",
        updatedAt: "2023-02-08T21:35:55.528Z",
      },
    },
    {
      id: 34,
      attributes: {
        comment: "Hej en strikt recension!",
        rating: 0,
        author: "RichardMedStrikt",
        verified: null,
        createdAt: "2023-02-02T13:47:12.336Z",
        updatedAt: "2023-02-02T13:47:12.336Z",
      },
    },
    {
      id: 41,
      attributes: {
        comment: "Crappy movie :>(",
        rating: 1,
        author: "John Does",
        verified: false,
        createdAt: "2023-02-03T15:12:06.408Z",
        updatedAt: "2023-02-03T15:12:06.408Z",
      },
    },
    {
      id: 39,
      attributes: {
        comment: "This movie is awesome!",
        rating: 3,
        author: "John Doe",
        verified: false,
        createdAt: "2023-02-03T15:00:21.287Z",
        updatedAt: "2023-02-03T15:00:21.287Z",
      },
    },
    {
      id: 94,
      attributes: {
        comment: "Trevlig disney!",
        rating: 4,
        author: "Nils Holgersson",
        verified: true,
        createdAt: "2023-02-08T21:36:35.421Z",
        updatedAt: "2023-02-08T21:36:35.421Z",
      },
    },
    {
      id: 64,
      attributes: {
        comment: "Funkar det",
        rating: 5,
        author: "Test",
        verified: false,
        createdAt: "2023-02-06T19:52:07.793Z",
        updatedAt: "2023-02-06T19:52:07.793Z",
      },
    },
    {
      id: 65,
      attributes: {
        comment: "Funkar det",
        rating: 5,
        author: "Test",
        verified: false,
        createdAt: "2023-02-06T19:52:33.706Z",
        updatedAt: "2023-02-06T19:52:33.706Z",
      },
    },
    {
      id: 37,
      attributes: {
        comment: "Detta är min första recension någonsin!",
        rating: 5,
        author: "MovieNoob",
        verified: false,
        createdAt: "2023-02-03T12:07:38.140Z",
        updatedAt: "2023-02-03T12:07:38.140Z",
      },
    },
    {
      id: 88,
      attributes: {
        comment: "Den var helt okej!",
        rating: 3,
        author: "Hans  Fransson",
        verified: true,
        createdAt: "2023-02-08T16:30:54.009Z",
        updatedAt: "2023-02-08T16:30:54.009Z",
      },
    },
    {
      id: 2,
      attributes: {
        comment: "I like this!",
        rating: 5,
        author: "Richard",
        verified: true,
        createdAt: "2023-01-31T08:33:15.683Z",
        updatedAt: "2023-01-31T08:33:31.874Z",
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 23,
    },
  },
};
