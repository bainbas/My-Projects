function showMessage() {
    alert("Welcome to my website");
}
const text = "Accessing OT Security Dashboard...";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 50);
    }
}

window.onload = typingEffect;