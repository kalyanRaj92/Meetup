import {Link} from 'react-router-dom'
import registerContext from '../../context/registerContext'

import Header from '../Header'

const Home = () => (
  <registerContext.Consumer>
    {value => {
      const {username, topic, isRegistered} = value
      return (
        <div>
          <Header />
          {isRegistered === true ? (
            <div>
              <h1>Hello {username}</h1>
              <p>Welcome to {topic}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          ) : (
            <div>
              <h1>Welcome to Meetup</h1>
              <p>Please register for the topic</p>
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            </div>
          )}
        </div>
      )
    }}
  </registerContext.Consumer>
)

export default Home
