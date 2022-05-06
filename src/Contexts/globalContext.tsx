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
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    width > Theme?.sizes?.breakPoint ? setIsMobile(false) : setIsMobile(true);
  }, [width]);

  const setAppWidth = (width: number) => {
    setWidth(width);
  };

  const providedValue = {
    isMobile,
    setAppWidth
  };
  return <Context.Provider value={providedValue}>{children}</Context.Provider>;
}

export default GlobalProvider;
