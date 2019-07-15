class CarouselListUi {
  constructor({ domElement, data, style }) {
    Object.assign(this, { domElement, data, style });
    this.contentIndex = 0;
    this.overContentIndex = 0;
    this.link = data.linkArr[this.contentIndex];
    this.wholeWidth = this.style.content.width * (this.data.titleArr.length + 1);
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
