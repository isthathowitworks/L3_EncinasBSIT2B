function changeText() {
    let paragraph = document.getElementById("message");

    if (paragraph.innerText == "Click to change the text.") {
        paragraph.innerText = "Click again to return.";
    } else {
        paragraph.innerText = "Click to change the text.";
    }
}
