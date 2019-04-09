import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}


import "./scripts/slider_comments";
import "./scripts/form";
import "./scripts/skills";
import "./scripts/slider_my-works";
import "./scripts/parallax";
import "./scripts/skills";
import "./scripts/menu_popup";
/* import "./scripts/navigation_links"; */

