const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", animateOpen);
});

function animateOpen(event) {
    const panel = event.target;
    panel.classList.toggle("open");
}