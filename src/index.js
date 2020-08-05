import { createTitle } from "./components/title.js";
import { createToggleButton } from "./components/toggleButton.js";

const title = createTitle();
const toggleButton = createToggleButton();

document.body.append(title);
document.body.append(toggleButton);
