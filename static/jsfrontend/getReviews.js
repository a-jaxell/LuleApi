//Get the current URL to get the movie ID and split into segments at each /
const segments = new URL(document.URL).pathname.split('/');
// Handle potential trailing slash
const movieID = segments.pop() || segments.pop(); 
//Get the conainer where to put the resulting HTML code
const container = document.querySelector("#reviewContainer");
console.log("movieID i JS frontend: " + movieID);
getReviews();

//Call getReviews using fetch
//Parse the data and put into HTML
async function getReviews() {
    const res = await fetch("/reviews/" + movieID);
    const reviews = await res.json();
    console.log("Recensioner: "+reviews);
    reviews.forEach(review => {  
        
        const li = document.createElement("li")
        li.className = "reviews"
        const author = document.createElement("p")
        author.innerText = review.author;
        const rating = document.createElement("p")
        rating.innerText = review.rating;
        const comment = document.createElement("p")
        comment.innerText = review.comment;
        li.append(author, rating,comment);
        container.append(li);
        
    });
    
}