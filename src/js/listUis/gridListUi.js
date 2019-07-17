class GridListUi {
  constructor({ domElement, data, style }) {
    Object.assign(this, { domElement, data, style });
    //인덱스 넘버 설정
  }

  render() {
    let resizeId;
    window.addEventListener("resize", function() {
      clearTimeout(resizeId);
      resizeId = setTimeout(doneResizing, 500);
    });

    function doneResizing() {
      //설정한 인덱스 넘버 주어진 content width에 맞게 재설정 (아래로, 위로 눌렀을 때 추가될 index만큼)
    }
  }

  addLayout() {
    // 큰 레이아웃 저장.
  }

  addSelectorEvent(element) {
    // 키보드 입력 이벤트 등록
  }

  addSelector() {
    //selector생성 함수
  }

  addContainerStyle() {
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
