import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import registerContext from './context/registerContext'

import './App.css'

class App extends Component {
  state = {
    username: '',
    topic: 'Arts and Culture',
    showNameError: false,
    isRegistered: false,
  }

  changeName = value => {
    this.setState({username: value})
  }

  changeTopic = value => {
    this.setState({topic: value})
  }

  updateNameError = () => {
    this.setState({showNameError: true})
  }

  registerError = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {username, topic, showNameError, isRegistered} = this.state

    return (
      <registerContext.Provider
        value={{
          username,
          topic,
          showNameError,
          isRegistered,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          updateNameError: this.updateNameError,
          registerError: this.registerError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </registerContext.Provider>
    )
  }
}

export default App
