import { CarouselListUi } from "../src/js/listUis/carouselListUi";

describe("carouselListUi", () => {
  const carouselListUi = new CarouselListUi({
    carouselEl: ".h-list",
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

  test("데이터를 받아 태그로 변환하여 출력이 가능하다", () => {
    const result = carouselListUi.addContentList();

    const correctAnswer = `
      <a href="https://www.nave.com">
        <div class="h-list">
          <img src="https://yt3.ggpht.com/a/AGF-l7-5-hIaLpaYcO4KP1B30jcepRKfwrwli2suxA=s288-mo-c-c0xffffffff-rj-k-no">
          <div class="h-list-title">naver</div>
          <div class="h-list-desc">best Of green</div>
        </div>
      </a>
      <a href="https://codesquad.kr">
        <div class="h-list">
          <img src="https://codesquad.kr/img/company/codesquad2.png">
          <div class="h-list-title">codesquad</div>
          <div class="h-list-desc">title of code academy</div>
        </div>
      </a>
      <a href="https://medium.com">
        <div class="h-list">
          <img src="https://miro.medium.com/max/940/1*3BP9i12zmh99F4fyjUdi3w.png">
          <div class="h-list-title">mrdoo309</div>
          <div class="h-list-desc">dude</div>
        </div>
      </a>`;

    expect(result).toEqual(correctAnswer);
  });

  // test("", () => {
  // }
});
