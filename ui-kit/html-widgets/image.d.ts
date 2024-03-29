import DeviceWidget from "../device/device-widget";
declare class Img extends DeviceWidget {
    constructor(...params: any);
    setSource(source: string): void;
    setAlt(alt: string): void;
}
export default Img;
