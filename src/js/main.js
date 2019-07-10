import { CarouselListUi } from "./listUis/carouselListUi.js";

document.addEventListener("DOMContentLoaded", () => {
  const carouselListUi = new CarouselListUi({
    targetElement: "h-list",
    content: [
      {
        link: "https://www.naver.com",
        title: "네이버",
        description: "초록색의 대표",
        thumbnail: "https://sungmoon.files.wordpress.com/2013/04/naver.jpg",
      },
    ],
    style: {
      width: "850px",
      height: "100px",
      transition: true,
    },
  });
});
