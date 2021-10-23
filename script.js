// alert("Working")


// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1 * 6;
// randomNumber1 = Math.floor(randomNumber1);
// console.log(randomNumber1);

// or



var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceimg = "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceimg)


var randomNumber2=Math.floor(Math.random()*6) + 1;
var randomDiceimg2="dice"+randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceimg2);

if (randomNumber1 > randomNumber2) {
    
    document.querySelector("h1").innerHTML = "🎉Player 1 Wins";
}
else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "🎉Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Tie!"
}