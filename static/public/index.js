let rankedCheckbox = document.getElementById('Ranked');
let rankInput = document.getElementById('rank');

function makeRankRequired(){
    rankInput.toggleAttribute('required');
}

rankedCheckbox.addEventListener('change', makeRankRequired);