# H-list-ui

## Getting Started

<head> tag안에 아래의 jsDelivr CDN을 통해서 만들어진 코드를 추가해서 사용해주세요.

```html
<script src="https://cdn.jsdelivr.net/gh/HTMLhead/H-list-ui/dist/listUi.min.js"></script>
```

혹은 [다운로드]()받아서 '/{압축해제한 폴더}/dist/listUi.min.js'를 script태그로 받아사용해 주세요.

```html
<script src="{folder}/dist/listUi.min.js"></script>
```

list-ui를 넣고싶은 곳에 HTML Tag를 한 줄 추가 합니다.

```html
<div id="h-list"></div>
```

이 후 자바스크립트 파일에 아래와 같이 사용합니다.
-require옵션이 붙은 객체는 필수로 작성 해야하는 option입니다.

### Type-A

```javascript
listUi.createList({
  type: "typeA", //typeA - carousel-list-UI를 뜻합니다. -require
  domElement: "#h-list", // 아까 작성한 html의 id값
  data: {
    // -require
    titleArr: titleArray, // 넣고싶은 title들을 모아놓은 배열
    descriptionArr: descArray, // 넣고싶은 description을 모아놓은 배열
    linkArr: linkArray, // 넣고싶은 link를 모아놓은 배열
    thumbnailArr: thumbnailArray, // 넣고싶은 thumbnail을 모아놓은 배열
    // 배열의 길이는 모두 같아야 합니다.
  },
  style: {
    // -require
    container: {
      // -require
      width: "500", //container의 가로길이를 px단위로 설정할 수 있습니다.
      height: "200", //container의 높이를 px단위로 설정할 수 있습니다.
    },
    content: {
      // -require
      width: "150", //content의 가로길이를 px단위로 설정할 수 있습니다.
      height: "200", // content의 높이를 px단위로 설정할 수 있습니다.
    },
    title: {
      // -require
      fontSize: "0.8rem", //title의 fontSize를 설정할 수 있습니다.
      bold: true, // title에 bold옵션을 줄 수 있습니다.
    },
    description: {
      // -require
      fontSize: "0.3rem", // description의 fontSize를 설정할 수 있습니다.
    },
    border: {
      size: "1", //border의 사이즈를 변경할 수 있습니다.
      color: "#000", //border의 색상을 변경할 수 있습니다.
    },
    selector: {
      // -require
      color: "#008000", // selector의 색상을 정해줄 수 있습니다.
      opacity: "0.3", // selector의 opacity를 결정할 수 있습니다.
    },
  },
});
```

###Type-B

```javascript
listUi.createList({
  type: "typeB", // typeB - grid-list-ui를 뜻합니다. -require
  domElement: "#h-list-grid", // html파일에 작성한 grid-list-ui를 넣고싶은 곳의 id를 입력합니다.
  data: {
    // -require
    titleArr: titleArray, // 넣고싶은 title들을 모아놓은 배열
    descriptionArr: descArray, // 넣고싶은 description을 모아놓은 배열
    linkArr: linkArray, // 넣고싶은 link를 모아놓은 배열
    thumbnailArr: thumbnailArray, // 넣고싶은 thumbnail을 모아놓은 배열
    // 배열의 길이는 모두 같아야 합니다.
  },
  style: {
    container: {
      width: "auto", // container의 가로길이를 px단위로 설정할 수 있습니다. auto로 작성하면 자동적으로 column값을 반영하여 설정됩니다.
      height: "500", // container의 높이를 px단위로 설정할 수 있습니다.
      column: "5", // container가 가질 column값을 의미합니다.
    },
    content: {
      // -require
      width: "150", // content의 가로길이를 px단위로 설정할 수 있습니다.
      height: "200", // content의 높이를 px단위로 설정할 수 있습니다.
    },
    title: {
      // -require
      fontSize: "0.8rem", //title의 fontSize를 설정할 수 있습니다.
      bold: true, //title의 bold옵션을 설정할 수 있습니다.
    },
    description: {
      // -require
      fontSize: "0.3rem", // description의 fontSize를 설정할 수 있습니다.
    },
    border: {
      size: "1", //border의 사이즈를 변경할 수 있습니다.
      color: "#000", //border의 색상을 변경할 수 있습니다.
    },
    selector: {
      // -require
      color: "#008000", // selector의 색상을 정해줄 수 있습니다.
      opacity: "0.3", // selector의 opacity를 결정할 수 있습니다.
    },
  },
});
```

데모페이지 : https://htmlhead.github.io/H-list-ui/
