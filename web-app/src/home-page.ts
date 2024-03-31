import {DevicePage, P} from "web-pecker";

class HomePage extends DevicePage {

  constructor() {
    super("h-100 w-100 position-relative d-flex justify-content-center align-items-center");
  }

  build() {
    this.add(new P("HomePage"));
  }
}

export default HomePage;
