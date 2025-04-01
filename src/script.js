function updateText(text, color) {
    const textElement = document.getElementById("text");
    textElement.textContent = text.toUpperCase();
    textElement.style.color = color;
}

updateText("Olá, mundo!", "blue");
