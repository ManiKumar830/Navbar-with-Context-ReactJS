// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <>
    <Navbar />

    <ThemeContext>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            {isDarkTheme ? (
              <div className="notfound-dark-container">
                <img
                  className="notfound-image"
                  alt="not found"
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                />
                <h1 className="notfound-light-text">Lost Your Way?</h1>
                <p className="notfound-light-description">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            ) : (
              <div className="notfound-light-container">
                <img
                  className="notfound-image"
                  alt="not found"
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                />
                <h1 className="notfound-dark-text">Lost Your Way?</h1>
                <p className="notfound-dark-description">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            )}
          </>
        )
      }}
    </ThemeContext>
  </>
)
export default Home
