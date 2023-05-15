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
    }
    popUp.classList.remove("ascuns");
    document.getElementsByClassName("close-btn")[0].addEventListener("click", removePopUp);
}

function removePopUp()
{
    console.log("intru in asta");
    const body = document.getElementsByTagName("body");
    let copiiBody = body[0].children;
    let popUp = document.getElementById("fundal-popup");
    for (let i = 0; i < (copiiBody.length - 3); i++) {
        copiiBody[i].classList.remove("blurry");
    }
    popUp.classList.add("ascuns");
    document.getElementsByClassName("close-btn")[0].removeEventListener("click", removePopUp);

}

window.onload = setInterval(setRandomColor, 7500);

window.onload = setInterval(setRandomHeart, 2000);

window.onload = setTimeout(loadPopUp, 1000000);

/// to do sa se salveze informatiile alea undeva (local storage) ++ daca popup ul a fost completat sa nu mai apara