function postReview() {

  document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault()
    
    const data = {
    
      name: document.querySelector("#name").value,
      comment: document.querySelector("#comment").value,
      rating: document.querySelector('input[name="rating"]:checked').value
    };

    fetch("/postRoute", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });
}

postReview()

