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
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff9f";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 33);
const terminal = document.getElementById("terminal");

const commands = [
    "Initializing system...",
    "Connecting to PLC...",
    "Reading Modbus registers...",
    "Scanning ports...",
    "Analyzing traffic...",
    "No threats detected ✅",
    "Monitoring active..."
];

let index = 0;

function typeTerminal() {
    if (index < commands.length) {
        let line = document.createElement("div");
        line.textContent = "> " + commands[index];
        terminal.appendChild(line);

        terminal.scrollTop = terminal.scrollHeight;
        index++;

        setTimeout(typeTerminal, 100);
    }
}

typeTerminal();