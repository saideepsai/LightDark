// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevstate => ({
      isDarkMode: !prevstate.isDarkMode,
    }))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const text = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container ">
        <div className={`${modeClassName} card`}>
          <h1 className="heading"> Click To change Mode </h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {' '}
            {text}{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
