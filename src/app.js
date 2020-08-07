import { createTitle } from "./components/title.js";
import { createToggleButton } from "./components/toggleButton.js";
import "./components/toggleButton.css";
import "./global.css";

import { createElement } from "./utils/element.js";
import { bbQuote } from "./api/breakingbad.js";
import { createCard } from "./api/card.js";

const title = createTitle();
const toggleButton = createToggleButton();

const fetchButton = createElement("button", {
  innerHTML: "FETCH IT",
});

fetchButton.addEventListener("click", async () => {
  const getBBQuote = await bbQuote();
  const card = await createCard({
    author: getBBQuote[0].author,
    quote: getBBQuote[0].quote,
  });
  document.body.append(card);
  console.log(getBBQuote);
});

document.body.append(title);
document.body.append(toggleButton);
document.body.append(fetchButton);
