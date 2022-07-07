import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ToiletsProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Toilets({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: ToiletsProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <G fill={primaryColor}>
        <Path d="M4.197 14.219h-1.72a.223.223 0 0 1-.188-.104.533.533 0 0 1-.066-.44c.084-.296.398-.52.586-.63l-.1-4.817a.223.223 0 1 1 .447-.009l.102 4.953a.223.223 0 0 1-.125.205c-.16.079-.41.255-.472.396h1.313V9.43a.223.223 0 0 1 .447 0v4.566c0 .123-.1.223-.224.223Z" />
        <Path d="M5.918 14.219H4.2a.223.223 0 0 1-.223-.224V9.43a.223.223 0 0 1 .446 0v4.342h1.313c-.061-.14-.311-.317-.472-.396a.224.224 0 0 1-.125-.205L5.24 8.22a.224.224 0 0 1 .447.009l-.1 4.817c.188.11.502.334.586.63a.533.533 0 0 1-.066.44.223.223 0 0 1-.189.104ZM4.723 4.194H4.2a.971.971 0 0 1-.97-.97v-.387a.971.971 0 0 1 1.94 0v.91c0 .247-.2.447-.447.447ZM4.2 2.314a.524.524 0 0 0-.524.523v.387c0 .289.235.523.524.523h.523v-.91a.524.524 0 0 0-.523-.524Z" />
        <Path d="M5.463 8.446a.223.223 0 0 1-.223-.223V6.011a.223.223 0 0 1 .447 0v2.212c0 .124-.1.223-.224.223Zm-2.53 0a.223.223 0 0 1-.223-.223V6.011a.223.223 0 1 1 .446 0l.002 2.212c0 .123-.1.223-.224.223Z" />
        <Path d="M2.155 9.19a.803.803 0 0 1-.093-.004.223.223 0 0 1-.197-.222V5.931c0-.71.529-1.307 1.23-1.389a9.52 9.52 0 0 1 1.098-.064h.005a.223.223 0 0 1 0 .447h-.004c-.348 0-.7.02-1.047.06a.95.95 0 0 0-.836.946v2.797a.5.5 0 0 0 .232-.113c.11-.098.165-.26.165-.482V6.01a.223.223 0 0 1 .447 0v2.123c0 .356-.107.631-.317.818-.235.21-.534.24-.683.24Z" />
        <Path d="M6.242 9.19c-.15 0-.448-.03-.684-.239-.21-.186-.317-.462-.317-.817V6.01a.223.223 0 0 1 .447 0v2.123c0 .22.055.383.165.482a.5.5 0 0 0 .232.112V5.93a.95.95 0 0 0-.836-.945 9.213 9.213 0 0 0-1.051-.061.223.223 0 1 1 0-.447c.367 0 .737.021 1.103.064.701.082 1.23.68 1.23 1.39v3.032a.223.223 0 0 1-.197.222.786.786 0 0 1-.092.004zm1.778 5.086a.223.223 0 0 1-.223-.223V2.09a.223.223 0 0 1 .447 0v11.963c0 .123-.1.223-.223.223z" />
      </G>
      <G fill={secondaryColor}>
        <Path d="m12 4.38-.043-.001-.008-.002-.586-.081-.01-.002c-.035-.006-.844-.17-.806-1.455.02-.67.58-.866.884-.879.09-.01.466-.037.76.235.268.249.377.656.325 1.21a3.5 3.5 0 0 1-.114.681.422.422 0 0 1-.403.295Zm-.566-.525.548.077c.037-.128.07-.337.09-.567.037-.402-.026-.691-.182-.84a.532.532 0 0 0-.406-.121.166.166 0 0 1-.03.002c-.073.003-.449.038-.46.447-.026.849.39.989.44 1.002Zm-1.014 3.93a.223.223 0 0 1-.223-.223V6.116a.223.223 0 0 1 .447 0v1.446c0 .123-.1.223-.223.223Z" />
        <Path d="M9.71 9.242a.223.223 0 0 1-.223-.223v-3a1.4 1.4 0 0 1 1.236-1.394 7.57 7.57 0 0 1 .824-.047c.123 0 .225.1.225.223a.222.222 0 0 1-.222.224 6.94 6.94 0 0 0-.777.044.952.952 0 0 0-.84.95v3c0 .123-.1.223-.222.223zm2.966-1.46a.223.223 0 0 1-.223-.223V6.116a.223.223 0 0 1 .446 0v1.443c0 .123-.1.223-.223.223z" />
        <Path d="M13.386 9.239a.223.223 0 0 1-.223-.223V6.019a.952.952 0 0 0-.84-.95 6.824 6.824 0 0 0-.773-.044.224.224 0 0 1-.225-.224c0-.123.099-.223.222-.223.276 0 .554.016.827.047a1.4 1.4 0 0 1 1.236 1.394v2.997c0 .123-.1.223-.224.223zm-1.839 5.011H10.18a.224.224 0 0 1-.172-.365l.485-.579-.572-3.089a7.986 7.986 0 0 1-.016-.088.223.223 0 1 1 .44-.074l.014.08.592 3.195a.224.224 0 0 1-.051.186c-.002.002-.095.11-.244.288h.667v-3.712a.223.223 0 0 1 .447 0v3.935c0 .123-.1.223-.223.223zm-.977-6.774a.223.223 0 0 1-.22-.195l-.15-1.136a.223.223 0 1 1 .442-.059l.15 1.137a.223.223 0 0 1-.222.253z" />
        <Path d="M12.916 14.25H11.55a.223.223 0 0 1-.223-.223v-3.935a.223.223 0 0 1 .447 0v3.712h.667l-.244-.288a.224.224 0 0 1-.05-.186l.59-3.194.014-.078a.223.223 0 0 1 .44.07 3.12 3.12 0 0 1-.015.09l-.571 3.088.484.58a.223.223 0 0 1-.171.364zm-.39-6.775l-.03-.001a.223.223 0 0 1-.191-.25l.15-1.137a.223.223 0 1 1 .442.058l-.15 1.137a.223.223 0 0 1-.22.193z" />
        <Path d="M13.911 10.316H9.187a.224.224 0 0 1-.2-.322l1.384-2.839a.223.223 0 1 1 .4.196L9.545 9.869h4.01l-1.228-2.518a.223.223 0 0 1 .401-.196l1.385 2.84a.224.224 0 0 1-.2.32Z" />
      </G>
    </Svg>
  );
}
