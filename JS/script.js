function showImage(imgId, btnId, hideId) {
    var img = document.getElementById(imgId);
    var btn = document.getElementById(btnId);
    var hideBtn = document.getElementById(hideId);
    img.style.display = "block";
    btn.style.display = "none";
    hideBtn.style.display = "block";
}

function hideImage(imgId, btnId, hideId) {
    var img = document.getElementById(imgId);
    var btn = document.getElementById(btnId);
    var hideBtn = document.getElementById(hideId);
    img.style.display = "none";
    btn.style.display = "block";
    hideBtn.style.display = "none";
}

