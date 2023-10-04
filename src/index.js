// Your code here
document.addEventListener('DOMContentLoaded',function(){
    fetchData();
});
function fetchData(){
    return fetch('http://localhost:3000/characters')
        .then(response => response.json())
        .then(data =>{getCharacterName(data)})
}

function getCharacterName(characters){
    const characterBar=document.getElementById('character-bar');
    characters.forEach((character)=>{
        const span = document.createElement('span');
        characterBar.appendChild(span)
        span.textContent =character.name;
        span.addEventListener('click',()=>{
             fetchDataDetails(character.id)
        });
        characterBar.appendChild(span) 
    })
 }
function fetchDataDetails(characterId){
    return fetch(`http://localhost:3000/characters/${characterId}`)
        .then(response => response.json())
        .then(data =>{displayDataDetails(data)})
}
function displayDataDetails(character){
    document.getElementById('name') .textContent= character.name;
    document.getElementById('image') .src=character.image;
    document.getElementById('vote-count').textContent=character.votes;
    
}
document.addEventListener('DOMContentLoaded',function(){
    const votesForm=  document.getElementById('votes-form');
    votesForm.addEventListener('submit', function(event){
        event.preventDefault();

        const votesInput=document.getElementById('votes');
        const votes=parseInt(votesInput.value);

        const voteCountElement=document.getElementById('vote-count');
        const currentVotes=parseInt(voteCountElement.textContent);
        const newVotes= currentVotes + votes;
        voteCountElement.textContent = newVotes;
        votesInput.value='';
    });
});