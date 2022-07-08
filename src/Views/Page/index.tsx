import React, { ReactElement, useEffect, useState, useRef } from "react";

import { Dimensions } from "react-native";

import { SafeArea, PageContent } from "./styles";
import Navigation from "~/Components/Navigation";
import { useGlobalContext } from "~/Contexts/globalContext";

import { PanResponder } from "react-native";
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

import { useNavigate } from "react-router-native";

interface PageProps {
  children: ReactElement;
}

export default function Page({ children }: PageProps) {
  const { height, width } = Dimensions.get("window");
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { setAppWidth, isMobile, setIsIdle } = useGlobalContext();
  const navigate = useNavigate();

  const timerId = useRef(false);
  const [timeForInactivityInSecond, setTimeForInactivityInSeconds] = useState(10);

  useEffect(() => {
    if (!isMobile) {
      activateKeepAwake();
      resetInactivityTimeout();
    } else {
      deactivateKeepAwake();
      // @ts-ignore
      clearTimeout(timerId.current);
    }
  }, [isMobile]);

  useEffect(() => {
    setAppWidth && setAppWidth(width);
  }, [width, setAppWidth]);
    
  const resetInactivityTimeout = () => {
    setIsIdle(false);
    // @ts-ignore
    clearTimeout(timerId.current);
    // @ts-ignore
    timerId.current = setTimeout(() => {
      setIsIdle(true);
      navigate("/");
      // action after user has been detected idle
    }, timeForInactivityInSecond * 1000)
  };

  const panResponder = React.useRef(
    PanResponder.create({
      // @ts-ignore
      onStartShouldSetPanResponderCapture: () => {
        // console.log('user starts touch');
        resetInactivityTimeout();
      },
    })
  ).current;

  return (
    <SafeArea {...{ height, width }} {...(!isMobile ? panResponder.panHandlers : {})}>
      <PageContent>{children}</PageContent>
      <Navigation />
    </SafeArea>
  );
}
