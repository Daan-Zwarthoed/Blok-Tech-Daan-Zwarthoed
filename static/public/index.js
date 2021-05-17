let rankedCheckbox = document.getElementById("Ranked");
let rankInput = document.getElementById("rank");

function makeRankRequired() {
  rankInput.toggleAttribute("required");
}

if (rankedCheckbox) {
  rankedCheckbox.addEventListener("change", makeRankRequired);
}
