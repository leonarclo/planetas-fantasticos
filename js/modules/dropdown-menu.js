import outsideClick from "./outside-click.js";

export default function initDropdownMenu() {
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');

  dropdownMenu.forEach((item) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    })
  });
  
  function handleClick(event) {
    event.preventDefault()
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    });
  }  
}
