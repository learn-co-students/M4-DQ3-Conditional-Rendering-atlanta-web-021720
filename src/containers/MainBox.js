import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    currentSelection: ""
  }

  changeSelection = (event) => {
    this.setState({
      currentSelection: event.target.id
    })
  }

  componentFunction() {
    if (this.state.currentSelection === "profile") {
      return <Profile />
    } else if (this.state.currentSelection === "photo") {
      return <Photos />
    } else if (this.state.currentSelection === "cocktail") {
      return <Cocktails />
    } else if (this.state.currentSelection === "pokemon") {
      return <Pokemon />
    }
  }

  render() {


    const detailsToDisplay = this.componentFunction()//currentState

    return (
      <div>
        <MenuBar changeSelection={this.changeSelection}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
