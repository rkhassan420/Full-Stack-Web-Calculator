import Header from "../components/header"
import "./setting.css"
import no_tick from '../assets/not_tick.png'
import tick from '../assets/tick.png'
import icon from '../assets/icon.png'
import theme_icon from '../assets/theme.png'
import theme_dark from '../assets/theme_dark.png'
import { useContext } from "react"
import { ThemeContext } from "../theme/ThemeContext"


const Setting = () => {

    const { theme, handleDarkTheme, handleLightTheme } = useContext(ThemeContext);

    return(
        <div>
            <Header/>
            
            <div>
                <div className="theme-toper" >
                    <p>Appearance</p>
                </div>

                <div  className="theme-container" style={{border: theme === "dark-theme" ? "none" : "1px solid #ccc"
                            }}>

                    <div>
                        <img src={theme === 'dark-theme' ? theme_dark: theme_icon } alt="" style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}  />
                    </div>

                    <div>
                        <h4 style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}   >App Theme</h4>
                        <p style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}   className="theme-title">Select which app theme to display</p>
                    </div>                    

                </div>
                

                <div className="theme-btn" style={{border: theme === "dark-theme" ? "none" : "1px solid #ccc"
                            }} >
                    <ul style={{ listStyle:'none' , backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }} >

                        <li style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}    onClick={handleLightTheme}>
                            <  img src={theme === "light-theme" ? tick : no_tick } style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}   />
                            <p style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}  >Light</p>
                        </li>

                        <li style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}    onClick={handleDarkTheme} >
                            <img src={theme === "dark-theme" ? tick : no_tick} style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}    />
                            <p style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}  >Dark</p>
                        </li>
                        <li style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}  >
                            < img src={no_tick} alt="default" style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}   />
                            <p style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}  >Use System Setting</p>
                        </li>
                    </ul>
                </div>

                <div className="theme-about-title">
                    <p>About</p>
                </div>

                <div className="theme-about" style={{border: theme === "dark-theme" ? "none" : "1px solid #ccc"
                            }}  >             
                        
                        <div style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}  >
                            <img src={icon} alt=""  style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}  />
                        </div>

                        <div>
                            <h4 style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}  >Calculator`s</h4>
                            <p style={{backgroundColor: theme === "dark-theme" ? "#222222" : ""
                            }}   className="theme-rights">&copy; 2025 Ali Hassan. All rights reserved.</p>
                        </div>                       
                    
                </div>
            </div>
        </div>
    )
}; export default Setting