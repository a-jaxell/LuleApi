function validateReview(review){
    //Check so that all fields are filled in correctly
    if(review.firstName ===""){
        var e = new Error("FirstName is not correct, please fix");
        e.status = 400;
        return(e);
    }
    if(review.lastName ===""){
        var e = new Error("LastName is not correct, please fix");
        e.status = 400;
        return(e);
    }
    if(review.comment ===""){
        var e = new Error("comment is not correct, please fix");
        e.status = 400;
        return(e);
    }
    if(review.rating <0 && review.rating >5){
        var e = new Error("Rating must be between 0 and 5, fix and try again.");
        e.status = 400;
        return(e);
    }
}