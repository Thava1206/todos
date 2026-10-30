// src/index.js
import "./index.css"

const form = document.getElementById('myForm');

document.querySelector(".open-form").addEventListener("click", ()=> {
    form.style.display = "block";
});
document.querySelector(".cancel").addEventListener("click", ()=> {
    form.style.display = "none";
});
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}