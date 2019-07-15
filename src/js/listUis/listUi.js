import _h from "../utils/helper.js";

import { CarouselListUi } from "./carouselListUi.js";

const listUi = {
  createList({ type, domElement, data, style }) {
    switch (type) {
      case "typeA":
        this.makeCarouselUi({ domElement, data, style });
        break;
      case "typeB":
        this.makeGridUi({ domElement, data, style });
        break;
    }
  },
  makeCarouselUi({ domElement, data, style }) {
    const carouselListUi = new CarouselListUi({ domElement, data, style });
    carouselListUi.render();
  },
};

export { listUi };
