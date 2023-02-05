const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const rating = document.querySelector(".rating");
const commentField = document.querySelector(".comment-field");
const sendBtn = document.querySelector(".send-btn");

const idUrl = document.location.toString();
const movieId = idUrl.slice(29, 30);

sendBtn.addEventListener("click", async function (req, res) {
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
async function getMovieRating() {
  const response = await fetch(
    `http://localhost:5080/movies/${movieId}/rating`
  );
  const dataJson = await response.json();
  const data = dataJson.data;
  let allRating = data.map((rating) => {
    return rating.attributes.rating;
  });

  //removing value of null if it exist
  let nullValue = null;
  allRating = allRating.filter((item) => item !== nullValue);

  if (allRating.length >= 5) {
    const roundedRating = averageRating(allRating);

    document.querySelector(".movie-rating").append(roundedRating);
  }

  //function to get average rating.
  function averageRating(array) {
    let sum = 0;

    //round rating to 1 decimal
    array.forEach((rating) => {
      sum += rating / allRating.length;
      sum = Math.round(sum * 10) / 10;
    });

    return sum;
  }
}
getMovieRating();
