import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        color:inherit;
        vertical-align: baseline;
    }

    *, :after, :before {
        box-sizing:border-box;
        flex-shrink:0;
    }

    :root {
        -webkit-tap-highlight-color:transparent;
        -webkit-text-size-adjust:100%;
        text-size-adjust:100%;
        cursor:default;
        line-height:1.5;
        overflow-wrap:break-word;
        -moz-tab-size:4;
        tab-size:4
    }

    html, body {
        height:100%;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    img, picture, video, canvas, svg {
        display: block;
        max-width:100%;
    }
    button {
        background:none;
        border:0;
        cursor:pointer;
    }
    a {
        text-decoration:none;
    }

    /* input 기본 스타일 초기화 */
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
                appearance: none;
                outline: none;
    }

`;
