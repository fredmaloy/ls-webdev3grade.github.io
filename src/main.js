import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/slider_comments";
import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/skills";
import "./scripts/menu_popup";
