let misfortunes = ['A bird will poop on you', 'You will step in dog poo', 
'You will forget the housekeys (again)', 'You will slip on a banana peel', 
'You will be surrounded by thirteen black cats under a ladder (Don\'t ask how)', 
'You will miss the bus just as you arrive at the bus stop', 
'Your dinner didn\'t agree with your stomach. You will have explosive diarrhea',
'It will suddenly rain, ruining your nice hair', 
'You will not have hot water to shower tonight', 
'It will take you an extra two hours to get home tonight', 
'You will get hit by a flying cow', 
'Your lunch will be stuck in your teeth for the rest of the day'];

let button = document.getElementById('misfortune-btn');
let misfortune = document.getElementById('misfortune');

function getRandomMisfortune(){
    let randomMisfortune = Math.floor(Math.random() * misfortunes.length);
    return misfortunes[randomMisfortune];
}

function showMisfortune(){
    misfortune.innerHTML = getRandomMisfortune();
}

button.addEventListener('click', showMisfortune);
