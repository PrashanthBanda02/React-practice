import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {bananas: 0, mangoes: 0}

  eatMangoes = () => {
    this.setState(previousState => ({mangoes: previousState.mangoes + 1}))
  }

  eatBananas = () => {
    this.setState(previousState => ({bananas: previousState.bananas + 1}))
  }

  render() {
    const {bananas, mangoes} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span>{mangoes}</span> Mangoes <span>{bananas}</span>{' '}
            Bananas
          </h1>
          <div className="image-container">
            <div className="section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
                className="image"
              />
              <button
                onClick={this.eatMangoes}
                type="button"
                className="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="bananas"
                className="image"
              />
              <button
                onClick={this.eatBananas}
                type="button"
                className="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
