import { ReactNode } from "react"
import { useTheme } from "../context/ThemeContext";

export const Container = ({children}: {children: ReactNode}) => {
    const themeCtx = useTheme();

    return(
        <div
            className={`w-full min-h-screen
            ${themeCtx?.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div className="container mx-auto">
                    {children}
                </div>
        </div>
    )
}