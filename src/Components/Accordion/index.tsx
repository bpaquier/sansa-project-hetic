import React, {
  ReactElement,
  useEffect,
  useState,
  useRef,
  useMemo
} from "react";

import { Animated, Easing, View } from "react-native";

import { AccordionWrapper, Head, TextWrapper, ContentWrapper } from "./styles";
import ArrowDown from "~/Components/Icons/System/Arrows/ArrowDown";
import ArrowUp from "~/Components/Icons/System/Arrows/ArrowUp";
import Text from "~/Components/Ui-kit/Text";

export interface AccordionProps {
  forceOpen?: boolean;
  headText: string;
  content: ReactElement;
  initialState?: "open" | "closed";
}

export default function Accordion({
  forceOpen,
  headText,
  content,
  initialState = "closed"
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
    Animated.timing(heightAnimationValueHolder?.current, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing?.circle
    }).start();
    Animated.timing(rotateAnimationValueHolder?.current, {
      toValue: isOpen ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
      easing: Easing?.linear
    }).start();
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(forceOpen);
  }, [forceOpen]);

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
      <Head onPress={() => setIsOpen((prev) => !prev)} activeOpacity={0.7}>
        <TextWrapper>
          <Text>{headText}</Text>
        </TextWrapper>
        <Animated.View style={[{ transform: [{ rotate: rotateAnimation }] }]}>
          {initialState === "open" ? <ArrowUp /> : <ArrowDown />}
        </Animated.View>
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
