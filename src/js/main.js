import { listUi } from "./listUis/listUi.js";

document.addEventListener("DOMContentLoaded", () => {
  listUi.createList({
    type: "typeA",
    containerEl: ".h-list",
    data: {
      title: ["naver", "codesquad", "mrdoo309"],
      description: ["best Of green", "title of code academy", "dude"],
      link: ["https://www.nave.com", "https://codesquad.kr", "https://medium.com"],
      thumbnail: [
        "https://yt3.ggpht.com/a/AGF-l7-5-hIaLpaYcO4KP1B30jcepRKfwrwli2suxA=s288-mo-c-c0xffffffff-rj-k-no",
        "https://codesquad.kr/img/company/codesquad2.png",
        "https://miro.medium.com/max/940/1*3BP9i12zmh99F4fyjUdi3w.png",
      ],
    },
    style: {
      width: "600",
      height: "200",
    },
  });
});
