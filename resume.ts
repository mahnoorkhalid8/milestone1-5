const hideButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skill = document.getElementById("skills") as HTMLElement;
// const buttonPdf = document.getElementById("download-button") as HTMLButtonElement;


hideButton.addEventListener("click", ()=>{
    if(skill.style.display === "none"){
        skill.style.display = "block";
    }
    else{
        skill.style.display = "none";
    }
})

//  // download PDF
//  buttonPdf.addEventListener('click', ()=> {
//     window.print();              //print and save
// });   