let AddParagraphButton = document.getElementById("Add_Paragraph");
let AddImages = document.getElementById("Add_Image");
let add_p = document.getElementById("p-div");
let add_i = document.getElementById("img-div");

//To make the paragraph button
function AddParagraph(){
   let newParagraph = document.createElement("p");
   newParagraph.innerText = "Hot chocolate is bad today";
   newParagraph.style.color = "white";
   newParagraph.style.backgroundColor = "black";
   add_p.style.display = "block";
   add_p.appendChild(newParagraph);
}

AddParagraphButton.addEventListener("click",AddParagraph);

function addImage(){
    let newImage = document.createElement("new_Image"); // <img>
    newImage.src = "pikachu.png";
 add_i.style.display = "block";
    AddImages.appendChild(addImage);   
}
addButton.addEventListener("click", addImage);

//It does not show up