
const container = document.querySelector(".screening-container");

const renderScreenings = async () => {
        
        const res = await fetch("/screenings");
        const data = await res.json();

        const screeningList = document.createElement('ul');
        screeningList.className = "screening-list-main-page";
        screeningList.append(

        data.forEach(ele => {
            
            const screening = document.createElement('li');
            screening.className = "screening-item";
            screening.classList.add("screening");
            screeningList.appendChild(screening);

            const movieImage = document.createElement('img');
            movieImage.classList.add("screening-list-image");
            movieImage.src = `${ele.movie.image.url}`;
            screening.appendChild(movieImage);
            
            const screeningDetails = document.createElement('div');
            screeningDetails.className = "movie-details";
            screening.appendChild(screeningDetails);

            const title = document.createElement('a');
            title.innerText = ele.movie.title;
            title.href = `/movies/${ele.movie.id}`;
            title.className = "movie-title";
            screeningDetails.appendChild(title);

            const showTime = document.createElement('a');
            showTime.innerText = ` ${ele.start_time.substring(11,16)} ${ele.start_time.substring(0,10)}`;
            showTime.className = "screening-time"
            screeningDetails.appendChild(showTime);

            const showRoom = document.createElement('p');
            showRoom.innerText = `${ele.room}`;
            showRoom.className = "screening-room";
            screeningDetails.appendChild(showRoom);

        }));
        container.append(screeningList);
}
renderScreenings();