const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const rating = document.querySelector(".rating");
const commentField = document.querySelector(".comment-field");
const sendBtn = document.querySelector(".send-btn");

//get id from url
const idUrl = new URL(document.URL).pathname.split("/");
const movieId = idUrl.pop() || idUrl.pop();

if (sendBtn) {
  async function getMovieRating() {
    const response = await fetch(
      `http://localhost:5080/movies/${movieId}/rating`
    );
    const dataJson = await response.json();
    document.querySelector(".movie-rating").append(dataJson.body);
  }

  getMovieRating();

  sendBtn.addEventListener("click", async function () {
    event.preventDefault();
    if (firstName.value === "") {
      alert("Du har inte fyllt förnamn");
    } else if (lastName.value === "") {
      alert("Du har inte fyllt efternamn");
    } else if (commentField.value === "") {
      alert("Du har inte angivit någon kommentar");
    } else {
      await fetch(`${movieId}/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          data: {
            comment: commentField.value,
            rating: rating.value,
            author: firstName.value + " " + lastName.value,
            verified: true,
            movie: movieId,
          },
        }),
      });
    }
  });
}
