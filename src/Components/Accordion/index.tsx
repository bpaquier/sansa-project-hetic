import React, {
  ReactElement,
  useEffect,
  useState,
  useRef,
  useMemo,
  ReactNode
} from "react";

import { Animated, Easing, View } from "react-native";

import { AccordionWrapper, Head, HeadContent, ContentWrapper } from "./styles";
import ArrowDown from "~/Components/Icons/System/Arrows/ArrowDown";
import ArrowUp from "~/Components/Icons/System/Arrows/ArrowUp";

export interface AccordionProps {
  forceOpen?: boolean;
  content: ReactElement;
  initialState?: "open" | "closed";
  freeze?: boolean;
  headContent?: ReactNode | ReactNode[];
  getStatus?: (status: "open" | "closed") => void;
}

export default function Accordion({
  forceOpen,
  headContent,
  content,
  initialState = "closed",
  freeze = false,
  getStatus
}: AccordionProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(
    initialState === "open" ? true : false
  );
  const [contentHeight, setContentHeight] = useState<number>();
  const heightAnimationValueHolder = useRef(
    new Animated.Value(initialState === "open" ? 1 : 0)
  );
  const rotateAnimationValueHolder = useRef(
    new Animated.Value(initialState === "open" ? 1 : 0)
  );

  useEffect(() => {
    isOpen && open();
    !isOpen && close();
    getStatus && getStatus(isOpen ? "open" : "closed");
  }, [isOpen, getStatus]);

  useEffect(() => {
    setIsOpen(forceOpen);
  }, [forceOpen]);

  const open = () => {
    Animated.timing(heightAnimationValueHolder?.current, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
      easing: Easing?.linear
    }).start();
    Animated.timing(rotateAnimationValueHolder?.current, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
      easing: Easing?.linear
    }).start();
  };

  const close = () => {
    Animated.timing(heightAnimationValueHolder?.current, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing?.linear
    }).start();
    Animated.timing(rotateAnimationValueHolder?.current, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing?.linear
    }).start();
  };

  const heightAnimation = useMemo(
    () =>
      heightAnimationValueHolder.current.interpolate({
        inputRange: [0, 1],
        outputRange:
          initialState === "open" ? [contentHeight, 0] : [0, contentHeight]
      }),
    [contentHeight, initialState]
  );

  const rotateAnimation = heightAnimationValueHolder.current.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"]
  });

  return (
    <AccordionWrapper>
      <Head
        onPress={() => !freeze && setIsOpen((prev) => !prev)}
        activeOpacity={0.7}
      >
        <HeadContent>{headContent}</HeadContent>
        {!freeze && (
          <Animated.View style={[{ transform: [{ rotate: rotateAnimation }] }]}>
            {initialState === "open" ? <ArrowUp /> : <ArrowDown />}
          </Animated.View>
        )}
      </Head>
      <Animated.View
        style={[
          {
            height: !isNaN(contentHeight)
              ? heightAnimation
              : initialState === "open"
              ? "auto"
              : 1,
            ...(initialState === "closed" && {
              opacity: !isNaN(contentHeight) ? 1 : 0
            })
          }
        ]}
      >
        <View
          onLayout={(e) => {
            const { height } = e.nativeEvent.layout;
            !contentHeight && setContentHeight(height);
          }}
        >
          <ContentWrapper>{content}</ContentWrapper>
        </View>
      </Animated.View>
    </AccordionWrapper>
  );
}
