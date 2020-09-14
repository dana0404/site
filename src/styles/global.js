import css from "@emotion/css";
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

const globalStyles = css`
    html,
    body,
    #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    --gray0: #f8f8f8;
    --gray1: #dbe1e8;
    --gray2: #b2becd;
    --gray3: #6c7983;
    --gray4: #454e56;
    --gray5: #2a2e35;
    --gray6: #12181b;
    --blue: #0084a5;
    --purple: #a82dd1;
    --yellow: #fff565;
}

.light {
    --bg: var(--gray0);
    --bg-nav: linear-gradient(to right, var(--gray1), var(--gray3));
    --bg-dropdown: var(--gray0);
    --text: var(--gray6);
    --border-color: var(--blue);
    --bg-solar: var(--yellow);
}
  

.dark {
    --bg: var(--gray5);
    --bg-nav: linear-gradient(to right, var(--gray5), var(--gray6));
    --bg-dropdown: var(--gray6);
    --text: var(--gray0);
    --border-color: var(--purple);
    --bg-solar: var(--blue);
    }

    body {
        width: 100%;
        margin: 0 auto;
        font-size: 16px;
        line-height: 1.5;
        color: ${colors.grey900};
        -webkit-font-smoothing: antialiased;

        @media(max-width: ${dimensions.maxwidthMobile}px) {
            font-size: 14px;
        }


        * {
            box-sizing: border-box;

            &::selection {
                background: ${colors.orange500};
                color: white;
            }
        }
    }

    /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
    #___gatsby,
    div[role="group"][tabindex] {
        height: 100%;
        min-height: 100% !important;
    }
`

export default globalStyles;