class CarouselListUi {
  constructor({ containerEl, data, style }) {
    Object.assign(this, { containerEl, data, style });
  }

  render() {
    this.container = document.querySelector(this.containerEl);
    this.container.style.width = `${this.style.width}px`;
    this.container.style.height = `${this.style.height}px`;
    this.container.style.overflow = `hidden`;
    this.container.innerHTML += this.addContentList();
  }

  addContentList() {
    let contentDom = "";
    this.data.title.forEach((v, i) => {
      contentDom += `
      <a href="${this.data.link[i]}">
        <div class="h-list">
          <img class="h-list-image" src="${this.data.thumbnail[i]}">
          <div class="h-list-title">${this.data.title[i]}</div>
          <div class="h-list-desc">${this.data.description[i]}</div>
        </div>
      </a>`;
    });

    return contentDom;
  }
}

export { CarouselListUi };
