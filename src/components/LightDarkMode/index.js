// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {backGround: true}

  onChangeMode = () => {
    const {backGround} = this.state
    if (backGround) {
      this.setState({backGround: false})
    } else {
      this.setState({backGround: true})
    }
  }

  render() {
    const {backGround} = this.state

    const one = backGround ? 'Light Mode' : 'Dark Mode'
    const two = backGround ? 'light-mode' : 'dark-mode'
    return (
      <div className="container">
        <div className={two}>
          <h1>Click to Change Mode</h1>
          <button type="button" onClick={this.onChangeMode}>
            {one}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
