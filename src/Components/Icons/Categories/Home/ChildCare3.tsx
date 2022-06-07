import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ChildCare3Props {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function ChildCare3({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: ChildCare3Props): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M9.96 2.558a.223.223 0 0 0 .182-.352c-.324-.457.01-.753.08-.808a.223.223 0 0 0-.27-.356.99.99 0 0 0-.175 1.422.224.224 0 0 0 .183.094zm1.133 1.437a.223.223 0 1 0-.397.204 1.7 1.7 0 0 1 .072 1.391l-.844 2.171a7.965 7.965 0 0 1-.684.247 6.119 6.119 0 0 1-2.085.286.223.223 0 0 0-.022.446l.27.006c.635 0 1.296-.104 1.968-.311l.334-.112-.26.667a1.7 1.7 0 0 1-2.092 1.002 1.7 1.7 0 0 1-1.136-2.023l.687-2.798.209.282A6.564 6.564 0 0 0 8.769 6.99a.223.223 0 0 0 .24-.378A6.118 6.118 0 0 1 7.464 5.18a7.941 7.941 0 0 1-.417-.594l.038-.158a1.7 1.7 0 0 1 .86-1.097.223.223 0 0 0-.208-.396 2.145 2.145 0 0 0-1.085 1.387l-.06.244-.004.014-.806 3.283a2.148 2.148 0 0 0 2.078 2.655 2.15 2.15 0 0 0 2-1.366l1.323-3.398a2.145 2.145 0 0 0-.091-1.758z"
        fill={secondaryColor}
      />
      <G fill={primaryColor}>
        <Path d="M13.402 6.031a.805.805 0 0 0-.805.804v2.22a.873.873 0 0 0-.092-.033c-.367-.11-.878.02-1.031.201l-1.64 1.857a.223.223 0 0 0-.056.148v1.798h-.521a.223.223 0 0 0-.205.31l.743 1.745a.224.224 0 0 0 .206.136h2.65c.123 0 .223-.1.223-.224V13.25c0-.123-.1-.223-.224-.223h-.318v-.538l1.82-2.122a.224.224 0 0 0 .055-.145V6.835a.806.806 0 0 0-.805-.804zm-.975 7.442v1.297h-2.279l-.553-1.297h2.832zm1.333-3.335l-1.821 2.123a.224.224 0 0 0-.054.145v.62h-1.66v-1.713l1.582-1.792c.079-.054.409-.145.615-.056a.275.275 0 0 1 .161.198l-1.046 1.202a.223.223 0 0 0 .337.293l1.115-1.283.002-.001a.224.224 0 0 0 .02-.029l.003-.004c.006-.01.01-.021.015-.032l.002-.004a.212.212 0 0 0 .01-.035v-.003a.205.205 0 0 0 .003-.038V6.836a.358.358 0 0 1 .716 0v3.303zm-7.017 2.889h-.52v-1.798a.223.223 0 0 0-.056-.148l-1.64-1.857c-.154-.18-.665-.311-1.032-.202a.843.843 0 0 0-.092.034v-2.22a.805.805 0 0 0-1.609 0v3.386a.22.22 0 0 0 .054.145l1.82 2.122v.538H3.35c-.123 0-.223.1-.223.223v1.744c0 .123.1.223.223.223H6c.089 0 .17-.053.205-.136l.744-1.743a.223.223 0 0 0-.206-.311zM2.24 10.139V6.836a.358.358 0 0 1 .716 0v2.893a.21.21 0 0 0 .014.076l.001.004a.19.19 0 0 0 .015.032l.003.004c.006.01.013.02.021.029l.001.001 1.116 1.283a.223.223 0 1 0 .336-.293L3.417 9.662a.273.273 0 0 1 .162-.197c.206-.09.536.002.615.056l1.582 1.792v1.713h-1.66v-.62a.223.223 0 0 0-.055-.146l-1.82-2.121zm3.612 4.632H3.573v-1.298h2.832l-.553 1.297zm4.264-9.945c.51-.14.937-.471 1.2-.932a1.987 1.987 0 0 0-.744-2.707 1.987 1.987 0 0 0-2.896 2.25 1.97 1.97 0 0 0 .932 1.2 1.974 1.974 0 0 0 1.508.19zM8.106 3.32a1.539 1.539 0 1 1 2.968-.813 1.539 1.539 0 0 1-2.967.813zm.811-.851a.554.554 0 0 0-.376.002.224.224 0 0 0 .17.413.19.19 0 0 1 .072.01.201.201 0 0 1 .064.033.223.223 0 0 0 .377-.24.551.551 0 0 0-.307-.218zm1.273.883a.19.19 0 0 1 .072.01.202.202 0 0 1 .064.033.223.223 0 0 0 .377-.24.554.554 0 0 0-.307-.219.554.554 0 0 0-.377.003.224.224 0 0 0 .17.413z" />
      </G>
    </Svg>
  );
}