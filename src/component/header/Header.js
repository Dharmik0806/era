import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../../redux/context/ThemeContext';
import { checkData } from '../../utility/Utility';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
function Header(props) {

    const themeData = useContext(ThemeContext)

    console.log("useContext");
    console.log(themeData);

    console.log(themeData.themeStyle);

    const logoutAccount = () => {
        localStorage.clear();
    }
    return (
        <>
            {/* ***** Header Area Start ***** */}
            <header className={`header-area header-sticky ${(themeData.themeStyle) === "dark" ? "light" : "dark"}`} id='h'>
            
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <a href="index.html" className="logo">
                                    <img src="assets/images/logo.png" />
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li className="scroll-to-section"><NavLink exact to="/" >Home</NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to="men">Men's</  NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to="/women">Women's</NavLink></li>
                                    <li className="scroll-to-section"><NavLink exact to="/kid">Kid's</NavLink></li>
                                    <li className="submenu">
                                        <a href="javascript:;">Pages</a>
                                        <ul>
                                            <li><NavLink exact to="/About">About Us</NavLink></li>
                                            <li><NavLink exact to="#">Products</NavLink></li>
                                            <li><NavLink exact to="#">Single Product</NavLink></li>
                                            <li><NavLink exact to="/ContectUs">Contact Us</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:;">Features</a>
                                        <ul>
                                            <li><NavLink exact to="#">Features Page 1</NavLink></li>
                                            <li><NavLink exact to="#">Features Page 2</NavLink></li>
                                            <li><NavLink exact to="#">Features Page 3</NavLink></li>
                                            <li><NavLink rel="nofollow" exact to="#" target="_blank">Template Page 4</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="scroll-to-section"><NavLink exact to="#">Explore</NavLink></li>

                                    {
                                        checkData() ? <li className="scroll-to-section"><NavLink onClick={() => logoutAccount()} exact to="/Signin">Signout</NavLink></li> :
                                            <li className="scroll-to-section"><NavLink exact to="/Signin">SignIn</NavLink></li>
                                    }
                        
                                    <button onClick={() => themeData.themeToggle(themeData.themeStyle)} className="theme-btn">
                                        {
                                            (themeData.themeStyle) === "dark" ? <DarkModeIcon className='theme-icon'/> : <LightModeIcon className='theme-icon'/>
                                        }
                                    </button>

                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* ***** Header Area End ***** */}

        </>
    );
}

export default Header;