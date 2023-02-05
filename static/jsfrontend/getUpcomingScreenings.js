const id = document.querySelector("#id");
const container = document.querySelector("#coming-screenings");

renderScreenings();

async function renderScreenings() {
    const res = await fetch("/api/upcoming-screenings/" + 1);
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

