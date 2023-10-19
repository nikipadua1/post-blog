import { useTheme } from "../context/ThemeContext"

export const ThemeSwitch = () => {
    const themeCtx = useTheme();

    const handleThemeToggle = () => {
        if(themeCtx){
            themeCtx.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark')
        }
    }

    return(
        <div 
            className="absolute top-3 right-5 cursor-pointer"
            onClick={handleThemeToggle}
        >
            {themeCtx?.theme === 'dark' && '☀️'}
            {themeCtx?.theme === 'light' && '🌙'}
        </div>
    )
}