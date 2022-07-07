import Svg, { Path } from "react-native-svg";

export interface CommentProps {
  width?: number;
  height?: number;
}

export default function HomeIllustration({
  width = 71,
  height = 57
}: CommentProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 71 57" fill="none">
      <Path
        opacity="0.3"
        d="M15.9595 18.1796C11.8592 21.1758 9.42499 26.6741 9.81524 32.4138C10.0112 35.3487 11.1137 37.886 13.3257 39.7268C21.6505 46.6572 56.2655 46.7631 60.4007 39.4761C64.536 32.189 57.305 18.8001 43.9507 21.5417C35.5472 23.2692 26.5487 10.4449 15.9595 18.1796Z"
        fill="#D6D6D6"
      />
      <Path
        opacity="0.45"
        d="M35.9077 48.799C52.3382 48.799 65.6577 48.0122 65.6577 47.0418C65.6577 46.0713 52.3382 45.2845 35.9077 45.2845C19.4772 45.2845 6.15771 46.0713 6.15771 47.0418C6.15771 48.0122 19.4772 48.799 35.9077 48.799Z"
        fill="#E6E6E6"
      />
      <Path
        d="M40.1112 16.7326C41.7601 16.7326 43.0967 15.3138 43.0967 13.5637C43.0967 11.8135 41.7601 10.3948 40.1112 10.3948C38.4624 10.3948 37.1257 11.8135 37.1257 13.5637C37.1257 15.3138 38.4624 16.7326 40.1112 16.7326Z"
        fill="#FFD200"
      />
      <Path
        opacity="0.15"
        d="M40.1113 19.6044C43.2543 19.6044 45.8023 16.8999 45.8023 13.5637C45.8023 10.2276 43.2543 7.52307 40.1113 7.52307C36.9682 7.52307 34.4203 10.2276 34.4203 13.5637C34.4203 16.8999 36.9682 19.6044 40.1113 19.6044Z"
        fill="#FFD200"
      />
      <Path
        d="M22.2315 23.951C22.2777 24.3209 22.2777 24.6956 22.2315 25.0655C22.2244 25.1107 22.2087 25.1539 22.1855 25.1925C22.1623 25.2311 22.1319 25.2643 22.0963 25.2902C22.0607 25.316 22.0205 25.334 21.9782 25.3429C21.9358 25.3519 21.8922 25.3517 21.85 25.3423C21.7152 25.3219 21.589 25.2603 21.4867 25.1649C21.3845 25.0696 21.3106 24.9447 21.2742 24.8054L21.0555 24.2278C21.024 24.1066 21.0288 23.978 21.0692 23.8598C21.1097 23.7417 21.1838 23.6398 21.2812 23.5683C21.6277 23.2674 22.2 23.5405 22.2315 23.951Z"
        fill="#F4A28C"
      />
      <Path
        d="M21.0957 24.3243L20.8577 26.5255L22.0109 26.5757L21.7204 24.954L21.0957 24.3243Z"
        fill="#F4A28C"
      />
      <Path
        d="M22.263 24.3763L22.4502 24.629C22.461 24.6432 22.4683 24.6601 22.4713 24.678C22.4743 24.696 22.4729 24.7145 22.4673 24.7318C22.4617 24.7491 22.4521 24.7646 22.4393 24.7768C22.4265 24.789 22.411 24.7976 22.3942 24.8017L22.1527 24.8612L22.263 24.3763Z"
        fill="#F4A28C"
      />
      <Path
        opacity="0.31"
        d="M21.7975 25.307C21.6531 25.2745 21.5206 25.1984 21.416 25.0878C21.4731 25.4027 21.6407 25.6829 21.885 25.8716L21.7975 25.307Z"
        fill="#CE8172"
      />
      <Path
        d="M22.109 23.9788C22.0615 23.996 22.013 24.0096 21.9637 24.0197C21.8951 24.0359 21.8283 24.0596 21.7642 24.0903L21.7117 24.1144C21.6751 24.1315 21.6439 24.1596 21.6222 24.1953C21.6004 24.2309 21.589 24.2726 21.5892 24.3151C21.597 24.3976 21.5885 24.4809 21.5642 24.5598C21.54 24.6386 21.5005 24.7112 21.4483 24.7729C21.396 24.8346 21.3323 24.8841 21.261 24.9181C21.1898 24.9522 21.1126 24.9701 21.0345 24.9708C21.0345 24.9708 20.5357 24.1776 20.9347 23.5665C21.0522 23.3978 21.2037 23.2591 21.378 23.1605C21.5524 23.0618 21.7453 23.0057 21.9427 22.9962C22.0549 22.9961 22.1634 23.0379 22.2494 23.1142C22.3355 23.1906 22.3935 23.2966 22.4133 23.4137C22.4331 23.5308 22.4135 23.6516 22.3578 23.7549C22.3022 23.8582 22.2141 23.9375 22.109 23.9788Z"
        fill="#24285B"
      />
      <Path
        d="M21.5788 24.6903C21.5964 24.6671 21.6078 24.6394 21.6118 24.61C21.6158 24.5806 21.6123 24.5505 21.6015 24.5231C21.5665 24.4321 21.4965 24.3113 21.381 24.3373C21.2655 24.3633 21.2393 24.5584 21.3215 24.6903C21.3361 24.7121 21.3554 24.7299 21.3778 24.7422C21.4001 24.7545 21.425 24.761 21.4502 24.761C21.4754 24.761 21.5002 24.7545 21.5226 24.7422C21.545 24.7299 21.5643 24.7121 21.5788 24.6903V24.6903Z"
        fill="#F4A28C"
      />
      <Path
        d="M58.201 32.1444H40.6958V46.8076H58.201V32.1444Z"
        fill="#FFD200"
      />
      <Path
        d="M25.8558 45.7898C25.8558 45.7898 26.1025 46.2486 26.526 46.2077C26.9495 46.1669 27.1315 46.5792 26.7745 46.765C26.4175 46.9507 25.3745 46.6182 25.3745 46.6182L25.2748 45.8009L25.8558 45.7898Z"
        fill="#55789B"
      />
      <Path
        d="M18.0998 45.7898C18.0998 45.7898 18.3483 46.2486 18.7718 46.2077C19.1953 46.1669 19.3755 46.5792 19.0203 46.765C18.665 46.9507 17.6098 46.6182 17.6098 46.6182L17.51 45.8009L18.0998 45.7898Z"
        fill="#55789B"
      />
      <Path
        opacity="0.08"
        d="M58.201 32.1444H40.6958V46.8076H58.201V32.1444Z"
        fill="black"
      />
      <Path
        d="M44.4705 32.1444H31.5747V46.8076H44.4705V32.1444Z"
        fill="#FFD200"
      />
      <Path
        d="M42.1989 38.9039H38.0234V46.8077H42.1989V38.9039Z"
        fill="#24285B"
      />
      <Path d="M56.0433 36.361H47.1603V41.4468H56.0433V36.361Z" fill="white" />
      <Path
        opacity="0.08"
        d="M56.0433 36.361H47.1603V41.4468H56.0433V36.361Z"
        fill="black"
      />
      <Path d="M35.913 39.0786H33.988V43.6815H35.913V39.0786Z" fill="white" />
      <Path
        d="M22.2963 26.3397L23.4478 26.3917C23.4478 26.3917 27.3065 26.9063 28.6348 25.3051C29.963 23.7039 29.564 20.8972 29.564 20.8972H30.5598C30.5598 20.8972 32.7105 27.8425 26.4543 29.7464C25.9049 29.9171 25.406 30.2346 25.0052 30.6684C24.6045 31.1023 24.3153 31.638 24.1653 32.2244L23.6525 34.1915H17.3385L17.2108 31.0077C17.1927 30.5062 17.0635 30.0162 16.8336 29.5776C16.6037 29.139 16.2797 28.7641 15.8878 28.4833C14.3793 27.4134 12.232 25.0581 13.8263 20.8972H14.955C14.955 20.8972 13.975 26.9546 22.2963 26.3397Z"
        fill="#55789B"
      />
      <Path
        opacity="0.08"
        d="M21.885 27.2499C21.885 27.2499 28.64 29.7056 29.2893 24.0922C29.2893 24.0922 28.7065 27.0753 23.6455 26.4085L22.2963 26.3342L21.885 27.2499Z"
        fill="black"
      />
      <Path
        d="M17.3385 34.1914H23.6525L26.2495 45.9086H25.0788L21.64 37.1876C21.6213 37.1422 21.5887 37.1049 21.5475 37.0817C21.5063 37.0585 21.4589 37.0508 21.4131 37.0599C21.3672 37.0689 21.3256 37.0942 21.295 37.1315C21.2644 37.1689 21.2466 37.2161 21.2445 37.2656L21.206 38.8166C21.0938 40.8213 20.4728 42.7565 19.4088 44.417L18.4533 45.903H17.2283L18.1033 44.1347C19.1358 41.9874 18.945 39.5912 18.266 37.2916L17.3385 34.1914Z"
        fill="#24285B"
      />
      <Path
        d="M25.6248 8.35901H22.4258V14.2343H25.6248V8.35901Z"
        fill="#FFD200"
      />
      <Path
        d="M41.1316 43.4679C41.3751 43.4679 41.5726 43.2584 41.5726 42.9998C41.5726 42.7413 41.3751 42.5317 41.1316 42.5317C40.888 42.5317 40.6906 42.7413 40.6906 42.9998C40.6906 43.2584 40.888 43.4679 41.1316 43.4679Z"
        fill="#55789B"
      />
      <Path
        d="M8.41357 20.1579L14.4686 11.6263L21.3093 20.1579H8.41357Z"
        fill="#24285B"
      />
      <Path
        d="M28.0468 11.6263H14.4685L21.3093 20.1579H21.9935H34.8875L28.0468 11.6263Z"
        fill="#24285B"
      />
      <Path
        opacity="0.19"
        d="M28.0468 11.6263H14.4685L21.3093 20.1579H21.9935H34.8875L28.0468 11.6263Z"
        fill="black"
      />
      <Path
        opacity="0.08"
        d="M14.2549 20.9121C14.2549 20.9121 12.8794 24.9986 16.1537 27.5453C17.8932 28.8957 18.6317 29.8523 18.9414 30.4523C19.3843 31.3257 19.9122 32.1475 20.5164 32.9042L21.5664 34.1915H17.3384L17.2194 31.2343C17.245 30.6919 17.1353 30.152 16.9015 29.669C16.6677 29.186 16.318 28.777 15.8877 28.4833C15.8877 28.4833 11.7699 26.102 13.8262 20.8972L14.2549 20.9121Z"
        fill="black"
      />
      <Path
        d="M20.2471 26.3509C20.2471 26.3509 21.5333 25.0135 22.8581 26.3509C22.8581 26.3509 21.8501 28.448 20.2471 26.3509Z"
        fill="#55789B"
      />
      <Path
        opacity="0.46"
        d="M22.8581 26.3509C22.8581 26.3509 21.8466 28.448 20.2471 26.3509C20.2471 26.3509 21.5333 25.0135 22.8581 26.3509Z"
        fill="white"
      />
      <Path
        d="M14.4686 18.4508C15.236 18.4508 15.8581 17.7905 15.8581 16.976C15.8581 16.1614 15.236 15.5011 14.4686 15.5011C13.7012 15.5011 13.0791 16.1614 13.0791 16.976C13.0791 17.7905 13.7012 18.4508 14.4686 18.4508Z"
        fill="white"
      />
      <Path d="M58.67 31.6021H30.9167V33.285H58.67V31.6021Z" fill="#FFD200" />
      <Path
        opacity="0.46"
        d="M58.67 31.6021H30.9167V33.285H58.67V31.6021Z"
        fill="white"
      />
      <Path
        opacity="0.08"
        d="M58.67 31.6021H44.4705V33.285H58.67V31.6021Z"
        fill="black"
      />
      <Path
        d="M56.2358 24.2983C56.2358 23.9653 56.1112 23.6459 55.8893 23.4104C55.6675 23.1749 55.3666 23.0426 55.0528 23.0426C54.9889 23.0426 54.9251 23.0482 54.8621 23.0593C54.7262 22.7905 54.5244 22.5656 54.2779 22.4086C54.0314 22.2516 53.7495 22.1684 53.4621 22.1677H53.4043C53.4737 21.8715 53.4787 21.5624 53.4188 21.2639C53.3589 20.9654 53.2357 20.6852 53.0586 20.4448C52.8815 20.2043 52.6551 20.0098 52.3966 19.876C52.1381 19.7423 51.8544 19.6727 51.5668 19.6727C51.2792 19.6727 50.9954 19.7423 50.737 19.876C50.4785 20.0098 50.2521 20.2043 50.075 20.4448C49.8979 20.6852 49.7747 20.9654 49.7148 21.2639C49.6549 21.5624 49.6599 21.8715 49.7293 22.1677H49.6715C49.4576 22.1602 49.2445 22.1984 49.0447 22.2801C48.845 22.3618 48.6628 22.4854 48.509 22.6433C48.3552 22.8013 48.2328 22.9905 48.1493 23.1996C48.0658 23.4088 48.0227 23.6337 48.0227 23.8609C48.0227 24.0881 48.0658 24.3129 48.1493 24.5221C48.2328 24.7313 48.3552 24.9204 48.509 25.0784C48.6628 25.2364 48.845 25.3599 49.0447 25.4416C49.2445 25.5233 49.4576 25.5615 49.6715 25.554H55.2068V25.5428C55.4912 25.5028 55.7523 25.3546 55.9415 25.1257C56.1308 24.8968 56.2353 24.6028 56.2358 24.2983V24.2983Z"
        fill="#E6E6E6"
      />
      <Path
        d="M13.2505 35.2744C13.2505 35.022 13.1561 34.7799 12.9881 34.6012C12.8202 34.4226 12.5923 34.322 12.3545 34.3215C12.3064 34.3219 12.2584 34.3263 12.211 34.3345C12.1071 34.1305 11.9532 33.9602 11.7656 33.8415C11.578 33.7228 11.3636 33.6601 11.1452 33.6602H11.1015C11.1556 33.4353 11.1606 33.2002 11.116 32.973C11.0714 32.7457 10.9785 32.5323 10.8444 32.349C10.7103 32.1656 10.5384 32.0173 10.342 31.9152C10.1456 31.8132 9.92978 31.7601 9.7111 31.7601C9.49241 31.7601 9.27662 31.8132 9.0802 31.9152C8.88378 32.0173 8.71194 32.1656 8.57779 32.349C8.44365 32.5323 8.35075 32.7457 8.30619 32.973C8.26164 33.2002 8.26661 33.4353 8.32072 33.6602H8.27697C8.11442 33.6536 7.95228 33.6819 7.80028 33.7434C7.64827 33.8049 7.50952 33.8984 7.39233 34.0181C7.27513 34.1379 7.18191 34.2815 7.11823 34.4404C7.05455 34.5992 7.02173 34.7701 7.02173 34.9428C7.02173 35.1155 7.05455 35.2864 7.11823 35.4453C7.18191 35.6041 7.27513 35.7478 7.39233 35.8675C7.50952 35.9873 7.64827 36.0807 7.80028 36.1422C7.95228 36.2037 8.11442 36.232 8.27697 36.2254H12.477V36.2161C12.6914 36.1851 12.888 36.0726 13.0303 35.8994C13.1725 35.7262 13.2508 35.5041 13.2505 35.2744V35.2744Z"
        fill="#E6E6E6"
      />
      <Path
        d="M15.4066 46.8448C15.4066 46.8448 16.3779 45.3588 14.9271 44.9501C13.4764 44.5415 15.2771 42.5353 13.9261 42.279C12.5751 42.0227 12.8009 44.1365 12.8009 44.1365C12.8009 44.1365 11.8681 43.2839 11.2259 44.0009C10.5836 44.7179 11.4831 45.5037 11.4831 45.5037C11.4831 45.5037 10.1846 45.9792 10.9949 46.8504L15.4066 46.8448Z"
        fill="#E6E6E6"
      />
      <Path
        d="M13.45 47.0417C13.45 47.0417 14.0677 45.9272 14.9777 46.0591C15.8877 46.1909 15.7915 47.0417 15.7915 47.0417H13.45Z"
        fill="#C9C9C9"
      />
      <Path d="M56.5 40.9918H46.7438V41.9206H56.5V40.9918Z" fill="#FFD200" />
      <Path
        opacity="0.46"
        d="M56.5 40.9918H46.7438V41.9206H56.5V40.9918Z"
        fill="white"
      />
      <Path
        opacity="0.08"
        d="M56.5 40.9918H46.7438V41.9206H56.5V40.9918Z"
        fill="black"
      />
      <Path
        d="M13.9976 20.9027L13.7964 20.1578H14.7624V20.9027H13.9976Z"
        fill="#F4A28C"
      />
      <Path
        d="M29.6165 20.9027L29.4153 20.1578H30.3813V20.9027H29.6165Z"
        fill="#F4A28C"
      />
    </Svg>
  );
}
