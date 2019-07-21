class GridListUi {
  constructor({ domElement, data, style }) {
    Object.assign(this, { domElement, data, style });
    //인덱스 넘버 설정
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
    container.innerHTML += this.addContentList();
    container.appendChild(this.addSelector());
    this.addContainerStyle(container);
    this.addSelector();
    // container.appendChild(this.addSelector());
  }

  getResizeMedia() {
    const mediaQueryString = `only screen and (min-device-width: 768px) and (max-device-width: 1024px)`;
    window.matchMedia(mediaQueryString);
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
    // 키보드 입력 이벤트 등록
  }

  addSelector() {
    const selector = document.createElement("div");
    selector.style.width = `${Number(this.style.content.width) + 20}px`;
    selector.style.height = `${Number(this.style.content.height) + 20}px`;
    selector.style.position = `absolute`;
    selector.style.top = `0`;
    selector.style.backgroundColor = `#008000`;
    selector.style.opacity = `0.5`;
    selector.className = "h-list-gird-selector";
    selector.style.transition = `transform 0.1s linear`;
    return selector;
    //selector생성 함수
  }

  addContainerStyle(element) {
    element.style.position = "relative";
    element.style.display = "grid";
    element.style.width = `${this.style.container.width}px`;
    element.style.height = `${this.style.container.height}px`;
    element.style.gridTemplateColumns = `repeat(${this.style.container.column},
      ${Number(this.style.content.width) + 20}px)`;
    // container element에 Grid 속성을 추가 및 반응형 CSS style추가
  }

  moveSelectorLeft(element, contentWidth, containerWidth, wholeWidth) {
    // 왼쪽 키보드 입력시의 이벤트 함수
    // carouselListUi에서 selector움직인것 처럼
  }
  moveSelectorRight(element, contentWidth, containerWidth, wholeWidth) {
    // 오른쪽 키보드 ''
  }
  moveSelectorUp(element, contentWidth, containerWidth, wholeWidth) {
    // 윗 키보드 입력시의 이벤트 함수
    // contentHeight + transformY의 값이 container height보다 크다면
    // transformY의 현재 값만큼
    // layout의 transformY값 변경
  }
  moveSelectorDown(element, contentWidth, containerWidth, wholeWidth) {
    // 아래 키보드 입력시의 이벤트 함수
    // contentHeight만큼 아래로 맨 아래에서 또 아래로 이동햇을때
    // contentHeight + transformY의 값이 container height보다 크다면
    // conatinerHeight - (contentHeight + transformY)만큼
    // layout의 transformY값 변경
  }
}

export { GridListUi };
