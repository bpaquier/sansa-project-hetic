import {
  useContext,
  createContext,
  useState,
  ReactElement,
  useEffect
} from "react";

import * as Device from "expo-device";
import * as ScreenOrientation from "expo-screen-orientation";
import { Dimensions } from "react-native";

import Theme from "~/Styles/theme.styles";

interface ContextProps {
  isMobile?: boolean;
  setAppWidth?(width?: number): any;
  isMenuLanguagesOpen?: boolean;
  setMenuLanguagesOpen?: (isOpen?: boolean) => void;
}

export const Context = createContext<ContextProps>({});

export function useGlobalContext() {
  return useContext(Context);
}

interface GlobalProviderProps {
  children: ReactElement;
}

function GlobalProvider({ children }: GlobalProviderProps) {
  const [isMobile, setIsMobile] = useState<boolean>(
    Dimensions?.get("window").width < Theme?.sizes?.breakPoint
  );

  const [isMenuLanguagesOpen, setIsMenuLanguagesOpen] =
    useState<boolean>(false);

  useEffect(() => {
    Device.getDeviceTypeAsync()
      .then((deviceType) => {
        if (deviceType === Device.DeviceType.PHONE) {
          setIsMobile(true);
          ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
          );
        } else {
          setIsMobile(false);
          ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE
          );
        }
      })
      .catch(console.warn);
  }, []);

  const setMenuLanguagesOpen = (isOpen?: boolean) => {
    setIsMenuLanguagesOpen((prevState) =>
      isOpen !== undefined ? isOpen : !prevState
    );
  };

  const providedValue = {
    isMobile,
    isMenuLanguagesOpen,
    setMenuLanguagesOpen
  };
  return <Context.Provider value={providedValue}>{children}</Context.Provider>;
}

export default GlobalProvider;
