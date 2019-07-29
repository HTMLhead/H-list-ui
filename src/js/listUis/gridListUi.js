class GridListUi {
  constructor({ domElement, data, style }) {
    Object.assign(this, { domElement, data, style });
    this.widthIndex = 0;
    this.currentIndex = 0;
    this.link = data.linkArr[this.contentIndex];
    window.addEventListener("keydown", e => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowRight" ||
        e.key === "ArrowLeft" ||
        e.key === "Enter"
      ) {
        e.preventDefault();
        this.link = data.linkArr[this.currentIndex];
      }
    });
  }

  render() {
    const container = document.querySelector(this.domElement);
    container.appendChild(this.addLayout());
    const layout = document.querySelector(".h-list-grid-layout");
    layout.appendChild(this.addSelector());
    this.addContainerStyle(container);
    this.addSelectorEvent(container);
    layout.innerHTML += this.addContentList();
    this.addTitleDescStyle();
  }
  addTitleDescStyle() {
    const title = document.querySelectorAll(".h-list-grid-title");
    const desc = document.querySelectorAll(".h-list-grid-desc");
    title.forEach(v => {
      v.style.fontSize = this.style.title.fontSize;
      v.style.fontWeight = this.style.title.bold ? "bold" : "null";
    });
    desc.forEach(v => {
      v.style.fontSize = this.style.description.fontSize;
    });
  }

  addContentList() {
    let contentDom = "";
    this.data.titleArr.forEach((v, i) => {
      contentDom += `
      <div style="margin:10px">
        <div class="h-list" style="width:${this.style.content.width}px; height:${
        this.style.content.height
      }px;">
          <img style="width:${this.style.content.width}px; height:${
        this.style.content.width
      }px;object-fit: cover;"src="${this.data.thumbnailArr[i]}">
          <div class="h-list-grid-title">${this.data.titleArr[i]}</div>
          <div class="h-list-grid-desc">${this.data.descriptionArr[i]}</div>
        </div>
      </div>`;
    });

    return contentDom;
  }

  addSelectorEvent(element) {
    const contentWidth = this.style.content.width;
    const contentHeight = this.style.content.height;
    const containerWidth = this.style.container.width;
    element.addEventListener("keydown", e =>
      this.selectorEvt(e, element, contentWidth, contentHeight, containerWidth)
    );
    // 키보드 입력 이벤트 등록
  }
  moveSelector(transformSizeX, transformSizeY) {
    const selector = document.querySelector(`.h-list-grid-selector`);
    selector.style.transform = `translateX(${transformSizeX}px) translateY(${transformSizeY}px)`;
    return selector.style.transform;
  }

  selectorEvt(e, element, contentWidth, contentHeight, containerWidth) {
    if (e.key === "ArrowRight") {
      this.moveSelectorRight(element, Number(contentWidth), Number(contentHeight));
    } else if (e.key === "ArrowLeft") {
      this.moveSelectorLeft(element, Number(contentWidth), Number(contentHeight));
    } else if (e.key === "ArrowDown") {
      this.moveSelectorDown(element, Number(contentWidth), Number(contentHeight));
    } else if (e.key === "ArrowUp") {
      this.moveSelectorUp(element, Number(contentWidth), Number(contentHeight));
    } else if (e.key === "Enter") {
      this.goLink();
    }
  }

  goLink() {
    window.location.href = this.link;
  }
  addSelector() {
    const selector = document.createElement("div");
    selector.style.width = `${Number(this.style.content.width) + 20}px`;
    selector.style.height = `${Number(this.style.content.height) + 20}px`;
    selector.style.position = `absolute`;
    selector.style.top = `0`;
    selector.style.backgroundColor = `#008000`;
    selector.style.opacity = `0.5`;
    selector.className = "h-list-grid-selector";
    selector.style.transition = `transform 0.1s linear`;
    return selector;
    //selector생성 함수
  }

  addLayout() {
    const selector = document.createElement("div");
    selector.className = "h-list-grid-layout";
    selector.style.display = "grid";
    selector.style.outline = "none";
    selector.style.width = `${this.style.container.width}px`;
    selector.style.height = `${this.style.container.height}px`;
    selector.style.trnasition = "all 0.3s linear";
    selector.style.gridTemplateColumns = `repeat(${this.style.container.column},
      ${Number(this.style.content.width) + 20}px)`;
    selector.tabIndex = 1;
    return selector;
  }

  addContainerStyle(element) {
    element.tabIndex = 2;
    element.style.position = "relative";
    element.style.width = `${Number(this.style.container.width) + 10}px`;
    element.style.height = `${this.style.container.height}px`;
    element.style.border = this.style.border
      ? `${this.style.border.size}px solid ${this.style.border.color}`
      : null;
    element.style.overflow = "hidden";
    // container element에 Grid 속성을 추가 및 반응형 CSS style추가
  }

  moveSelectorLeft(element, contentWidth, contentHeight) {
    const containerHeight = Number(this.style.container.height);
    if (this.currentIndex <= 0) return;
    this.currentIndex--;
    this.widthIndex--;
    if (this.widthIndex < 0) {
      this.widthIndex = Number(this.style.container.column) - 1;
    }
    const heightIndex = Math.floor(this.currentIndex / Number(this.style.container.column));
    const transformSizeX = (contentWidth + 20) * this.widthIndex;
    const transformSizeY = (contentHeight + 20) * heightIndex;
    this.moveSelector(transformSizeX, transformSizeY);
    this.moveLayoutDown(transformSizeY, contentHeight, containerHeight);
  }
  moveSelectorRight(element, contentWidth, contentHeight) {
    const containerHeight = Number(this.style.container.height);
    if (this.currentIndex >= this.data.titleArr.length - 1) return;
    this.currentIndex++;
    this.widthIndex++;
    if (this.widthIndex >= Number(this.style.container.column)) {
      this.widthIndex = 0;
    }
    const heightIndex = Math.floor(this.currentIndex / Number(this.style.container.column));
    const transformSizeX = (contentWidth + 20) * this.widthIndex;
    const transformSizeY = (contentHeight + 20) * heightIndex;
    this.moveSelector(transformSizeX, transformSizeY);
    this.moveLayoutUp(transformSizeY, contentHeight, containerHeight);
  }
  moveSelectorUp(element, contentWidth, contentHeight) {
    const containerHeight = Number(this.style.container.height);
    const column = Number(this.style.container.column);
    this.currentIndex -= column;
    if (this.currentIndex < 0) {
      this.currentIndex += column;
      return;
    }
    const heightIndex = Math.floor(this.currentIndex / column);
    const transformSizeX = (contentWidth + 20) * this.widthIndex;
    const transformSizeY = (contentHeight + 20) * heightIndex;
    this.moveSelector(transformSizeX, transformSizeY);
    this.moveLayoutDown(transformSizeY, contentHeight, containerHeight);
  }
  moveSelectorDown(element, contentWidth, contentHeight) {
    const containerHeight = Number(this.style.container.height);
    const column = Number(this.style.container.column);
    this.currentIndex += column;
    if (this.currentIndex > this.data.titleArr.length - 1) {
      this.currentIndex -= column;
      return;
    }
    const heightIndex = Math.floor(this.currentIndex / column);
    const transformSizeX = (contentWidth + 20) * this.widthIndex;
    const transformSizeY = (contentHeight + 20) * heightIndex;
    this.moveSelector(transformSizeX, transformSizeY);
    this.moveLayoutUp(transformSizeY, contentHeight, containerHeight);
  }
  moveLayoutDown(transformSizeY, contentHeight, containerHeight) {
    const layout = document.querySelector(".h-list-grid-layout");
    const layoutOriginSize = Number(layout.style.transform.replace(/[^0-9-]/g, ""));
    const isOverContainerHeight = transformSizeY - contentHeight < containerHeight;
    const isTransformSizeOver = -layoutOriginSize < transformSizeY;
    if (isOverContainerHeight) {
      if (isTransformSizeOver) return;
      layout.style.transform = `translateY(-${transformSizeY}px)`;
    }
  }
  moveLayoutUp(transformSizeY, contentHeight, containerHeight) {
    const layout = document.querySelector(".h-list-grid-layout");
    const layoutOriginSize = Number(layout.style.transform.replace(/[^0-9-]/g, ""));
    const isOverContainerHeight = transformSizeY + contentHeight > containerHeight;
    const isTransformSizeOver = -layoutOriginSize > transformSizeY - 2 * contentHeight;
    if (isOverContainerHeight) {
      if (isTransformSizeOver) return;
      const height = transformSizeY + contentHeight - containerHeight;
      layout.style.transform = `translateY(-${height}px)`;
    }
  }
}

export { GridListUi };
