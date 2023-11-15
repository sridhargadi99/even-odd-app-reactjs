// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  incrementButton = () => {
    this.setState(() => ({number: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {number} = this.state
    let result
    if (number % 2 === 0) {
      result = 'Even'
    } else {
      result = 'Odd'
    }
    return (
      <div className="container1">
        <div className="container2">
          <h1 className="heading-style">Count {number}</h1>
          <p className="paragraph1-style">Count is {result}</p>
          <button
            className="button-style"
            type="button"
            onClick={this.incrementButton}
          >
            Increment
          </button>
          <p className="paragraph2-style">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
