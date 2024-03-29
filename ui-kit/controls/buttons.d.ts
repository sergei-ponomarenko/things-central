import DeviceWidget from "../device/device-widget";
declare class Btn extends DeviceWidget {
    constructor(type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link", innerText: string | undefined, ...params: any);
}
declare class BtnPrimary extends Btn {
    constructor(text: string | undefined, ...params: any);
}
declare class BtnSecondary extends Btn {
    constructor(text: string | undefined, ...params: any);
}
declare class BtnSuccess extends Btn {
    constructor(text: string | undefined, ...params: any);
}
declare class BtnDanger extends Btn {
    constructor(text: string | undefined, ...params: any);
}
declare class BtnWarning extends Btn {
    constructor(text: string | undefined, ...params: any);
}
declare class BtnInfo extends Btn {
    constructor(text: string | undefined, ...params: any);
}
declare class BtnLight extends Btn {
    constructor(text: string | undefined, ...params: any);
}
declare class BtnDark extends Btn {
    constructor(text: string, ...params: any);
}
declare class BtnLink extends Btn {
    constructor(href: string | undefined, innerText: string, ...params: any);
}
export { BtnPrimary, BtnSecondary, BtnSuccess, BtnDanger, BtnWarning, BtnInfo, BtnLight, BtnDark, BtnLink, };
