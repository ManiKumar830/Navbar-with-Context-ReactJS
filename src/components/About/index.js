// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="about-dark-container">
              <img
                className="about-image"
                alt="about"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              />
              <h1 className="about-light-text">About</h1>
            </div>
          ) : (
            <div className="about-light-container">
              <img
                className="about-image"
                alt="about"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              />
              <h1 className="about-dark-text">About</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
