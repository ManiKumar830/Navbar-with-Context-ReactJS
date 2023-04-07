// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickTheme = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <div className="nav-dark-container">
              <img
                className="logo"
                alt="website logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              />
              <ul className="ul-container">
                <li className="light-text">
                  <Link className="link-text light-text" to="/">
                    Home
                  </Link>
                </li>

                <li className="light-text">
                  <Link className="link-text light-text" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <button
                data-testid="theme"
                onClick={onClickTheme}
                className="button"
                type="button"
              >
                <img
                  className="theme-logo"
                  alt="theme"
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                />
              </button>
            </div>
          ) : (
            <div className="nav-light-container">
              <img
                className="logo"
                alt="website logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              />
              <ul className="ul-container">
                <li className="dark-text">
                  <Link className="link-text dark-text" to="/">
                    Home
                  </Link>
                </li>

                <li className="dark-text">
                  <Link className="link-text dark-text" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <button
                data-testid="theme"
                onClick={onClickTheme}
                className="button"
                type="button"
              >
                <img
                  className="theme-logo"
                  alt="theme"
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
