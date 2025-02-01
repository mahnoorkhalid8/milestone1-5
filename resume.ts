const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLElement;
// const buttonPdf = document.getElementById("download-button") as HTMLButtonElement;


toggleButton.addEventListener("click", ()=>{
    if(skills.style.display === "none"){
        skills.style.display = "block";
    }
    else{
        skills.style.display = "none";
    }
})

//  // download PDF
//  buttonPdf.addEventListener('click', ()=> {
//     window.print();              //print and save
// });   