import { describe, expect, test } from "@jest/globals";
import jsonwebtoken from "jsonwebtoken";
import request from "supertest";
import app from "../server/server.js";

test("verify JWT token with example input", () => {
  const secret = "sendReviewSignature";
  const info = {
    firstName: "rasmus",
    lastName: "eliasson",
    iat: 1676066136,
  };

  const token = jsonwebtoken.sign(info, secret);

  const decoded = jsonwebtoken.verify(token, secret);

  expect(decoded).toEqual(info);
});

describe("Test to show that form won't send if token hasen't been provided ", () => {
  test("Returns status 401 if capital city is not Stockholm", async () => {
    const response = await request(app)
      .post("/movies/1/sendReview")
      .set("Authorization", "Basic Zm9vOmJhcg==")
      .send({ data: { capital: "paris" } });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ error: "not valid" });
  });

  test("Returns status 200 and JWT token if capital of city is Stockholm", async () => {
    const response = await request(app)
      .post("/movies/1/sendReview")
      .set("Authorization", "Basic Zm9vOmJhcg==")
      .send({ data: { capital: "stockholm" } });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
});
