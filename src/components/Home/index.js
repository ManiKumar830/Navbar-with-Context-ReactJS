// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="home-dark-container">
              <img
                className="home-image"
                alt="home"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              />
              <h1 className="home-light-text">Home</h1>
            </div>
          ) : (
            <div className="home-light-container">
              <img
                className="home-image"
                alt="home"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              />
              <h1 className="home-dark-text">Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
