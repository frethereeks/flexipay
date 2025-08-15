import type { ThemeConfig } from "antd"

export const THEME_COLOR = {
    primary: '#34c8ea',
    warning: '#faad14',
    secondary: '#f58a3d',
    backdrop: '#f7faff',
    text: '#718090',
    dark: '#0d487e',
    // backdrop: '#f7f2f4',
    // text: '#64748b',
}

export const theme: ThemeConfig = {
    cssVar: true,
    token: {
        colorPrimary: THEME_COLOR.primary,
        colorLinkHover: "#fff",
        fontFamily: 'helvetica',
        colorLink: "#fff",
        fontSize: 16
    },
    components: {
        Layout: {
            bodyBg: THEME_COLOR.backdrop,
            siderBg: THEME_COLOR.text,
            headerBg: THEME_COLOR.backdrop,
            screenXS: 200,
            fontSize: 12,
        },
        Table: {
            headerColor: THEME_COLOR.text,
            rowHoverBg: THEME_COLOR.backdrop,
            rowSelectedBg: THEME_COLOR.backdrop,
            rowSelectedHoverBg: THEME_COLOR.backdrop,
            fontFamily: "arial",
            fontSize: 14,
            cellPaddingInline: 15,
            cellPaddingBlock: 0,
            paddingContentHorizontal: 10,
            padding: 0
        },
        Form: {
            labelFontSize: 13,
            verticalLabelMargin: "-6px 0",
            colorError: THEME_COLOR.secondary,
        },
        Button: {
            primaryColor: THEME_COLOR.backdrop,
            colorPrimaryBg: THEME_COLOR.primary
        },
        Input: {
            colorTextLabel: THEME_COLOR.primary,
            paddingContentVertical: 0,
            colorBgContainer: "transparent",
            // hoverBorderColor: THEME_COLOR.primary,
            // colorBorder: THEME_COLOR.text,
            colorFill: THEME_COLOR.text,
            controlOutlineWidth: 0,
            borderRadius: 2,
            colorError: THEME_COLOR.secondary,
            colorErrorActive: THEME_COLOR.secondary,
            colorErrorTextActive: THEME_COLOR.dark,
            colorBgBase: THEME_COLOR.backdrop
        },
    }
}