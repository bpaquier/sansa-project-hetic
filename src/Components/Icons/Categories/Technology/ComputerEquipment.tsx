import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ComputerEquipmentProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function ComputerEquipment({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: ComputerEquipmentProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fill={secondaryColor}
        d="M9.817 14.262H6.183a.22.22 0 0 1-.206-.153.245.245 0 0 1 .063-.26l.642-.59.248-1.01a.223.223 0 0 1 .212-.176h1.716c.1 0 .187.072.213.175l.247 1.01.642.591c.07.064.095.168.063.26a.222.222 0 0 1-.206.153Zm-3.043-.47h2.451l-.246-.226a.235.235 0 0 1-.069-.118l-.221-.906H7.31l-.221.906a.237.237 0 0 1-.07.118l-.246.227Z"
      />
      <Path
        fill={primaryColor}
        d="M13.87 12.546H2.13c-.495 0-.897-.43-.897-.958v-8.75c0-.527.402-.957.896-.957H13.87c.495 0 .896.43.896.958v8.75c0 .527-.402.957-.896.957ZM2.13 2.35c-.253 0-.458.22-.458.489v8.75c0 .268.205.488.457.488H13.87c.253 0 .458-.22.458-.489v-8.75c0-.269-.205-.488-.458-.488H2.13Zm11.515 8H2.355c-.121 0-.22-.105-.22-.235V3.08c0-.13.099-.235.22-.235h11.29c.12 0 .22.105.22.235v7.035c0 .13-.1.235-.22.235Zm-11.07-.47h10.85V3.314H2.575v6.567Z"
      />
    </Svg>
  );
}
