const arrowsRight = document.querySelectorAll(".arrow-right");
const gameLists = document.querySelectorAll(".list-game");


arrowsRight.forEach((arrow, i) =>{
    const itemNumber = gameLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    console.log(itemNumber);
    arrow.addEventListener("click", ()=>{
        clickCounter++;
        if (itemNumber - (6 + clickCounter) >= 0){
            gameLists[i].style.transform = `translateX(${gameLists[i].computedStyleMap().get("transform")[0].x.value-320}px)`;  
        } else {
            gameLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
        
    });
    console.log(gameLists[i].querySelectorAll("img").length)
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-phim');
    
    cards.forEach(card => {
        const cardId = card.getAttribute('id');
        
        card.addEventListener('click', function() {
            window.location.href = `đặt game.html?id=${cardId}`;
        });
    });
});
