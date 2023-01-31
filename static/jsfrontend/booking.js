let seatPlan = document.querySelector("#seatPlanCanvas");
let ticketSelector = document.querySelector(".ticketSelector");
let seats;
let li;
let numberOfSelected = 0;

async function showSeats() {
  let res = await fetch("../src/seats.json");
  let data = await res.json();

  li = data.seats;
  let count = 0;
  li.forEach(function () {
    let seat = document.createElement("div");
    seat.classList.add("seat");
    seat.addEventListener("click", function (e) {
      if (e.target.classList.contains("seat")) {
        e.target.classList.add("selected");
        numberOfSelected++;
        e.target.classList.remove("seat");
      } else if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
        numberOfSelected--;
        e.target.classList.add("seat");
      }
      if (
        numberOfSelected > 0 &&
        ticketSelector.classList.contains("active") == false
      ) {
        ticketSelector.classList.add("active");
      }
    });
    seat.appendChild(document.createTextNode(count + 1));
    if (li[count].wheelchair == true) {
      const image = document.createElement("img");
      image.src = "../static/wheelchair.png";
      seat.appendChild(image);
    }
    if (li[count].available == false) {
      seat.classList.add("unavailable");
    }
    seatPlan.appendChild(seat);
    count++;
  });
}
showSeats();
