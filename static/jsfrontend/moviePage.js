/* async function apiReview() {
  const url = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";
  const data = await fetch(url);
  const res = await data.json();
  return res.data;
} */

const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const rating = document.querySelector(".rating");
const commentField = document.querySelector(".comment-field");
const sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", async function (req, res) {
  event.preventDefault();
  if (firstName.value === "") {
    alert("Du har inte fyllt förnamn");
  } else if (lastName.value === "") {
    alert("Du har inte fyllt efternamn");
  } else if (commentField.value === "") {
    alert("Du har inte angivit någon kommentar");
  } else {
    const idUrl = document.location.toString();
    const movieId = idUrl.slice(29, 30);

    const res = await fetch(`${movieId}/review`, {
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
