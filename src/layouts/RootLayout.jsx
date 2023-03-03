import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import useLocalStorage from "use-local-storage";

export default function RootLayout () {
    const [ theme, setTheme ] = useLocalStorage( 'theme' ? 'dark' : 'light' )

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme( newTheme )
    }

    return (
        <>
            <div className="purple-bg" >
                <Outlet />
                <i onClick={ switchTheme } class='fas fa-toggle-on'></i>
                
            </div>
  
        </>
    )
}