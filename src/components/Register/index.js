import registerContext from '../../context/registerContext'

import Header from '../Header'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <registerContext.Consumer>
    {value => {
      const {
        username,
        topic,
        showNameError,
        changeName,
        changeTopic,
        updateNameError,
        registerError,
      } = value

      const onChangeUsername = event => {
        changeName(event.target.value)
      }

      const onChangeTopicId = event => {
        changeTopic(event.target.value)
        console.log(event.target.value)
      }

      const submitForm = event => {
        event.preventDefault()
        if (username === '') {
          updateNameError()
        } else {
          const {history} = props
          history.replace('/')
          registerError()
        }
      }

      return (
        <div>
          <Header />
          <div className="registerContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <div>
              <h1>Let us join</h1>
              <form onSubmit={submitForm}>
                <div>
                  <label htmlFor="username">NAME</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Your name"
                    value={username}
                    onChange={onChangeUsername}
                  />
                </div>
                <div>
                  <label htmlFor="select">TOPICS</label>
                  <select id="select" value={topic} onChange={onChangeTopicId}>
                    {topicsList.map(each => (
                      <option key={each.id} value={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="login-button">
                  Register Now
                </button>
              </form>
              {showNameError && <p className="error">Please enter your name</p>}
            </div>
          </div>
        </div>
      )
    }}
  </registerContext.Consumer>
)

export default Register
