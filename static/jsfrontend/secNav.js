import {
  repAncs,
  salAncs,
  specAncs,
  liveAncs,
  barBistAncs,
} from "./anchors.js";

const folderDir = "/";
// Only pass along folderDir if the html-files are in another directory than the calling document.
const rep = document.querySelector("#rep");
const repDrop = document.querySelector("#rep-dropdown");
appendAnchors(rep, repDrop, repAncs);

const sal = document.querySelector("#sal");
const salDrop = document.querySelector("#sal-dropdown");
appendAnchors(sal, salDrop, salAncs);

const spec = document.querySelector("#spec");
const specDrop = document.querySelector("#spec-dropdown");
appendAnchors(spec, specDrop, specAncs);

const live = document.querySelector("#live");
const liveDrop = document.querySelector("#live-dropdown");
appendAnchors(live, liveDrop, liveAncs);

const barBist = document.querySelector("#barBist");
const barBistDrop = document.querySelector("#barBist-dropdown");
appendAnchors(barBist, barBistDrop, barBistAncs);

function appendAnchors(btn, dropDown, anchors) {
  for (let i = 0; i < anchors.length; i++) {
    const a = document.createElement("a");
    a.innerHTML = anchors[i][0];

    if (anchors[i][1] != "hrefLink" && anchors[i][1] != "") {
      a.setAttribute("href", folderDir + anchors[i][1]);
    }
    dropDown.append(a);
  }

  btn.addEventListener("click", () => {
    dropDown.classList.toggle("show");
  });
}

window.onclick = function (event) {
  if (!event.target.matches("#rep")) {
    document.querySelector("#rep-dropdown").classList.remove("show");
  }
  if (!event.target.matches("#sal")) {
    document.querySelector("#sal-dropdown").classList.remove("show");
  }
  if (!event.target.matches("#spec")) {
    document.querySelector("#spec-dropdown").classList.remove("show");
  }
  if (!event.target.matches("#live")) {
    document.querySelector("#live-dropdown").classList.remove("show");
  }
  if (!event.target.matches("#barBist")) {
    document.querySelector("#barBist-dropdown").classList.remove("show");
  }
};
