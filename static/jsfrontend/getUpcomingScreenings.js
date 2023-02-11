const movieID = document.querySelector("#movieID");
const container = document.querySelector("#coming-screenings");


export default async function renderScreenings() {
    const res = await fetch("/api/upcoming-screenings/" + movieID.dataset.id);
    const screenings = await res.json();
    
    screenings.forEach(screening => {  
        
        const li = document.createElement("li")
        li.className = "screening"
        const date = document.createElement("p")
        date.innerText = screening.date.substring(0, 10);
        const time = document.createElement("p")
        time.innerText = screening.date.substring(11, 16);
        
        li.append(date, time);
        container.append(li);
        
    });
    
}

