import data from "./data.json" assert {type: "json"};
console.log(data);

const arrowsRight = document.querySelectorAll(".arrow-right");
const movieLists = document.querySelectorAll(".list-film");


arrowsRight.forEach((arrow, i) =>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", ()=>{
        clickCounter++;
        if (itemNumber - (6 + clickCounter) >= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
            -320}px)`;  
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
        
    });
    console.log(movieLists[i].querySelectorAll("img").length)
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-phim');
    
    cards.forEach(card => {
        const cardId = card.getAttribute('id');
        
        card.addEventListener('click', function() {
            window.location.href = `đặt vé.html?id=${cardId}`;
        });
    });
});