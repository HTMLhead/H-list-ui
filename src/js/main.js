import { listUi } from "./listUis/listUi.js";

// [
//   "https://yt3.ggpht.com/a/AGF-l7-5-hIaLpaYcO4KP1B30jcepRKfwrwli2suxA=s288-mo-c-c0xffffffff-rj-k-no",
//   "https://codesquad.kr/img/company/codesquad2.png",
//   "https://miro.medium.com/max/940/1*3BP9i12zmh99F4fyjUdi3w.png",
// ]

const titleArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
const thumbnailArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
const linkArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
const descArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

document.addEventListener("DOMContentLoaded", () => {
  listUi.createList({
    type: "typeA",
    domElement: ".h-list-container",
    data: {
      titleArr: titleArray,
      descriptionArr: descArray,
      linkArr: linkArray,
      thumbnailArr: thumbnailArray,
    },
    style: {
      container: {
        width: "800",
        height: "300",
      },
      content: {
        width: "200",
        height: "300",
      },
    },
  });
  listUi.createList({
    type: "typeB",
    domElement: ".h-list-grid-container",
  });
});
