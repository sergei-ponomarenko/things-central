import gsap from "gsap";
import {DeviceRouter, DevicePage} from "web-pecker";
import Store from "./store";
import SignInPage from "./sign-in-page";
import HomePage from "./home-page";
import "./style.css";

const FontFaceObserver = require("fontfaceobserver");

const loadFont = async () => {
  const fontFaceObserver = new FontFaceObserver("PT Sans Narrow");

  return new Promise<void>(resolve => {
    fontFaceObserver.load().then(() => {
      console.log("PT Sans Narrow font loaded");
    }).catch((error: any) => {
      console.log(error);
    }).finally(() => {
      resolve();
    });
  });
};

class ThingsCentral extends DeviceRouter {
  currentDevicePage?: DevicePage;

  constructor() {
    super("h-100 bg-body-tertiary");
    store.startObservingShelf(this, "userName");
  }

  mount(htmlElement: HTMLElement) {
    loadFont().then(() => {
    }).finally(() => {
      super.mount(htmlElement);
    });
  }

  build() {
    if (!store.state.userName) {
      this.currentDevicePage = new SignInPage();
      this.currentDevicePage.setStyleRule("opacity", "0");
      this.add(this.currentDevicePage);
      return;
    }
    this.currentDevicePage = new HomePage();
    this.currentDevicePage.setStyleRule("opacity", "0");
    this.add(this.currentDevicePage);
  }

  didMount() {
    const htmlElement = this.currentDevicePage?.getHTMLElement();
    if (!htmlElement) {
      return;
    }
    gsap.fromTo(
      htmlElement,
      {opacity: 0},
      {opacity: 1, duration: 0.5}
    );
  }

  forceUpdate() {
    if (!this.currentDevicePage) {
      super.forceUpdate();
      return;
    }
    gsap.fromTo(
      this.currentDevicePage!.getHTMLElement()!,
      {opacity: 1},
      {opacity: 0, duration: 0.5, onComplete: () => {
         super.forceUpdate();
      }}
    );
  }
}

const store: any = new Store();

export {
  ThingsCentral,
  store
};
