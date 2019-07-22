class GridListUi {
  constructor({ domElement, data, style }) {
    Object.assign(this, { domElement, data, style });
    //인덱스 넘버 설정
    this.widthIndex = 0;
    this.currentIndex = 0;
    window.addEventListener("keydown", e => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowRight" ||
        e.key === "ArrowLeft"
      ) {
        e.preventDefault();
      }
    });
  }

  render() {
    // let resizeId;
    // window.addEventListener("resize", function() {
    //   clearTimeout(resizeId);
    //   resizeId = setTimeout(doneResizing, 500);
    // });
    // function doneResizing() {
    //   //설정한 인덱스 넘버 주어진 content width에 맞게 재설정 (아래로, 위로 눌렀을 때 추가될 index만큼)
    // }
    const container = document.querySelector(this.domElement);
    container.appendChild(this.addLayout());
    const layout = document.querySelector(".h-list-grid-layout");
    layout.appendChild(this.addSelector());
    this.addContainerStyle(container);
    this.addSelectorEvent(container);
    layout.innerHTML += this.addContentList();
    // container.appendChild(this.addSelector());
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
          <div>${this.data.titleArr[i]}</div>
          <div>${this.data.descriptionArr[i]}</div>
        </div>
      </a>`;
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
    element.style.width = `${this.style.container.width}px`;
    element.style.height = `${this.style.container.height}px`;
    element.style.overflow = "hidden";
    // container element에 Grid 속성을 추가 및 반응형 CSS style추가
  }

  moveSelectorLeft(element, contentWidth, contentHeight) {
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
    // 왼쪽 키보드 입력시의 이벤트 함수
    // carouselListUi에서 selector움직인것 처럼
  }
  moveSelectorRight(element, contentWidth, contentHeight) {
    // 오른쪽 키보드 ''
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
  }
  moveSelectorUp(element, contentWidth, contentHeight) {
    const layout = document.querySelector(".h-list-grid-layout");
    this.currentIndex -= Number(this.style.container.column);
    if (this.currentIndex < 0) {
      this.currentIndex += Number(this.style.container.column);
      return;
    }
    const heightIndex = Math.floor(this.currentIndex / Number(this.style.container.column));
    const transformSizeX = (contentWidth + 20) * this.widthIndex;
    const transformSizeY = (contentHeight + 20) * heightIndex;
    this.moveSelector(transformSizeX, transformSizeY);
    // 윗 키보드 입력시의 이벤트 함수
    console.log(transformSizeY);
    if (transformSizeY < Number(this.style.container.height)) {
      layout.style.transform = `translateY(${-transformSizeY}px)`;
    }
    // contentHeight + transformY의 값이 container height보다 크다면
    // transformY의 현재 값만큼
    // layout의 transformY값 변경
  }
  moveSelectorDown(element, contentWidth, contentHeight) {
    const layout = document.querySelector(".h-list-grid-layout");
    this.currentIndex += Number(this.style.container.column);
    if (this.currentIndex > this.data.titleArr.length - 1) {
      this.currentIndex -= Number(this.style.container.column);
      return;
    }
    const heightIndex = Math.floor(this.currentIndex / Number(this.style.container.column));
    const transformSizeX = (contentWidth + 20) * this.widthIndex;
    const transformSizeY = (contentHeight + 20) * heightIndex;
    this.moveSelector(transformSizeX, transformSizeY);
    // 아래 키보드 입력시의 이벤트 함수
    console.log(transformSizeY);
    if (Number(contentHeight + transformSizeY) > Number(this.style.container.height)) {
      const height = Number(this.style.container.height) - (contentHeight + transformSizeY);
      layout.style.transform = `translateY(${height}px)`;
    }
    // contentHeight만큼 아래로 맨 아래에서 또 아래로 이동햇을때
    // contentHeight + transformY의 값이 container height보다 크다면
    // conatinerHeight - (contentHeight + transformY)만큼
    // layout의 transformY값 변경
  }
}

export { GridListUi };
