const id = document.querySelector("#id");
const container = document.querySelector("#coming-screenings");

renderScreenings();
async function renderScreenings() {
    const res = await fetch("/fetch/" + 1);
    const screenings = await res.json();
    
    screenings.forEach(screening => {  
        
        const li = document.createElement("li")
        li.className = "screenings"
        const date = document.createElement("p")
        date.innerText = screening.date;
        const time = document.createElement("p")
        time.innerText = screening.time;
        li.append(date, time);
        container.append(li);
        
    });
    
}