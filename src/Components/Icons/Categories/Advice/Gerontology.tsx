import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface GerontologyProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Gerontology({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: GerontologyProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M10.04 8.902a1.68 1.68 0 0 1-.268-.022.267.267 0 0 1-.078-.026l-.2-.101c-.114-.059-.152-.186-.084-.285s.217-.13.331-.072l.161.082c.276.036.476-.029.612-.198a.697.697 0 0 0 .095-.158L8.63 7.115a.22.22 0 0 1-.093-.087L7.466 5.163c-.06-.103-.01-.227.11-.278s.265-.009.323.095l1.04 1.81 2.075 1.055c.084.043.13.126.116.209a1.083 1.083 0 0 1-.218.461c-.203.254-.507.387-.872.387z"
        fill={secondaryColor}
      />
      <G fill={primaryColor}>
        <Path d="M8.183 4.188a.563.563 0 0 1-.195-.035l-.71-.262a1.013 1.013 0 0 1-.581-.513.809.809 0 0 1 .01-.716l.262-.524c.237-.474.88-.694 1.431-.49l.164.06c.552.204.809.755.571 1.23l-.496.993a.466.466 0 0 1-.272.226.569.569 0 0 1-.184.03zm-.714-.678l.71.262h.01l.502-.999c.132-.264-.01-.57-.317-.684l-.164-.06c-.307-.114-.665.009-.797.273l-.262.524a.45.45 0 0 0-.005.398.56.56 0 0 0 .323.286zm5.954 9.677c-.12 0-.224-.077-.24-.183l-.63-4.399h-2.369c-.142 0-.282.02-.416.06a.279.279 0 0 1-.078.01c-.133 0-.242-.093-.242-.207 0-.094.073-.174.173-.2a2.05 2.05 0 0 1 .563-.078h2.582c.123 0 .225.078.24.183l.658 4.58c.016.115-.078.218-.21.232a.307.307 0 0 1-.03.002zm-5.387.745l-.03-.001c-.132-.014-.227-.118-.21-.232l.59-4.114c.045-.313.193-.605.428-.843a.27.27 0 0 1 .34-.025c.103.074.115.206.029.293a1.115 1.115 0 0 0-.317.626l-.59 4.114c-.016.105-.12.182-.24.182z" />
        <Path d="M8.25 14.572H6.1c-.132 0-.24-.092-.241-.206l-.04-3.009-.05-.101c-.052-.106.005-.227.128-.272s.264.004.317.109l.069.14a.183.183 0 0 1 .02.079l.036 2.845h1.73c-.003-.065-.047-.157-.2-.28a2.091 2.091 0 0 0-.436-.256c-.088-.036-.142-.115-.136-.199l.156-2.33-1.22-2.752c-.046-.1.004-.215.118-.262.12-.05.265-.009.323.094v.002a.164.164 0 0 1 .01.017l1.239 2.794a.182.182 0 0 1 .015.085l-.15 2.245c.111.056.27.145.41.258.482.386.37.725.26.893a.248.248 0 0 1-.21.106zm4.753-4.32h-4.44c-.133 0-.242-.093-.242-.207s.109-.208.242-.208h4.44c.134 0 .242.093.242.208s-.108.207-.242.207zm.21 1.465h-4.86c-.133 0-.242-.093-.242-.208s.109-.207.242-.207h4.86c.134 0 .242.093.242.207s-.108.208-.242.208zm.261 2.853c-.566 0-1.026-.404-1.026-.9s.46-.9 1.026-.9 1.026.404 1.026.9-.46.9-1.026.9zm0-1.385c-.3 0-.542.218-.542.485s.243.485.542.485.543-.217.543-.485-.244-.485-.543-.485z" />
        <Path d="M4.695 14.485a.27.27 0 0 1-.112-.024l-1.955-.89a.218.218 0 0 1-.118-.123.182.182 0 0 1 .02-.16l1.67-2.642-.33-3.232c-.012-.114.087-.214.22-.225s.25.075.261.189l.338 3.294a.185.185 0 0 1-.029.117l-1.59 2.514 1.56.71c.078-.219-.196-.609-.29-.719a.184.184 0 0 1-.01-.233l1.472-2.016.418-2.808c.017-.114.138-.194.27-.18s.226.119.21.232l-.425 2.854a.192.192 0 0 1-.035.084l-1.417 1.94c.272.37.513.957.017 1.277a.266.266 0 0 1-.145.041z" />
      </G>
      <G fill={secondaryColor}>
        <Path d="M6.46 8.471a.273.273 0 0 1-.1-.019l-2.345-.865c-.123-.045-.18-.167-.127-.272l1.194-2.388c.16-.32.456-.568.833-.697a1.74 1.74 0 0 1 1.164.013c.559.206.92.678.92 1.2a1.15 1.15 0 0 1-.124.515l-.331.663c-.053.106-.195.154-.318.11s-.179-.168-.126-.273l.331-.664a.777.777 0 0 0 .085-.35c0-.357-.247-.679-.629-.82-.525-.193-1.136.016-1.362.467L4.427 7.29l1.905.702.17-.339c.053-.105.195-.153.317-.108s.18.167.127.272l-.265.53a.244.244 0 0 1-.221.125z" />
        <Path d="M8.946 9.084c-.088 0-.179-.008-.273-.023a.264.264 0 0 1-.079-.026L6.7 8.07a.226.226 0 0 1-.09-.08L4.966 5.35c-.063-.101-.019-.227.099-.28s.264-.017.327.084L7.005 7.74l1.799.918c.193.026.347.002.47-.072a.616.616 0 0 0 .237-.283L7.532 7.297a.22.22 0 0 1-.093-.087L6.367 5.345c-.06-.103-.01-.227.11-.278s.265-.009.324.094l1.04 1.81 2.074 1.056c.084.043.13.125.116.208a1.08 1.08 0 0 1-.475.689 1.16 1.16 0 0 1-.61.16z" />
      </G>
    </Svg>
  );
}
