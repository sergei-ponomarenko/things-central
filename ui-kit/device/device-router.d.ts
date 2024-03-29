import DeviceWidget from "./device-widget";
declare class DeviceRouter extends DeviceWidget {
    static instance: DeviceRouter;
    mountedDeviceWidget?: DeviceWidget;
    windowLocationPathname: string;
    windowLocationSearch: string;
    constructor(...params: any);
    mount(htmlElement: HTMLElement): void;
    build(): void;
    handleWindowLocationChange(): void;
    navigateTo(event: any, href: string): void;
    handleResizeEvent(event: any): void;
}
declare class DeviceLink extends DeviceWidget {
    constructor(href: string, ...params: any);
    onClick: (event: any) => void;
}
export { DeviceRouter, DeviceLink };
