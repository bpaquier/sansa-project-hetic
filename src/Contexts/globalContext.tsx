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
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Theme from "~/Styles/theme.styles";

interface ContextProps {
  isMobile?: boolean;
  setAppWidth?(width?: number): any;
  isMenuLanguagesOpen?: boolean;
  setMenuLanguagesOpen?: (isOpen?: boolean) => void;
  statusBarHeight?: number;
  searchParams?: object;
  setSearchParams?: (params: object | null) => void;
  setUserConnected?: (connected?: string) => void;
  userConnected?: string;
}

export const Context = createContext<ContextProps>({});

export function useGlobalContext() {
  return useContext(Context);
}

interface GlobalProviderProps {
  children: ReactElement;
}

function GlobalProvider({ children }: GlobalProviderProps) {
  const insets = useSafeAreaInsets();
  const [isMobile, setIsMobile] = useState<boolean>(
    Dimensions?.get("window").width < Theme?.sizes?.breakPoint
  );
  const [userConnected, setUserContextConnected] = useState<
    string | undefined
  >();

  const [isMenuLanguagesOpen, setIsMenuLanguagesOpen] =
    useState<boolean>(false);
  const [statusBarHeight, setStatusBarHeight] = useState<number>(insets?.top);

  const [searchParams, setSearchParams] = useState<object | null>(null);

  useEffect(() => {
    setStatusBarHeight(insets?.top);
  }, [insets?.top]);

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

  const setUserConnected = (connected?: string) => {
    setUserContextConnected(connected);
  };

  const providedValue = {
    isMobile,
    isMenuLanguagesOpen,
    setMenuLanguagesOpen,
    statusBarHeight,
    searchParams,
    setSearchParams,
    userConnected,
    setUserConnected
  };
  return <Context.Provider value={providedValue}>{children}</Context.Provider>;
}

export default GlobalProvider;
