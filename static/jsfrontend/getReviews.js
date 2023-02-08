const buttonNext = document.querySelector("#buttonNext");
const buttonPrev = document.querySelector("#buttonPrevious");
buttonNext.addEventListener("click", getNextPage);
buttonPrev.addEventListener("click", getPreviousPage);

//Get the current URL to get the movie ID and split into segments at each /
const segments = new URL(document.URL).pathname.split('/');
// Handle potential trailing slash
const movieID = segments.pop() || segments.pop(); 
//Get the conainer where to put the resulting HTML code
const container = document.querySelector("#reviewContainer");
console.log("movieID i JS frontend: " + movieID);
const params = new URLSearchParams(window.location.search);
let page = params.get("page")
let totalPages = 1;
let currentPage = 1;
if (page === null){
    page=currentPage;
}
getReviews();

//Call getReviews using fetch
//Parse the data and put into HTML
async function getReviews(wantedPage) {
    if (wantedPage !== null){
        currentPage=wantedPage;
    }
    console.log("totalt sidor:" + totalPages)
    const res = await fetch("/reviews/" + movieID+"?page="+page);
    const reviews = await res.json();
    console.log("Recensioner: "+reviews);
    var child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    reviews.reviews.data.forEach(review => {  
        const li = document.createElement("li")
        li.className = "reviews"
        const author = document.createElement("p")
        author.classList.add("author");
        author.innerText = review.attributes.author;
        const rating = document.createElement("p")
        rating.classList.add("reviewRating");
        rating.innerText = review.attributes.comment;
        const comment = document.createElement("p")
        comment.classList.add("reviewComment");
        comment.innerText = review.attributes.rating;
        const horizontalLine = document.createElement("hr");
        li.append(author,rating,comment,horizontalLine);
        container.append(li);
    });
    
}

async function getNextPage() {
	if (currentPage != totalPages) {
		currentPage++;
	}
	await getReviews(currentPage);
}

async function getPreviousPage() {
	if (currentPage != 1) {
		currentPage--;
	}
	await getReviews(currentPage);
}

async function onPageLoad() {
	await getReviews();
}