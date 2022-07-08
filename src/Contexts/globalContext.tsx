import {
  useContext,
  createContext,
  useState,
  ReactElement,
  useEffect
} from "react";

import Theme from "~/Styles/theme.styles";

interface ContextProps {
  isMobile?: boolean;
  setAppWidth?(width?: number): any;
  isIdle?: boolean;
  setIsIdle?(value?: boolean): any;
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
  const [width, setWidth] = useState<number>(0);
  const [isIdle, setIsIdle] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isMenuLanguagesOpen, setIsMenuLanguagesOpen] =
    useState<boolean>(false);

  useEffect(() => {
    width > Theme?.sizes?.breakPoint ? setIsMobile(false) : setIsMobile(true);
  }, [width]);

  const setAppWidth = (width: number) => {
    setWidth(width);
  };

  const setMenuLanguagesOpen = (isOpen?: boolean) => {
    setIsMenuLanguagesOpen((prevState) =>
      isOpen !== undefined ? isOpen : !prevState
    );
  };

  const providedValue = {
    isMobile,
    isIdle,
    setIsIdle,
    setAppWidth,
    isMenuLanguagesOpen,
    setMenuLanguagesOpen
  };
  return <Context.Provider value={providedValue}>{children}</Context.Provider>;
}

export default GlobalProvider;
