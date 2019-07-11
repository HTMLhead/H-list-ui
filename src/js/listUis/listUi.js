import _h from "../utils/helper.js";

import { CarouselListUi } from "./carouselListUi.js";

const listUi = {
  createList({ type, containerEl, data, style }) {
    switch (type) {
      case "typeA":
        this.makeCarouselUi({ containerEl, data, style });
        break;
      case "typeB":
        this.makeGridUi({ containerEl, data, style });
        break;
    }
  },
  makeCarouselUi({ containerEl, data, style }) {
    const carouselListUi = new CarouselListUi({ containerEl, data, style });
    carouselListUi.render();
  },
};

export { listUi };
