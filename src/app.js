import { createTitle } from "./components/title.js";
import { createToggleButton } from "./components/toggleButton.js";
import "./components/toggleButton.css";
import "./global.css";
import img from "../src/assets/lap.jpg";

const title = createTitle();
const toggleButton = createToggleButton();

document.body.append(title);
document.body.append(toggleButton);
