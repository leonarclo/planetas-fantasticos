export default function initModal() {
  const btnOpenModal = document.querySelector('[data-modal="open"]');
  const btnCloseModal = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  if (btnOpenModal && btnCloseModal && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }
        
    function clickOutside(event) {
      if (event.target == this) {
        toggleModal(event)
      }
    }
    
    btnOpenModal.addEventListener('click', toggleModal);
    btnCloseModal.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', clickOutside)
  }
}



