import request from "supertest";
import app from "../server/server.js";
import { getReviews } from "../server/apiAdapter.js";

test("testing singlemovie render page", async () => {
    const response = await request(app)
        .get("/movies/4")
        .expect("content-type", "text/html; charset=utf-8")
        .expect(200);

    expect(response.text.includes({id: 4, title: "Min granne Totoro", imdbId: "tt2953050"}))
});

test("pagination, set pagesize to 1 movie", async    () => {
    const response = await request(getReviews)
    .get("2")
    .expect("content-type", "text/html; charset=utf-8")
    .expect(200);

    expect(response.meta.pagination.includes({page:3,pageSize:5,pageCount:3,totalCount:11}))
});

