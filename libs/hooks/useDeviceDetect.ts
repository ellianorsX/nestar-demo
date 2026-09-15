import { useEffect, useState } from "react";

type Device = "mobile" | "pc";

const useDeviceDetect = (): Device => {
  const [device, setDevice] = useState<Device>("pc");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateDevice = () => setDevice(mediaQuery.matches ? "mobile" : "pc");

    updateDevice();
    mediaQuery.addEventListener("change", updateDevice);

    return () => mediaQuery.removeEventListener("change", updateDevice);
  }, []);

  return device;
};

export default useDeviceDetect;
