// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    if (this.prevState >= 0 && this.prevState < 200) {
      this.setState(prevState => ({count: this.prevState.count + 10}))
    }
  }

  onDecrement = () => {
    if (this.prevState >= 0 && this.prevState <= 200) {
      this.setState(prevState => ({
        count: this.prevState.count - 10,
      }))
    }
  }

  render() {
    const {count} = state
    return (
      <div className="bg-container">
        <h1 className="heading1">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer-img"
          alt="Speedometer"
        />
        <h1 className="heading2">Speed is {count}mph</h1>
        <p className="para">Minlimit is 0mph Max limit is 200mph</p>
        <div>
          <button onClick={this.onIncrement} className="button1">
            Accelerate
          </button>
          <button onClick={this.onDecrement} className="button1">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
