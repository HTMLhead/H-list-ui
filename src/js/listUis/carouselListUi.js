class CarouselListUi {
  constructor({ domElement, data, style }) {
    Object.assign(this, { domElement, data, style });
    this.contentIndex = 0;
    this.overContentIndex = 0;
    this.link = data.linkArr[this.contentIndex];
    this.wholeWidth = this.style.content.width * (this.data.titleArr.length + 1);
  }

  render() {
    const container = document.querySelector(this.domElement);
    container.appendChild(this.addLayout());
    container.appendChild(this.addSelector());
    const layout = document.querySelector(".h-list-layout");
    this.addContainerStyle(container);
    this.addLayoutStyle(layout);
    this.addLayoutEvent(layout);
    layout.innerHTML += this.addContentList();
  }

  addLayout() {
    const selector = document.createElement("div");
    selector.className = "h-list-layout";
    window.tabIndex = 0;
    selector.tabIndex = 1;
    return selector;
  }

  addSelector() {
    const selector = document.createElement("div");
    selector.style.width = `${Number(this.style.content.width) + 20}px`;
    selector.style.height = `${Number(this.style.content.height) + 20}px`;
    selector.style.position = `absolute`;
    selector.style.top = `0`;
    selector.style.backgroundColor = `#008000`;
    selector.style.opacity = `0.5`;
    selector.className = "h-list-selector";
    selector.style.transition = `transform 0.1s linear`;
    return selector;
  }

  moveSelector(transformSize) {
    const selector = document.querySelector(`.h-list-selector`);
    this.link = this.data.linkArr[this.contentIndex + this.overContentIndex];
    selector.style.transform = `translateX(${transformSize}px)`;
    return selector.style.transform;
  }

  goLink() {
    window.location.href = this.link;
  }

  addContainerStyle(element) {
    element.style.width = `${this.style.container.width}px`;
    element.style.height = `${this.style.container.height}px`;
    element.style.position = `relative`;
    element.style.overflow = `hidden`;
    return element;
  }

  addLayoutStyle(element) {
    element.style.display = `flex`;
    element.style.outline = `none`;
    element.style.transition = `transform 0.1s linear`;
    element.style.width = `${this.wholeWidth}px`;
    return element;
  }

  addLayoutEvent(element) {
    const contentWidth = this.style.content.width;
    const containerWidth = this.style.container.width;
    const wholeWidth = this.wholeWidth;
    element.addEventListener("keydown", e =>
      this.moveElement(e, element, contentWidth, containerWidth, wholeWidth)
    );
  }

  moveElement(e, element, contentWidth, containerWidth, wholeWidth) {
    if (e.key === "ArrowRight") {
      this.changeLayoutRight(element, contentWidth, containerWidth, wholeWidth);
    } else if (e.key === "ArrowLeft") {
      this.changeLayoutLeft(element, contentWidth, containerWidth, wholeWidth);
    } else if (e.key === "Enter") {
      this.goLink();
    }
  }

  changeLayoutLeft(element, contentWidth, containerWidth, wholeWidth) {
    const originSize = Number(element.style.transform.replace(/[^0-9-]/g, ""));
    const contentWidthSize = Number(contentWidth);
    if (originSize >= 0) {
      return;
    }
    if (Math.abs(originSize) > wholeWidth - containerWidth && this.overContentIndex > 0) {
      this.overContentIndex--;
      this.moveSelector((contentWidthSize + 20) * this.overContentIndex);
      return;
    }
    this.contentIndex--;
    this.link = this.data.linkArr[this.contentIndex];
    element.style.transform = `translateX(${originSize + contentWidthSize + 20}px)`;
  }

  changeLayoutRight(element, contentWidth, containerWidth, wholeWidth) {
    const originSize = Number(element.style.transform.replace(/[^0-9-]/g, ""));
    const contentWidthSize = Number(contentWidth);
    if (Math.abs(originSize) > wholeWidth - containerWidth) {
      this.selectorMoveChecker(contentWidthSize, containerWidth);
      return;
    }
    this.contentIndex++;
    this.link = this.data.linkArr[this.contentIndex];
    element.style.transform = `translateX(${originSize - contentWidthSize - 20}px)`;
  }

  selectorMoveChecker(contentWidth, containerWidth) {
    if ((contentWidth + 20) * (this.overContentIndex + 1) > containerWidth - contentWidth) {
      return;
    }
    this.overContentIndex++;
    this.moveSelector((contentWidth + 20) * this.overContentIndex);
    return;
  }

  addContentList() {
    let contentDom = "";
    this.data.titleArr.forEach((v, i) => {
      contentDom += `
      <a href="${this.data.linkArr[i]}" style="margin:10px">
        <div class="h-list" style="width:${this.style.content.width}px; height:${
        this.style.content.height
      }px;">
          <img style="width:${this.style.content.width}px; height:${
        this.style.content.width
      }px;"src="${this.data.thumbnailArr[i]}">
          <div class="h-list-title">${this.data.titleArr[i]}</div>
          <div class="h-list-desc">${this.data.descriptionArr[i]}</div>
        </div>
      </a>`;
    });

    return contentDom;
  }
}

export { CarouselListUi };
