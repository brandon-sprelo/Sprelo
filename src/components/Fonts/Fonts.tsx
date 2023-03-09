import { Global } from "@emotion/react";

export default function Fonts() {
  return (
    <Global
      styles={`
        /**
        * This is a variable font
        * You can controll variable axes as shown below:
        * font-variation-settings: 'wght' 900.0;
        *
        * available axes:

        * 'wght' (range from 300.0 to 900.0)

        */

        @font-face {
          font-family: 'Satoshi-Variable';
          src: url('/fonts/satoshi/Satoshi-Variable.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-Variable.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-Variable.ttf') format('truetype');
              font-weight: 300 900;
              font-display: swap;
              font-style: normal;
        }

        /**
        * This is a variable font
        * You can controll variable axes as shown below:
        * font-variation-settings: 'wght' 900.0;
        *
        * available axes:

        * 'wght' (range from 300.0 to 900.0)

        */

        @font-face {
          font-family: 'Satoshi-VariableItalic';
          src: url('/fonts/satoshi/Satoshi-VariableItalic.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-VariableItalic.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-VariableItalic.ttf') format('truetype');
              font-weight: 300 900;
              font-display: swap;
              font-style: italic;
        }

        @font-face {
          font-family: 'Satoshi-Light';
          src: url('/fonts/satoshi/Satoshi-Light.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-Light.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-Light.ttf') format('truetype');
              font-weight: 300;
              font-display: swap;
              font-style: normal;
        }

        @font-face {
          font-family: 'Satoshi-LightItalic';
          src: url('/fonts/satoshi/Satoshi-LightItalic.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-LightItalic.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-LightItalic.ttf') format('truetype');
              font-weight: 300;
              font-display: swap;
              font-style: italic;
        }

        @font-face {
          font-family: 'Satoshi-Regular';
          src: url('/fonts/satoshi/Satoshi-Regular.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-Regular.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-Regular.ttf') format('truetype');
              font-weight: 400;
              font-display: swap;
              font-style: normal;
        }

        @font-face {
          font-family: 'Satoshi-Italic';
          src: url('/fonts/satoshi/Satoshi-Italic.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-Italic.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-Italic.ttf') format('truetype');
              font-weight: 400;
              font-display: swap;
              font-style: italic;
        }


        @font-face {
          font-family: 'Satoshi-Medium';
          src: url('/fonts/satoshi/Satoshi-Medium.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-Medium.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-Medium.ttf') format('truetype');
              font-weight: 500;
              font-display: swap;
              font-style: normal;
        }

        @font-face {
          font-family: 'Satoshi-MediumItalic';
          src: url('/fonts/satoshi/Satoshi-MediumItalic.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-MediumItalic.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-MediumItalic.ttf') format('truetype');
              font-weight: 500;
              font-display: swap;
              font-style: italic;
        }

        @font-face {
          font-family: 'Satoshi-Bold';
          src: url('/fonts/satoshi/Satoshi-Bold.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-Bold.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-Bold.ttf') format('truetype');
              font-weight: 700;
              font-display: swap;
              font-style: normal;
        }

        @font-face {
          font-family: 'Satoshi-BoldItalic';
          src: url('/fonts/satoshi/Satoshi-BoldItalic.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-BoldItalic.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-BoldItalic.ttf') format('truetype');
              font-weight: 700;
              font-display: swap;
              font-style: italic;
        }

        @font-face {
          font-family: 'Satoshi-Black';
          src: url('/fonts/satoshi/Satoshi-Black.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-Black.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-Black.ttf') format('truetype');
              font-weight: 900;
              font-display: swap;
              font-style: normal;
        }

        @font-face {
          font-family: 'Satoshi-BlackItalic';
          src: url('/fonts/satoshi/Satoshi-BlackItalic.woff2') format('woff2'),
              url('/fonts/satoshi/Satoshi-BlackItalic.woff') format('woff'),
              url('/fonts/satoshi/Satoshi-BlackItalic.ttf') format('truetype');
              font-weight: 900;
              font-display: swap;
              font-style: italic;
        }

        /* latin-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCGPrcVIT9d0c-dYA.woff) format('woff');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrcVIT9d0c8.woff) format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        `}
    />
  );
}