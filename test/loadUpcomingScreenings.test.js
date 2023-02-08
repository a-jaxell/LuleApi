import { describe, expect, jest, test } from "@jest/globals";
import filterUpcomingScreenings from "../server/filterUpcomingScreenings.js";

describe("loadUpcomingScreenings()", () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  test("correct properties & not empty", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2022-02-13T00:00:00.000Z"));

    const result = filterUpcomingScreenings(reviewDataMock);
    expect(result.length).toBe(4);
    expect(result[0, 1, 2, 3].room).toBeTruthy();
    expect(result[0, 1, 2, 3].date).toBeTruthy();
  });

  test("time not less than now", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2023-02-13T00:00:00.000Z"));

    const result = filterUpcomingScreenings(reviewDataMock);
    expect(Date.parse(result[0].date)).toBeGreaterThan(Date.now());
    expect(result.length).toBe(1);
  });
});

const reviewDataMock = {
  data: [
    {
      id: 3,
      attributes: {
        start_time: "2023-02-02T21:00:00.000Z",
        room: "",
        createdAt: "2023-01-31T04:27:04.047Z",
        updatedAt: "2023-01-31T04:27:04.047Z",
        movie: {
          data: {
            id: 1,
            attributes: {
              title: "Isle of dogs",
              imdbId: "tt5104604",
              intro:
                "An outbreak of dog flu has spread through the city of **Megasaki, Japan**, and Mayor Kobayashi has demanded all dogs to be sent to Trash Island.",
              image: {
                url: "https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
              },
              createdAt: "2023-01-23T05:58:58.110Z",
              updatedAt: "2023-01-27T07:11:53.523Z",
              publishedAt: "2023-01-23T06:01:31.679Z",
            },
          },
        },
      },
    },
    {
      id: 7,
      attributes: {
        start_time: "2023-02-04T17:00:00.000Z",
        room: "Stora salongen",
        createdAt: "2023-01-31T04:27:05.473Z",
        updatedAt: "2023-01-31T04:27:05.473Z",
        movie: {
          data: {
            id: 1,
            attributes: {
              title: "Isle of dogs",
              imdbId: "tt5104604",
              intro:
                "An outbreak of dog flu has spread through the city of **Megasaki, Japan**, and Mayor Kobayashi has demanded all dogs to be sent to Trash Island.",
              image: {
                url: "https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
              },
              createdAt: "2023-01-23T05:58:58.110Z",
              updatedAt: "2023-01-27T07:11:53.523Z",
              publishedAt: "2023-01-23T06:01:31.679Z",
            },
          },
        },
      },
    },
    {
      id: 16,
      attributes: {
        start_time: "2023-02-10T12:00:00.000Z",
        room: "Stora salongen",
        createdAt: "2023-01-31T04:27:10.585Z",
        updatedAt: "2023-01-31T04:27:10.585Z",
        movie: {
          data: {
            id: 1,
            attributes: {
              title: "Isle of dogs",
              imdbId: "tt5104604",
              intro:
                "An outbreak of dog flu has spread through the city of **Megasaki, Japan**, and Mayor Kobayashi has demanded all dogs to be sent to Trash Island.",
              image: {
                url: "https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
              },
              createdAt: "2023-01-23T05:58:58.110Z",
              updatedAt: "2023-01-27T07:11:53.523Z",
              publishedAt: "2023-01-23T06:01:31.679Z",
            },
          },
        },
      },
    },
    {
      id: 21,
      attributes: {
        start_time: "2023-02-12T17:00:00.000Z",
        room: "Stora salongen",
        createdAt: "2023-01-31T04:27:13.363Z",
        updatedAt: "2023-01-31T04:27:13.363Z",
        movie: {
          data: {
            id: 1,
            attributes: {
              title: "Isle of dogs",
              imdbId: "tt5104604",
              intro:
                "An outbreak of dog flu has spread through the city of **Megasaki, Japan**, and Mayor Kobayashi has demanded all dogs to be sent to Trash Island.",
              image: {
                url: "https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
              },
              createdAt: "2023-01-23T05:58:58.110Z",
              updatedAt: "2023-01-27T07:11:53.523Z",
              publishedAt: "2023-01-23T06:01:31.679Z",
            },
          },
        },
      },
    },
    {
      id: 24,
      attributes: {
        start_time: "2023-02-14T21:00:00.000Z",
        room: "Stora salongen",
        createdAt: "2023-01-31T04:27:14.727Z",
        updatedAt: "2023-01-31T04:27:14.727Z",
        movie: {
          data: {
            id: 1,
            attributes: {
              title: "Isle of dogs",
              imdbId: "tt5104604",
              intro:
                "An outbreak of dog flu has spread through the city of **Megasaki, Japan**, and Mayor Kobayashi has demanded all dogs to be sent to Trash Island.",
              image: {
                url: "https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
              },
              createdAt: "2023-01-23T05:58:58.110Z",
              updatedAt: "2023-01-27T07:11:53.523Z",
              publishedAt: "2023-01-23T06:01:31.679Z",
            },
          },
        },
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 5,
    },
  },
};
