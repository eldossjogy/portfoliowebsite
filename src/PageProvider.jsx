import { ThemeProvider } from "@mui/system"
import {useTheme} from "next-themes"
import { useEffect, useState } from "react"
import { lightTheme, darkTheme } from "./theme"

function PageProvider({children}){
    const { resolvedTheme }= useTheme()
    const [currentTheme, setCurrentTheme] = useState(darkTheme);

    useEffect(()=>{
        resolvedTheme === "light"
        ? setCurrentTheme(lightTheme)
        : setCurrentTheme(darkTheme)
    }, [resolvedTheme])
    return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}
export default PageProvider