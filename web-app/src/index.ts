import "bootstrap/dist/css/bootstrap.min.css";
import "../../web-pecker/style.css";

import {ThingsCentral} from "./things-central";

document.addEventListener("DOMContentLoaded", () => {
  new ThingsCentral().mount(document.getElementById("web-pecker-router")!);
});
