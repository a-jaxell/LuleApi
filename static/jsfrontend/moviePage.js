const sendBtn = document.querySelector(".send-btn");

//get id from url
const idUrl = new URL(document.URL).pathname.split("/");
const movieId = idUrl.pop() || idUrl.pop();

// var tvungen att wrappa denna i en funktion,
// annars kom alerten på rad 28 så fort man tröck på en film.
export function formSubmitListener() {
  //If page has a sendBtn
  if (sendBtn) {
    sendBtn.addEventListener("click", function () {
      event.preventDefault();
      jwtSendReview();
    });
  }
}

async function getMovieRating() {
  const response = await fetch(`/movies/${movieId}/rating`);
  const dataJson = await response.json();
  document.querySelector(".movie-rating").append(dataJson.body);
}

async function jwtSendReview() {
  const firstName = document.querySelector(".firstName").value;
  const lastName = document.querySelector(".lastName").value;
  const capitalCityStockholm = document.querySelector(".capital-city").value;
  const rating = document.querySelector(".rating").value;
  const commentField = document.querySelector(".comment-field").value;

  const credentials = `${firstName}:${lastName}`;
  const b64 = btoa(credentials);

  const data = { capital: capitalCityStockholm };

  //sends capital text from user
  const resToken = await fetch(`/movies/${movieId}/sendReview`, {
    method: "POST",

    headers: {
      Authorization: "Basic " + b64,
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      data,
    }),
  });

  const dataToken = await resToken.json();

  await fetch(`/movies/${movieId}/protected`, {
    headers: { Authorization: "Bearer " + dataToken.token },
  });

  if (firstName === "") {
    alert("Du har inte fyllt förnamn");
  } else if (lastName === "") {
    alert("Du har inte fyllt efternamn");
  } else if (commentField === "") {
    alert("Du har inte angivit någon kommentar");
  } else if (
    firstName &&
    lastName &&
    commentField != "" &&
    dataToken.token != undefined
  ) {
    //post request to send review
    await fetch(`${movieId}/review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        data: {
          comment: commentField,
          rating: rating,
          author: firstName + " " + lastName,
          verified: true,
          movie: movieId,
        },
      }),
    });
  }
}
