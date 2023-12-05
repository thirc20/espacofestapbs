function showAlert(day) {
    const modalText = document.getElementById("modal-text");
    modalText.textContent = `Você clicou no dia ${day}`;

    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}