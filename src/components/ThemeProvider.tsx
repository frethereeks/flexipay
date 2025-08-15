import { useEffect } from "react";
import { ConfigProvider } from "antd";
import { theme } from "../utils/theme";
import Aos from 'aos'
import "aos/dist/aos.css"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        Aos.init({
            delay: 500,
            duration: 1000,
            once: true
        })
    }, [])
    return <ConfigProvider theme={theme}>{children}</ConfigProvider>
}