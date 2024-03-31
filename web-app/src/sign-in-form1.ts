// https://preview.colorlib.com/theme/bootstrap/login-form-15/

import {
  BtnLink,
  BtnPrimary, BtnSecondary,
  ContainerFluid, DeviceLink,
  Div,
  Form, FormCheck, FormCheckInput, FormGroup,
  Img,
  InputPassword,
  InputText,
  Label,
  Row, Small,
  Span, SpinnerBorder
} from "web-pecker";
import "./sign-in-form-1.css";
import {store} from "./things-central";

class SignInForm1 extends ContainerFluid {
  doSignIn: Function;
  form?: Form;
  userName?: InputText;
  userNameFeedback?: Small;
  password?: InputPassword;
  passwordFeedback?: Small;
  loadingPanel?: Div;

  constructor(doSignIn: Function) {
    super();
    this.doSignIn = doSignIn;
  }

  build() {
    let row = new Row("justify-content-center", this);
    let div0 = new Div("col-md-7 col-lg-6 col-xl-5", row);
    let wrap = new Div("w-100 position-relative rounded border border-1 overflow-hidden bg-body overflow-hidden", div0);

    // login form header img

    this.form = new Form(wrap);

    const img = new Img("w-100", this.form);
    img.setSource("images/login-page-header.jpg"); // otherwise will be border around image
    img.setStyle({
      height: "156px",
      objectFit: "cover",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundImage: "url(images/login-page-header.jpg)"
    });

    let formGroup = new FormGroup("px-4 position-relative d-flex flex-row justify-content-between mt-3 d-flex", this.form);
    div0 = new Div("w-100", formGroup);
    new Span("Sign In", div0).setStyle({
      fontSize: "2.5rem"
    });

    div0 = new Div("w-100", formGroup);
    let div1 = new Div("h-100 d-flex justify-content-end align-items-center", div0);

    let btn = new BtnSecondary(undefined, "form-control rounded-circle", div1).setStyle({
      width: "3rem",
      height: "3rem"
    });
    new Span(undefined, "fa fa-facebook", btn);

    btn = new BtnSecondary(undefined, "form-control ms-2 rounded-circle", div1).setStyle({
      width: "3rem",
      height: "3rem"
    });
    new Span(undefined, "fa fa-twitter", btn);

    // user name

    formGroup = new FormGroup("mt-3 px-4", this.form);
    new Label("Username", "form-label text-muted", formGroup).setProp("for", "user-name");
    this.userName = new InputText("form-control", formGroup).setProp("name", "user-name").setProp("id", "user-name");
    div0 = new Div("text-start", formGroup);
    this.userNameFeedback = new Small("field required", "text-danger", div0).setStyleRule("opacity", "0.5");
    this.userName.props.onInput = () => {
      this.userName!.removeClassName("is-invalid");
      if (!this.userName!.getValue()) {
        this.userNameFeedback!.setStyleRule("visibility", "visible");
      } else {
        this.userNameFeedback!.setStyleRule("visibility", "hidden");
      }
    };

    // password

    formGroup = new FormGroup("mt-3 px-4", this.form);
    new Label("Password", "form-label text-muted", formGroup).setProp("for", "password");
    this.password = new InputPassword("form-control", formGroup).setProp("name", "password").setProp("id", "password");
    this.passwordFeedback = new Small("field required", "text-danger", formGroup).setStyleRule("opacity", "0.5");
    this.password.props.onInput = () => {
      this.password!.removeClassName("is-invalid");
      if (!this.password!.getValue()) {
        this.passwordFeedback!.setStyleRule("visibility", "visible");
      } else {
        this.passwordFeedback!.setStyleRule("visibility", "hidden");
      }
    };

    // remember me / forgot password

    formGroup = new FormGroup("mt-3 px-4 d-flex align-items-center justify-content-between", this.form);
    const formCheck = new FormCheck(formGroup);
    new FormCheckInput(formCheck).setProp("id", "remember-me").setProp("name", "remember-me");
    new Label("Remember Me", "form-check-label", formCheck).setProp("for", "remember-me");

    div1 = new Div(formGroup);
    // margin bottom used to align link to checkbox
    let btnLink = new BtnLink("#", "ForgotPassword", "form-control", div1).setStyleRule("margin-bottom", ".125rem");

    // submit

    formGroup = new FormGroup("mt-2 px-4 ", this.form);
    new BtnPrimary("Sign in", "form-control", formGroup).setProp("type", "submit");

    // sign up

    formGroup = new FormGroup("my-3 px-4", this.form);
    new BtnLink("#signup", "Not a member? Sign Up", "form-control", formGroup);

    this.loadingPanel = new Div(this).setStyle({
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "transparent",
      display: "none",
      justifyContent: "center",
      alignItems: "center"
    });
    // make it accept focus
    this.loadingPanel.setProp("tabindex", "0");
    new SpinnerBorder("text-primary", this.loadingPanel).setStyle({
      width: "3rem",
      height: "3rem"
    });

    this.form.props.onSubmit = (event: any) => {
      this.handleSubmit(event);
    };
  }

  handleSubmit(event: any) {
    // prevent sending form as form
    event.preventDefault();

    let errorsNumber = 0;
    let value = this.userName!.getValue();
    if (!value) {
      errorsNumber++;
      this.userName!.addClassName("is-invalid");
      this.userNameFeedback!.setInnerText("field required");
      this.userNameFeedback!.setStyleRule("visibility", "visible");
      this.userName!.setFocus();
    }
    value = this.password!.getValue();
    if (!value) {
      errorsNumber++;
      this.password!.addClassName("is-invalid");
      this.passwordFeedback!.setInnerText("field required");
      this.passwordFeedback!.setStyleRule("visibility", "visible");
      if (errorsNumber === 1) {
        this.password!.setFocus();
      }
    }
    if (errorsNumber) {
      return;
    }
    this.form!.setStyleRule("opacity", "0.25");
    this.loadingPanel!.setStyleRule("display", "flex");
    // transfer focus from submit button
    this.loadingPanel!.getHTMLElement()!.focus();
    store.signIn(this.userName!.getValue(), this.password!.getValue())
  }
}

export default SignInForm1;
