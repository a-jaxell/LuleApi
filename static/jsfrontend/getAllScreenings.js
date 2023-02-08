
const container = document.querySelector(".screening-container");

const renderScreenings = async () => {
        
        const res = await fetch("/screenings");
        const data = await res.json();

        const screeningList = document.createElement('ul');
        screeningList.className = "screening-list-main-page";
        screeningList.append(

        data.forEach(ele => {
            
            const movie = document.createElement('li');
            movie.className = "screening-item";
            movie.classList.add("screening");
            screeningList.appendChild(movie);

            const movieImage = document.createElement('img');
            movieImage.classList.add("screening-list-image");
            movieImage.src = `${ele.movie.image.url}`;
            movie.appendChild(movieImage);
            
            const anchor = document.createElement('a');
            anchor.innerText = ele.movie.title;
            anchor.href = `/movies/${ele.movie.id}`;
            anchor.className = "movie-title";
            movie.appendChild(anchor);

            const showTime = document.createElement('a');
            showTime.innerText = ` ${ele.start_time.substring(11,16)} ${ele.start_time.substring(0,10)}`;
            showTime.className = ".screening-time"
            movie.appendChild(showTime);

        }));
        container.append(screeningList);
}
renderScreenings();