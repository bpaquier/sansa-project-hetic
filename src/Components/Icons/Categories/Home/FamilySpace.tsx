import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface FamilySpaceProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function FamilySpace({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: FamilySpaceProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M3.854 12.16h-.005a.224.224 0 0 0-.22.227l.038 1.786a.223.223 0 0 0 .223.219h.005a.224.224 0 0 0 .219-.228l-.037-1.786a.223.223 0 0 0-.223-.219zM6.162 2.023h-.379c-.707 0-1.283.575-1.283 1.283v1.026c0 .707.576 1.282 1.283 1.282H6.97a.475.475 0 0 0 .475-.474V3.306c0-.708-.575-1.283-1.283-1.283zm.836 3.117a.029.029 0 0 1-.028.028H5.783a.837.837 0 0 1-.836-.836V3.306a.84.84 0 0 1 .836-.837h.38a.84.84 0 0 1 .835.837V5.14zm5.304-3.356a1.1 1.1 0 0 0-.895.455 1.565 1.565 0 0 0-.537-.123c-.111-.015-.699-.07-1.154.352-.41.381-.577 1.018-.496 1.891.04.453.107.857.186 1.108a.555.555 0 0 0 .583.383h.009l.976-.137.01-.001c.047-.009 1.05-.213 1.204-1.728a1.104 1.104 0 0 0 1.215-1.097c0-.609-.493-1.103-1.101-1.103zm-1.396 3.489l-.964.134a.107.107 0 0 1-.11-.073c-.069-.218-.131-.597-.167-1.015-.068-.726.05-1.238.352-1.52.227-.213.518-.247.678-.247a.825.825 0 0 1 .15.01c.047.002.284.016.505.145a.218.218 0 0 0 .052.033c.186.126.348.342.359.71.046 1.574-.78 1.805-.855 1.823zm1.396-1.73a.726.726 0 0 1-.093-.007l-.002-.099c-.013-.449-.188-.756-.418-.96a.657.657 0 1 1 .513 1.066z"
        fill={primaryColor}
      />
      <Path
        d="M8.74 6.736a1.866 1.866 0 0 0-.943-.36c-.6-.07-1.212-.105-1.818-.105h-.016c-.605 0-1.217.036-1.82.106a2.184 2.184 0 0 0-1.925 2.174v5.071c0 .114.085.209.197.222.008.001.06.007.142.007.228 0 .682-.045 1.039-.362.242-.215.393-.511.452-.882h3.426a.223.223 0 0 0 0-.447H4.078l-.002-3.476A.223.223 0 0 0 3.7 8.52l-.005.005-.004.005a.222.222 0 0 0-.061.153v3.55c0 .416-.11.725-.327.92-.202.18-.462.233-.637.247V8.55c0-.885.657-1.629 1.53-1.73a15.381 15.381 0 0 1 1.768-.104h.006c.592 0 1.189.034 1.775.103.294.034.53.123.725.27a.223.223 0 1 0 .27-.354Z"
        fill={secondaryColor}
      />
      <Path
        d="M13.713 8.157a.223.223 0 1 0-.433.11 1.73 1.73 0 0 1 .054.431v.582a.223.223 0 0 0 .447 0v-.582a2.18 2.18 0 0 0-.068-.541zM12.284 6.84a.223.223 0 0 0-.164-.27 2.071 2.071 0 0 0-.265-.047c-.432-.05-.875-.075-1.315-.077h-.055c-.435.002-.874.028-1.307.077A2.181 2.181 0 0 0 7.25 8.698v5.1c0 .123.1.223.224.223a1.39 1.39 0 0 0 .337-.042l-.003.19c0 .122.099.223.222.223h.001a.222.222 0 0 0 .223-.222l.012-.393a1.41 1.41 0 0 0 .615-1.162v-2.14a.223.223 0 0 0 .154-.237L8.88 8.835a.087.087 0 0 0-.002-.01l-.004-.022-.003-.011a.073.073 0 0 0-.004-.01l-.004-.01-.004-.01a.121.121 0 0 0-.017-.029l-.005-.007-.008-.01-.005-.005a.3.3 0 0 0-.01-.011l-.003-.002-.013-.013a.222.222 0 0 0-.165-.047l-.022.003a.19.19 0 0 0-.042.013l-.004.003-.015.007-.006.003a.155.155 0 0 0-.013.008l-.004.004a.256.256 0 0 0-.029.024l-.003.004-.01.012-.003.004a.122.122 0 0 0-.01.014l-.002.003a.13.13 0 0 0-.01.015v.004a.207.207 0 0 0-.008.016l-.002.004-.005.016-.002.006-.003.015a.074.074 0 0 0-.002.01.137.137 0 0 0-.002.012v3.777a.962.962 0 0 1-.738.934V8.698c0-.887.658-1.631 1.53-1.731a11.382 11.382 0 0 1 2.576 0c.072.008.143.02.21.038a.224.224 0 0 0 .27-.164zm.09 2.889c-.123 0-.223.1-.223.223v.755a.223.223 0 0 0 .446 0v-.755c0-.123-.1-.223-.223-.223z"
        fill={primaryColor}
      />
      <Path
        d="M13.524 7.057a1.337 1.337 0 0 0-2.322.253 1.45 1.45 0 0 0-.905.535l-.38.484a.244.244 0 0 0-.012.015L8.862 9.672a1.45 1.45 0 0 0-.265.535 1.454 1.454 0 0 0 .132 1.051.224.224 0 0 0 .39-.218 1.006 1.006 0 0 1 .094-1.092l.695-.885a2.533 2.533 0 0 0 .285.723.223.223 0 0 0 .385-.227 2.12 2.12 0 0 1-.137-.277 1.774 1.774 0 0 1-.135-.726l.342-.436a.997.997 0 0 1 .444-.321 1.34 1.34 0 0 0 1.133 1.378 1.377 1.377 0 0 0 .405.002 1.001 1.001 0 0 1-.27.475l-.912.893a.223.223 0 1 0 .311.32l.912-.894a1.45 1.45 0 0 0 .433-.958 1.338 1.338 0 0 0 .66-.957 1.334 1.334 0 0 0-.24-1.001zm-.2.931a.893.893 0 0 1-1.03.747.9.9 0 1 1 1.029-.748z"
        fill={secondaryColor}
      />
      <Path
        d="M13.558 9.057c-.123 0-.223.1-.223.223v1.917a.47.47 0 0 1-.47.47H8.912a.955.955 0 0 1 .255-.456.952.952 0 0 1 .68-.28h2.527a.223.223 0 0 0 0-.447H9.846a1.39 1.39 0 0 0-.994.412 1.4 1.4 0 0 0-.412.995c0 .123.1.223.223.223h3.822a8.42 8.42 0 0 1 .252 2.056c0 .123.1.223.223.223h.002a.223.223 0 0 0 .222-.225 9.052 9.052 0 0 0-.24-2.058.917.917 0 0 0 .837-.913V9.28c0-.124-.1-.223-.223-.223z"
        fill={primaryColor}
      />
    </Svg>
  );
}
