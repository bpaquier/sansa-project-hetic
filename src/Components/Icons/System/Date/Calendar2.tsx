import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface CalendarProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Calendar2({
  color = theme?.color?.neutral?.black40,
  width = theme?.sizes?.icon?.system,
  height = theme?.sizes?.icon?.system
}: CalendarProps): JSX.Element {
  return (
    <Svg {...{ width, height }} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1931_24135)">
        <Path
          d="M9.71429 4.13333V5.26667H14.2857V4.13333C14.2857 3.50752 14.7964 3 15.4286 3C16.0607 3 16.5714 3.50752 16.5714 4.13333V5.26667H18.2857C19.2321 5.26667 20 6.02777 20 6.96667V8.66667H4V6.96667C4 6.02777 4.7675 5.26667 5.71429 5.26667H7.42857V4.13333C7.42857 3.50752 7.93929 3 8.57143 3C9.20357 3 9.71429 3.50752 9.71429 4.13333ZM4 9.8H20V19.4333C20 20.3719 19.2321 21.1333 18.2857 21.1333H5.71429C4.7675 21.1333 4 20.3719 4 19.4333V9.8ZM6.28571 13.7667C6.28571 14.0783 6.54143 14.3333 6.85714 14.3333H8C8.31429 14.3333 8.57143 14.0783 8.57143 13.7667V12.6333C8.57143 12.3217 8.31429 12.0667 8 12.0667H6.85714C6.54143 12.0667 6.28571 12.3217 6.28571 12.6333V13.7667ZM10.8571 13.7667C10.8571 14.0783 11.1143 14.3333 11.4286 14.3333H12.5714C12.8857 14.3333 13.1429 14.0783 13.1429 13.7667V12.6333C13.1429 12.3217 12.8857 12.0667 12.5714 12.0667H11.4286C11.1143 12.0667 10.8571 12.3217 10.8571 12.6333V13.7667ZM16 12.0667C15.6857 12.0667 15.4286 12.3217 15.4286 12.6333V13.7667C15.4286 14.0783 15.6857 14.3333 16 14.3333H17.1429C17.4571 14.3333 17.7143 14.0783 17.7143 13.7667V12.6333C17.7143 12.3217 17.4571 12.0667 17.1429 12.0667H16ZM6.28571 18.3C6.28571 18.6117 6.54143 18.8667 6.85714 18.8667H8C8.31429 18.8667 8.57143 18.6117 8.57143 18.3V17.1667C8.57143 16.855 8.31429 16.6 8 16.6H6.85714C6.54143 16.6 6.28571 16.855 6.28571 17.1667V18.3ZM11.4286 16.6C11.1143 16.6 10.8571 16.855 10.8571 17.1667V18.3C10.8571 18.6117 11.1143 18.8667 11.4286 18.8667H12.5714C12.8857 18.8667 13.1429 18.6117 13.1429 18.3V17.1667C13.1429 16.855 12.8857 16.6 12.5714 16.6H11.4286ZM15.4286 18.3C15.4286 18.6117 15.6857 18.8667 16 18.8667H17.1429C17.4571 18.8667 17.7143 18.6117 17.7143 18.3V17.1667C17.7143 16.855 17.4571 16.6 17.1429 16.6H16C15.6857 16.6 15.4286 16.855 15.4286 17.1667V18.3Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1931_24135">
          <Rect
            width="16"
            height="18.1333"
            fill="white"
            transform="translate(4 3)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
