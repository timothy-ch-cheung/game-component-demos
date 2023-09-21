import { useMediaQuery, useOrientation } from "@uidotdev/usehooks";

export enum DeviceType {
  MOBILE = 1,
  TABLET,
  DESKTOP,
}

export function useDeviceType(): DeviceType {
  const isMobile = useMediaQuery("only screen and (max-width : 900px)");
  const isTablet = useMediaQuery("only screen and (max-width : 1200px)");

  if (isMobile) {
    return DeviceType.MOBILE;
  } else if (isTablet) {
    return DeviceType.TABLET;
  }
  return DeviceType.DESKTOP;
}

export enum DeviceOrientation {
  LANDSCAPE = 1,
  PORTRAIT,
}

export function useDeviceOrientation(): DeviceOrientation {
  const orientation = useOrientation();

  if (
    orientation.type === "portrait-primary" ||
    orientation.type === "portrait-secondary"
  ) {
    return DeviceOrientation.PORTRAIT;
  }

  return DeviceOrientation.LANDSCAPE;
}
