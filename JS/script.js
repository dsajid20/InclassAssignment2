function toggleImage(imgId) {
    var img = document.getElementById(imgId);
    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}
