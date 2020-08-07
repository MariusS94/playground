import { createElement } from "../utils/element.js";

export function createTitle() {
  const title = createElement("h1", { innerHTML: "Playground!" });
  return title;
}
