import { createTitle } from "./components/title.js";
import { createToggleButton } from "./components/toggleButton.js";
import "./components/toggleButton.css";
import "./global.css";

const title = createTitle();
const toggleButton = createToggleButton();

document.body.append(title);
document.body.append(toggleButton);
