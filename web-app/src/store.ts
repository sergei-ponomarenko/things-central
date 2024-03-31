import {DeviceStore} from "web-pecker";

class Store extends DeviceStore {

  constructor() {
    super();
    this.setState({
      userName: undefined
    });
  }

  signIn(userName: string, password: string) {
    setTimeout(() => {
      const state = this.cloneState();
      state.userName = userName;
      this.setState(state);
    }, 500);
  }
}

export default Store;
