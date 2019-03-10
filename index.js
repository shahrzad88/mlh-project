// Get the modal
var modal = document.querySelector('#id01');
var startBtn = document.querySelector('#start');

// When click start button, show the modal as a blocks
startBtn.addEventListener("click", () => {
    modal.style.display = 'block';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});