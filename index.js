// Write your code here!
// Create DOM Elements Programmatically
const mainElement = document.querySelector("main#main");
if (mainElement) {
  mainElement.remove();
}

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Ayşe is the champion";
document.body.appendChild(newHeader);