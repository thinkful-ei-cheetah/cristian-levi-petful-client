import React, {Component} from 'react'

const AppContext = React.createContext({
  users: [],
  lineQueue: null,
  userName: '',
  currentCat: {},
  currentDog: {},
  adoptedPets: [],
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
  setAdopted: () => {},
  clearAdopted: () => {},
  setError: () => {},
  clearError: () => {},
  catOrDog: () => {},
  cycleList: () => {}
})

export default AppContext;

export class AppContextProvider extends Component {
  state = {
    users: [],
    lineQueue: null,
    userName: '',
    currentCat: {},
    currentDog: {},
    adopted: [],
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

  setAdopted = (adopted) => {
    this.setState({adopted: [...this.state.adopted, adopted]})
  }

  clearAdopted = () => {
    this.setState({adopted: []})
  }

  catOrDog = () => {
    let coin = Math.floor(Math.random() * 100)
    if(coin < 50){
      this.handleAdoptCat()
    }
    else {
      this.handleAdoptDog()
    }
  }

  cycleList = () => {
    if(this.context.userName !== this.context.lineQueue.first.value){
      setTimeout(function(){this.catOrDog();}, 5000);
    }
  }


  render() {
    const value = {
      users: this.state.users,
      lineQueue: this.state.lineQueue,
      userName: this.state.userName,
      currentCat: this.state.currentCat,
      currentDog: this.state.currentDog,
      adopted: this.state.adopted,
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
      setAdopted: this.setAdopted,
      clearAdopted: this.clearAdopted,
      setError: this.setError,
      clearError: this.clearError,
      catOrDog: this.catOrDog,
      cycleList: this.cycleList
    }

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }

}