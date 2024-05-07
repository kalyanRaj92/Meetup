import React from 'react'

const registerContext = React.createContext({
  username: '',
  topic: 'Arts and Culture',
  showNameError: false,
  isRegistered: false,
  changeName: () => {},
  changeTopic: () => {},
  updateNameError: () => {},
  registerError: () => {},
})

export default registerContext
