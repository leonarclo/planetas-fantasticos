export default class ScrollSuave {
  constructor(links, options) {
    this.navLinks = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.smoothScroll = this.smoothScroll.bind(this);
  }

  smoothScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.navLinks.forEach((link) => {
      link.addEventListener('click', this.smoothScroll);
    });
  }

  init() {
    if (this.navLinks.length);
    this.addLinkEvent();
    return this;
  }
}
