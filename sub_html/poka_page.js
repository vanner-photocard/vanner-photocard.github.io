function buttonHide() {
    let x = document.getElementById("cardModeButton");

    console.log(x.style.display + " yes")
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}