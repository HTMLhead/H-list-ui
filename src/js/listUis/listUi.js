import _h from "../utils/helper.js";

import { CarouselListUi } from "./carouselListUi.js";
import { GridListUi } from "./gridListUi.js";
const listUi = {
  createList({ type, domElement, data, style }) {
    switch (type) {
      case "typeA":
        this.makeCarouselUi({ domElement, data, style });
        break;
      case "typeB":
        this.makeGridListUi({ domElement, data, style });
        break;
    }
  },
  makeCarouselUi({ domElement, data, style }) {
    const carouselListUi = new CarouselListUi({ domElement, data, style });
    carouselListUi.render();
  },

  makeGridListUi({ domElement, data, style }) {
    const gridListUi = new GridListUi({ domElement, data, style });
    gridListUi.render();
  },
};

export { listUi };
