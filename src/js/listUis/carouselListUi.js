class CarouselListUi {
  constructor({ targetElement, content, style }) {
    Object.assign(this, { targetElement, content, style });
    this.init();
  }

  init() {
    this.container = document.querySelector(`.${this.targetElement}`);
    this.container.innerHTML = `<div class="something">hihihi<div>`;
  }
}

export { CarouselListUi };
