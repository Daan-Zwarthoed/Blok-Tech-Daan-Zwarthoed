var rankedCheckbox = document.getElementById('Ranked');
var rankInput = document.getElementById('rank');

function makeRankRequired(){
    rankInput.toggleAttribute('required');
}

rankedCheckbox.addEventListener('change', makeRankRequired);