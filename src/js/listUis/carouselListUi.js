class CarouselListUi {
  constructor({ containerEl, data, style }) {
    console.log(containerEl);
    Object.assign(this, { containerEl, data, style });
  }

  render() {
    this.container = document.querySelector(this.containerEl);
    this.addContentList();
  }

  addContentList() {
    this.data.title.forEach((v, i) => {
      this.container.innerHTML += `
      <a href="${this.data.link[i]}"
        <div class="h-list${i}">
          <img src="${this.data.thumbnail[i]}"
          <div class="h-list-title${i}>${this.data.title}</div>
          <div class="h-list-desc${i}>${this.data.description[i]}</div>
        <div>
      </a>`;
    });
  }
}

export { CarouselListUi };
