var hideButton = document.getElementById("toggle-skills");
var skill = document.getElementById("skills");
var buttonPdf = document.getElementById("download-button");
hideButton.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
// download PDF
buttonPdf.addEventListener('click', function () {
    window.print(); //print and save
});
