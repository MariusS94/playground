import { createElement } from "../utils/element.js";

export function createToggleButton() {
  const toggleButton = createElement("button", {
    className: "toggle",
    innerHTML: "Toggle Theme",
  });

  const rootStyle = document.documentElement.style;

  let isDark = true;
  toggleButton.addEventListener("click", () => {
    if (isDark) {
      rootStyle.setProperty("--main-bg-color", "#fff");
      rootStyle.setProperty("--main-color", "#000");
    } else {
      rootStyle.setProperty("--main-bg-color", "#000");
      rootStyle.setProperty("--main-color", "#fff");
    }
    isDark = !isDark;
  });
  return toggleButton;
}
