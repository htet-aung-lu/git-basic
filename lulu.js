const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click",() => {
      modal.showModal();

})


closeBtn.addEventListener("click",() => {
    modal.close();

})