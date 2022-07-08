import React, { ReactElement, useEffect, useRef } from "react";

import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";
import { Dimensions, PanResponder } from "react-native";
import { useNavigate } from "react-router-native";

import { SafeArea, PageContent } from "./styles";
import Navigation from "~/Components/Navigation";
import { useGlobalContext } from "~/Contexts/globalContext";

interface PageProps {
  children: ReactElement;
}

export default function Page({ children }: PageProps) {
  const { height, width } = Dimensions.get("window");
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setAppWidth, isMobile, setIsIdle } = useGlobalContext();
  const navigate = useNavigate();

  const timerId = useRef(false);
  const timeForInactivityInSecond = 10;

  useEffect(() => {
    if (!isMobile) {
      activateKeepAwake();
      resetInactivityTimeout();
    } else {
      deactivateKeepAwake();
      clearTimeout(timerId.current);
    }
  }, [isMobile]);

  useEffect(() => {
    setAppWidth && setAppWidth(width);
  }, [width, setAppWidth]);

  const resetInactivityTimeout = () => {
    setIsIdle(false);
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      setIsIdle(true);
      navigate("/");
    }, timeForInactivityInSecond * 1000);
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        resetInactivityTimeout();
      }
    })
  ).current;

  return (
    <SafeArea
      {...{ height, width }}
      {...(!isMobile ? panResponder.panHandlers : {})}
    >
      <PageContent>{children}</PageContent>
      <Navigation />
    </SafeArea>
  );
}
