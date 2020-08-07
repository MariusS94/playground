import { createElement } from "../utils/element.js";

export function createCard(props) {
  const author = createElement("p", {
    innerHTML: props.author,
  });
  const quote = createElement("p", {
    innerHTML: props.quote,
  });
  const card = createElement(
    "div",
    {
      className: "card",
    },
    [author, quote]
  );

  return card;
}
