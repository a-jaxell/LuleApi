import getUpcomingScreenings from "./getUpcomingScreenings.js"
import {getReviews, getNextPage, getPreviousPage} from "./getReviews.js"
import {formSubmitListener, getMovieRating} from "./moviePage.js"

// get all upcoming screenings
getUpcomingScreenings();

// send rating & review
formSubmitListener();
getMovieRating();

//reviews with pagination
getReviews();
getNextPage();
getPreviousPage();