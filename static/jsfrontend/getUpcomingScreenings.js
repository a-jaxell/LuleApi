const id = document.querySelector("#id");
const container = document.querySelector("#coming-screenings");
//const screenings = fetch("/fetch" + id);


/* screenings.forEach(screening => {  
    const li = document.createElement("li").className = "hej";
    const date = document.createElement("p").innerText = screening.date;
    const time = document.createElement("p").innerText = screening.time;

    container.append(li.append(date, time))

});

renderScreenings(); */

renderScreenings();

async function renderScreenings() {
    const screenings = await fetch("/fetch/" + 1);
    const screenings2 = await screenings2.json()
    console.log(screenings);
    
    screenings.forEach(screening => {  
        const li = document.createElement("li").className = "hej";
        const date = document.createElement("p").innerText = screening.date;
        const time = document.createElement("p").innerText = screening.time;
    
        container.append(li.append(date, time));
        
        
    });
}
