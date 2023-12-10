let refresh = document.getElementsByTagName('h1');
const stop = document.querySelector('.stop');
refresh = refresh[0];
const imgArr = ['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png'];

refresh.addEventListener('click',()=>{
    localStorage.setItem('check','true');
    console.log(localStorage.getItem('check'));
    location.reload();
});

// const { href } = window.location;
// const alreadyLoaded = JSON.parse(localStorage.loaded || '[]');
// if (!alreadyLoaded.includes(href)) {
//   alreadyLoaded.push(href);
//   localStorage.loaded = JSON.stringify(alreadyLoaded);
//   window.addEventListener('load', () => {
//     localStorage.clear();
//   });
// }

window.addEventListener('load',function(){
    if(!localStorage.getItem('check')){
        // console.log(check);
        // console.log("hey");
        return;
    }
    // console.log("hi");
    let player1 = Math.ceil(Math.random()*imgArr.length);
    let player2 = Math.ceil(Math.random()*imgArr.length);
    if(player1>player2){
        refresh.textContent = "Player 1 WON!!";
    }else if(player2>player1){
        refresh.textContent = "Player 2 WON!!";
    }else{
        refresh.textContent = "It's a TIE!!";
    }

    let img1 = document.getElementsByClassName('player1');
    img1 = img1[1];
    let img2 = document.getElementsByClassName('player2');
    img2 = img2[1];

    img1.setAttribute('src',imgArr[player1-1]);
    img2.setAttribute('src',imgArr[player2-1]);
    // refresh.style.width = "40%"
});

stop.addEventListener('click',function(){
    localStorage.clear();
    // refresh.textContent=""
    location.reload();
});
