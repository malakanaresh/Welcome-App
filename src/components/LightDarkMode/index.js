// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {backGround: true}

  addBackground = () => {
    const {backGround} = this.state
    console.log({backGround})
    if (backGround) {
      this.setState({backGround: false})
    }
  }

  removeBackground = () => {
    const {backGround} = this.state
    if (!backGround) {
      this.setState({backGround: true})
    }
  }

  render() {
    const {backGround} = this.state
    let one

    if (backGround) {
      one = <button onClick="addBackground">Light Mode</button>
    }
    if (!backGround) {
      one = <button onClick="removeBackground">Dark Mode</button>
    }

    return one
  }
}

export default LightDarkMode
