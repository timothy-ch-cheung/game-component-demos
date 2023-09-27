import { useMediaQuery, useOrientation } from "@uidotdev/usehooks";

export enum DeviceSize {
  EXTRA_SMALL = 1,
  SMALL,
  MEDIUM,
  LARGE,
}

export function useDeviceSize(): DeviceSize {
  const isExtraSmall = useMediaQuery("only screen and (max-width : 600px)");
  const isSmall = useMediaQuery("only screen and (max-width : 900px)");
  const isMedium = useMediaQuery("only screen and (max-width : 1200px)");

  if (isExtraSmall) {
    return DeviceSize.EXTRA_SMALL;
  } else if (isSmall) {
    return DeviceSize.SMALL;
  } else if (isMedium) {
    return DeviceSize.MEDIUM;
  }
  return DeviceSize.LARGE;
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
