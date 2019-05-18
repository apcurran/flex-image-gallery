const mainProgram = (() => {
    const galleryContainer = document.querySelector(".gallery-container");
    galleryContainer.addEventListener("click", animateOpen);
 
    function animateOpen(event) {
       const panel = event.target;
       panel.classList.toggle("open");
       console.log("Panel opened! IIFE worked!")
    }
  })();