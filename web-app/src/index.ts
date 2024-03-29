// https://academind.com/tutorials/bootstrap-4-tutorial

import "../../bootstrap-5.3.2/bootstrap.min.css";
import "../../ui-kit/style.css";

import {ThingsCentral} from "./things-central";

document.addEventListener("DOMContentLoaded", () => {
  new ThingsCentral().mount(document.getElementById("-ui-kit-root")!);
});
