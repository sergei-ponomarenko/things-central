import DeviceWidget from "../device/device-widget";
declare class List extends DeviceWidget {
    constructor(tag: string, ...params: any);
}
declare class Ul extends List {
    constructor(...params: any);
}
declare class Ol extends List {
    constructor(...params: any);
}
declare class Li extends DeviceWidget {
    constructor(...params: any);
}
export { Ul, Ol, Li };
