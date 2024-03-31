import { DeviceWidget } from "../index";
declare class InputText extends DeviceWidget {
    constructor(...params: any);
    getValue(): any;
    setValue(value: string): void;
}
declare class InputPassword extends InputText {
    constructor(...params: any);
}
declare class InputCheckbox extends DeviceWidget {
    constructor(...params: any);
}
export { InputText, InputPassword, InputCheckbox };
