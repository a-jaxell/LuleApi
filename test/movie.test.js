import request from "supertest";
import app from "../server/server.js";

test("testing singlemovie render page", async () => {
    const response = await request(app)
        .get("/movies/4")
        .expect("content-type", "text/html; charset=utf-8")
        .expect(200);

    expect(response.text.includes({id: 4, title: "Min granne Totoro", imdbId: "tt2953050"}))
});

