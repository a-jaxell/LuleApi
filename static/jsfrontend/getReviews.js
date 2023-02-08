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
    if (wantedPage !== undefined){
        currentPage=wantedPage;
    }
    //Get the reviews for movie with ID=movieID and page=currentPage
    const res = await fetch("/reviews/" + movieID+"?page="+currentPage);
    //Get JSON data
    const reviews = await res.json();
    //Get pageCount
    totalPages = reviews.pages.pagination.pageCount;
    //If we have reviews in container, delete them first
    var child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    //Add new HTML elements to page with reviewInfo
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

//Get next page with reviews as long as currentPage is not equal to pageCount
async function getNextPage() {
	if (currentPage !== totalPages) {
		currentPage++;
	}
	await getReviews(currentPage);
}

//Get previousPage as long as currentPage not equal to first page
async function getPreviousPage() {
	if (currentPage !== 1) {
		currentPage--;
	}
	await getReviews(currentPage);
}