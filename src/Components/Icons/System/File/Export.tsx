import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ExportProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Export({
  color = theme?.color?.neutral?.black40,
  width = theme?.size?.icon?.system,
  height = theme?.size?.icon?.system
}: ExportProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M15.9824 8.30938C15.9824 8.1125 15.9043 7.92188 15.7637 7.78125L12.7043 4.71875C12.5637 4.57812 12.373 4.5 12.173 4.5H11.9824V8.5H15.9824V8.30938ZM21.8262 14.125L18.8355 11.1125C18.5199 10.7969 17.9793 11.0187 17.9793 11.4656V13.5H15.9793V15.5H17.9793V17.5375C17.9793 17.9844 18.5199 18.2063 18.8355 17.8906L21.8262 14.875C22.0324 14.6688 22.0324 14.3312 21.8262 14.125ZM9.98242 15V14C9.98242 13.725 10.2074 13.5 10.4824 13.5H15.9824V9.5H11.7324C11.3199 9.5 10.9824 9.1625 10.9824 8.75V4.5H4.73242C4.3168 4.5 3.98242 4.83437 3.98242 5.25V19.75C3.98242 20.1656 4.3168 20.5 4.73242 20.5H15.2324C15.648 20.5 15.9824 20.1656 15.9824 19.75V15.5H10.4824C10.2074 15.5 9.98242 15.275 9.98242 15Z" />
    </Svg>
  );
}
