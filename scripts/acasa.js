let culori = ["green", "purple", "red", "blue", "yellow", "fuchsia", "lime", "teal", "aqua", "navy", "coral", "darkred", "gold", "hotpink"];
let inimi = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍"];

function setRandomColor() {

    let randomIndex = Math.trunc(Math.random() * 100 % culori.length);
    let textToChange = document.getElementById("text-branding");
    textToChange.style.color = culori[randomIndex];

}

function setRandomHeart() {

    let randomIndex = Math.trunc(Math.random() * 100 % inimi.length);
    let textTitlu = document.getElementById("titlu-poveste");
    text = textTitlu.innerText;
    arrayText = textTitlu.innerText.split(" ");
    arrayText[2] = inimi[randomIndex];
    textTitlu.innerText = arrayText.join(" ");

}

function loadPopUp() {

    const body = document.getElementsByTagName("body");
    let copiiBody = body[0].children;
    let popUp = document.getElementById("fundal-popup");
    for (let i = 0; i < (copiiBody.length - 3); i++) {
        copiiBody[i].classList.add("blurry");
        console.log(copiiBody[i]);
    }
    popUp.classList.remove("ascuns");

    /// to da sa mearga butonul de inchis popup

}

window.onload = setInterval(setRandomColor, 7500);

window.onload = setInterval(setRandomHeart, 2000);

window.onload = setTimeout(loadPopUp, 1000);
