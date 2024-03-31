import {DevicePage, Div, SpinnerBorder} from "web-pecker";
import SignInForm1 from "./sign-in-form1";
import gsap from "gsap";

class SignInPage extends DevicePage {

  constructor() {
    super("h-100 w-100 position-relative d-flex justify-content-center align-items-center");
  }

  build() {
    const loginForm = new SignInForm1((event) => this.doSignIn(event));
    this.add(loginForm);
  }

  doSignIn(event: any) {
  }
}

export default SignInPage;
