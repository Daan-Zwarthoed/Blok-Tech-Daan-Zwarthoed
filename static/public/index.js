let rankedCheckbox = document.getElementById("Ranked");
let rankInput = document.getElementById("rank");

function makeRankRequired() {
  rankInput.toggleAttribute("required");
}

if (rankedCheckbox) {
  rankedCheckbox.addEventListener("change", makeRankRequired);
}

let nogGeenFilters = document.getElementsByClassName("nogGeenFilters")[0];

function toggleNogGeenFiltersScroll() {
  if (window.scrollY > 300) {
    nogGeenFilters.classList.add("nogGeenFiltersScroll");
  } else {
    nogGeenFilters.classList.remove("nogGeenFiltersScroll");
  }
}

if (nogGeenFilters) {
  window.addEventListener("scroll", toggleNogGeenFiltersScroll);
}
