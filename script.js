document.getElementById('exploreButton').addEventListener('click', function() {
    const stories = [
        "深夜の訪問者: あなたの部屋のドアが静かに開く...",
        "消えた村の伝説: 誰も戻ってこなかった...",
        "鏡の向こうの影: それはあなたを見ている...",
    ];
    const randomIndex = Math.floor(Math.random() * stories.length);
    alert(stories[randomIndex]);
});
