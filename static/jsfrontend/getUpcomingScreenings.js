const id = document.querySelector("#id");
const container = document.querySelector("#coming-screenings");
const screenings = fetch("/fetch" + id);


screenings.forEach(screening => {
    const li = document.createElement("li");
    li.innerText = screening.start_time;
});

console.log("FRONTEND" + f)