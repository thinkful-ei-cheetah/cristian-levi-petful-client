import React, {Component} from 'react'

const AppContext = React.createContext({
  users: [],
  lineQueue: null,
  userName: '',
  currentCat: {},
  currentDog: {},
  error: null,
  setUsers: () => {},
  clearUsers: () => {},
  setLineQueue: () => {},
  clearLineQueue: () => {},
  setUserName: () => {},
  clearUserName: () => {},
  setCurrentCat: () => {},
  clearCurrentCat: () => {},
  setCurrentDog: () => {},
  clearCurrentDog: () => {},
  setError: () => {},
  clearError: () => {},
})

export default AppContext;

export class AppContextProvider extends Component {
  state = {
    users: [],
    lineQueue: null,
    userName: '',
    currentCat: {},
    currentDog: {},
    error: null,
  }

  setUsers = (users) => {
    this.setState({users})
  }

  clearUsers = () => {
    this.setState({users: []})
  }

  setLineQueue = (lineQueue) => {
    this.setState({lineQueue})
  }

  clearLineQueue = () => {
    this.setState({lineQueue: null})
  }

  setUserName = (userName) => {
    this.setState({userName})
  }

  clearUserName = () => {
    this.setState({userName: ''})
  }

  setCurrentCat = (currentCat) => {
    this.setState({currentCat})
  }

  clearCurrentCat = () => {
    this.setState({currentCat: {}})
  }

  setCurrentDog = (currentDog) => {
    this.setState({currentDog})
  }

  clearCurrentDog = () => {
    this.setState({currentDog: {}})
  }

  setError = (error) => {
    console.log(error)
    this.setState({error})
  }

  clearError = () => {
    this.setState({error: null})
  }

  render() {
    const value = {
      users: this.state.users,
      lineQueue: this.state.lineQueue,
      userName: this.state.userName,
      currentCat: this.state.currentCat,
      currentDog: this.state.currentDog,
      error: this.state.error,
      setUsers: this.setUsers,
      clearUsers: this.clearUsers,
      setLineQueue: this.setLineQueue,
      clearLineQueue: this.clearLineQueue,
      setUserName: this.setUserName,
      clearUserName: this.clearUserName,
      setCurrentCat: this.setCurrentCat,
      clearCurrentCat: this.clearCurrentCat,
      setCurrentDog: this.setCurrentDog,
      clearCurrentDog: this.clearCurrentDog,
      setError: this.setError,
      clearError: this.clearError,
    }

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }

}